/* Persistência versionada: localStorage + IndexedDB, com restauração do snapshot mais recente. */
window.TripStorage = (() => {
  const KEY = 'natal-2026-state-v2';
  const DB_NAME = 'natal-2026-db-v2';
  const STORE = 'snapshots';
  const DEFAULT_STATE = { version: 1, initialized: false, paid: [], expenses: [], checked: [], savedAt: 0 };

  const clean = (value) => ({
    version: 1,
    initialized: Boolean(value?.initialized),
    paid: Array.isArray(value?.paid) ? value.paid : [],
    expenses: Array.isArray(value?.expenses) ? value.expenses : [],
    checked: Array.isArray(value?.checked) ? value.checked : [],
    savedAt: Number(value?.savedAt || 0)
  });

  const openDb = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  const fromDb = async () => {
    try {
      const db = await openDb();
      return await new Promise((resolve, reject) => {
        const request = db.transaction(STORE, 'readonly').objectStore(STORE).get(KEY);
        request.onsuccess = () => resolve(clean(request.result));
        request.onerror = () => reject(request.error);
      });
    } catch { return clean(DEFAULT_STATE); }
  };

  const toDb = async (state) => {
    try {
      const db = await openDb();
      await new Promise((resolve, reject) => {
        const request = db.transaction(STORE, 'readwrite').objectStore(STORE).put(state, KEY);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch { /* O localStorage continua como fallback. */ }
  };

  const fromLocal = () => {
    try { return clean(JSON.parse(localStorage.getItem(KEY))); }
    catch { return clean(DEFAULT_STATE); }
  };

  const save = async (next) => {
    const state = clean({ ...next, savedAt: Date.now() });
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* Sem espaço ou modo restrito. */ }
    await toDb(state);
    return state;
  };

  const load = async () => {
    const [local, indexed] = await Promise.all([fromLocal(), fromDb()]);
    const state = indexed.savedAt > local.savedAt ? indexed : local;
    if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
    return state;
  };

  return { DEFAULT_STATE, load, save };
})();
