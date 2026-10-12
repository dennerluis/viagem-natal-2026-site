# Natal Europeu 2026 | PWA

Site estático e instalável para a viagem de 06 a 13 de dezembro de 2026.

## Executar preview local

```bash
cd /home/ubuntu/viagem-natal-2026-site
python3 -m http.server 4174 --bind 0.0.0.0
```

## Validação

```bash
node tests/verify-static.mjs /home/ubuntu/viagem-natal-2026-site
node --check app.js
node --check storage.js
node --check sw.js
```

## Privacidade e publicação

O projeto não contém QR codes, vouchers, referências de reserva, nomes completos, PNR ou outros dados privados. A publicação em GitHub Pages depende de autorização explícita.
