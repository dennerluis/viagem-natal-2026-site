(() => {
  const mapsUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const image = (name) => `./assets/images/${name}`;

  const trip = {
    title: 'Natal Europeu 2026',
    dateRange: '06 a 13 de dezembro',
    travelers: 6,
    days: [
      {
        date: '06/12', short: 'Dom', city: 'Viena', title: 'Chegada e primeira noite de Natal', image: 'vienna-stephansdom.jpg',
        intro: 'Bratislava como porta de entrada, depois centro imperial de Viena e Rathausplatz iluminado.',
        items: [
          { time: '09:30', title: 'Pouso em Bratislava', category: 'Chegada', desc: 'Chegada no Aeroporto de Bratislava. Façam imigração, banheiro e organizem as malas antes do ônibus.', maps: 'Bratislava Airport BTS', image: 'bratislava-castle-market.jpg', cost: 'Voo já pago: €66 por pessoa' },
          { time: '11:30', title: 'Ônibus direto para Wien Hbf', category: 'Transporte', desc: 'Slovak Lines direto do aeroporto de Bratislava para a estação central de Viena. Horário final a confirmar.', maps: 'Wien Hauptbahnhof Vienna', image: 'vienna-stephansdom.jpg', cost: '€10 estimado por pessoa' },
          { time: '14:00', title: 'Centro imperial a pé', category: 'Passeio gratuito', desc: 'Stephansplatz, Stephansdom por fora, Graben, Kohlmarkt, Hofburg, Heldenplatz, Maria-Theresien-Platz e Ópera por fora.', maps: 'Stephansplatz Vienna', image: 'vienna-stephansdom.jpg', cost: 'Gratuito' },
          { time: '18:00', title: 'Rathausplatz Christmas Market', category: 'Christmas Market', desc: 'Primeiro mercado de Natal, com jantar e vinho quente. Noite leve para descansar antes de Praga.', maps: 'Vienna Christmas Market Rathausplatz', image: 'vienna-stephansdom.jpg', cost: 'Consumo a registrar' }
        ]
      },
      {
        date: '07/12', short: 'Seg', city: 'Viena → Praga', title: 'Viena essencial e Pub Crawl', image: 'vienna-belvedere.jpg',
        intro: 'Manhã sem entradas pagas, Railjet para Praga e a primeira grande noite da viagem.',
        items: [
          { time: '08:30', title: 'Checkout e malas', category: 'Hospedagem', desc: 'Café, checkout no JO&JOE e malas guardadas no hostel ou em locker na estação central.', maps: 'JO&JOE Vienna', image: 'vienna-belvedere.jpg', cost: 'Hostel: €29 por pessoa' },
          { time: '09:30', title: 'Belvedere por fora ou Karlsplatz', category: 'Passeio gratuito', desc: 'Escolham Belvedere e jardins, perto da estação, ou Karlsplatz e Karlskirche por fora no centro.', maps: 'Belvedere Palace Vienna', image: 'vienna-belvedere.jpg', cost: 'Gratuito' },
          { time: 'Após almoço', title: 'Railjet para Praga', category: 'Transporte', desc: 'Trem direto Viena → Praga. Horário ainda a confirmar. A viagem leva aproximadamente 3h57.', maps: 'Wien Hauptbahnhof Vienna', image: 'prague-old-town-market.jpg', cost: '€17 estimado por pessoa' },
          { time: '19:30', title: 'Old Town Square Christmas Market', category: 'Christmas Market', desc: 'Primeira vista de Praga iluminada, Relógio Astronômico por fora e jantar rápido antes da festa.', maps: 'Old Town Square Prague', image: 'prague-old-town-market.jpg', cost: 'Consumo a registrar' },
          { time: '22:00', title: 'Drunken Monkey Pub Crawl', category: 'Noite confirmada', desc: 'Encontro no próprio Drunken Monkey Hostel. A programação do dia seguinte começa apenas ao meio-dia.', maps: 'Drunken Monkey Hostel Prague', image: 'prague-charles-bridge.jpg', cost: '€32 por pessoa, confirmado' }
        ]
      },
      {
        date: '08/12', short: 'Ter', city: 'Praga', title: 'Castelo, Malá Strana e mercados', image: 'prague-st-vitus.jpg',
        intro: 'Dia começa ao meio-dia para respeitar a ressaca. Castelo de Praga é a única atração paga.',
        items: [
          { time: 'Até 12:00', title: 'Dormir, banho e brunch', category: 'Recuperação', desc: 'Sem alarme depois do Pub Crawl. Tomem um brunch reforçado perto do hostel antes de sair.', maps: 'Drunken Monkey Hostel Prague', image: 'prague-charles-bridge.jpg', cost: 'Consumo a registrar' },
          { time: '12:30', title: 'Castelo de Praga, Main Circuit', category: 'Entrada paga', desc: 'St. Vitus Cathedral, Old Royal Palace, St. George’s Basilica e Golden Lane. Reservem cerca de 3h15.', maps: 'Prague Castle', image: 'prague-st-vitus.jpg', cost: '450 CZK, aprox. €18,44 por pessoa' },
          { time: '16:00', title: 'Malá Strana e Lennon Wall', category: 'Passeio gratuito', desc: 'Almoço tardio em Malá Strana, St. Nicholas por fora e Lennon Wall.', maps: 'Lennon Wall Prague', image: 'prague-lennon-wall.jpg', cost: 'Gratuito' },
          { time: '17:45', title: 'Charles Bridge iluminada', category: 'Passeio gratuito', desc: 'Em dezembro escurece cedo. A ponte iluminada é uma das imagens mais bonitas de Praga.', maps: 'Charles Bridge Prague', image: 'prague-charles-bridge.jpg', cost: 'Gratuito' },
          { time: '18:45', title: 'Klementinum por fora e mercados', category: 'Christmas Market', desc: 'Passagem pela entrada do Klementinum, Old Town Square e, se houver energia, Wenceslas Square.', maps: 'Klementinum Prague', image: 'prague-old-town-market.jpg', cost: 'Gratuito, consumo a registrar' }
        ]
      },
      {
        date: '09/12', short: 'Qua', city: 'Praga → Budapeste', title: 'Centro histórico e trem noturno', image: 'prague-powder-tower.jpg',
        intro: 'Últimas caminhadas gratuitas em Praga antes do beliche para Budapeste.',
        items: [
          { time: '10:00', title: 'Jewish Quarter por fora', category: 'Passeio gratuito', desc: 'Josefov, fachadas das sinagogas Old-New e Spanish e caminhada pela elegante Pařížská Street.', maps: 'Josefov Prague', image: 'prague-charles-bridge.jpg', cost: 'Gratuito' },
          { time: '11:15', title: 'Torre da Pólvora e Municipal House', category: 'Passeio gratuito', desc: 'Foto externa da Torre da Pólvora, Municipal House por fora e caminhada pela Na Příkopě.', maps: 'Powder Tower Prague', image: 'prague-powder-tower.jpg', cost: 'Gratuito' },
          { time: '13:30', title: 'Tempo livre no centro', category: 'Livre', desc: 'Cafés, compras, pontos favoritos ou mais tempo na Old Town antes de pegar as malas.', maps: 'Old Town Square Prague', image: 'prague-old-town-market.jpg', cost: 'Consumo a registrar' },
          { time: '16:00', title: 'Último Christmas Market', category: 'Christmas Market', desc: 'Jantar cedo e última caminhada no centro iluminado.', maps: 'Old Town Square Prague', image: 'prague-old-town-market.jpg', cost: 'Consumo a registrar' },
          { time: '21:58', title: 'Trem noturno EN 477 para Budapeste', category: 'Transporte confirmado', desc: 'Beliche confirmado. Cheguem à Praha hl.n. com antecedência e tenham documentos e carregadores acessíveis.', maps: 'Praha hlavní nádraží', image: 'prague-charles-bridge.jpg', cost: '€48 por pessoa, confirmado' }
        ]
      },
      {
        date: '10/12', short: 'Qui', city: 'Budapeste', title: 'Danúbio, Parlamento e ruin bars', image: 'budapest-parliament-night.jpg',
        intro: 'Chegada cedo do trem noturno e primeira volta pelos ícones de Pest.',
        items: [
          { time: '08:30', title: 'Chegada e café', category: 'Chegada', desc: 'Chegada aproximada do trem, café e malas no Hive Hostel ou em locker até o quarto ficar disponível.', maps: 'Budapest Nyugati Railway Station', image: 'budapest-parliament-night.jpg', cost: 'Hostel: €40 por pessoa, 2 noites' },
          { time: '10:00', title: 'Parlamento e Shoes on the Danube', category: 'Passeio gratuito', desc: 'Ver o Parlamento pela margem do Danúbio e visitar o memorial Shoes on the Danube.', maps: 'Hungarian Parliament Building Budapest', image: 'budapest-parliament-night.jpg', cost: 'Gratuito' },
          { time: '13:00', title: 'Chain Bridge e Basílica por fora', category: 'Passeio gratuito', desc: 'Atravessar a Chain Bridge e passar pela Basílica de Santo Estêvão sem entrada paga.', maps: 'Chain Bridge Budapest', image: 'budapest-chain-bridge.jpg', cost: 'Gratuito' },
          { time: '15:00', title: 'Váci utca', category: 'Passeio gratuito', desc: 'Ruas centrais para caminhar, cafés e compras.', maps: 'Váci utca Budapest', image: 'budapest-parliament-night.jpg', cost: 'Consumo a registrar' },
          { time: '17:00', title: 'Christmas Markets e Jewish Quarter', category: 'Noite', desc: 'Vörösmarty Square, mercado da Basílica e depois jantar ou ruin bars no Jewish Quarter.', maps: 'Vörösmarty Square Christmas Market Budapest', image: 'budapest-parliament-night.jpg', cost: 'Consumo a registrar' }
        ]
      },
      {
        date: '11/12', short: 'Sex', city: 'Budapeste', title: 'Buda, City Park e Boat Party', image: 'budapest-fishermans-bastion.jpg',
        intro: 'Vistas do lado de Buda durante o dia e festa no Danúbio às 22:30.',
        items: [
          { time: '10:00', title: 'Buda Castle e Fisherman’s Bastion', category: 'Passeio gratuito', desc: 'Buda Castle grounds, Igreja de Matias por fora, praça Szentháromság e Fisherman’s Bastion pelas áreas gratuitas.', maps: 'Fisherman’s Bastion Budapest', image: 'budapest-fishermans-bastion.jpg', cost: 'Gratuito' },
          { time: '14:30', title: 'Heroes’ Square e City Park', category: 'Passeio gratuito', desc: 'Heroes’ Square, Vajdahunyad Castle por fora e foto rápida do Széchenyi, sem entrar.', maps: 'Heroes Square Budapest', image: 'budapest-heroes-square.jpg', cost: 'Gratuito' },
          { time: '18:00', title: 'Descanso e jantar', category: 'Preparação', desc: 'Voltar ao hostel, banho, descanso e jantar antes do encontro da Boat Party.', maps: 'Hive Party Hostel Budapest', image: 'budapest-parliament-night.jpg', cost: 'Consumo a registrar' },
          { time: '22:30', title: 'Boat Party', category: 'Noite confirmada', desc: 'Encontro no Akadémia 2 Ponton. Confiram o ingresso no dia. O sábado começa ao meio-dia.', maps: 'Akadémia 2 Ponton Budapest', image: 'budapest-parliament-night.jpg', cost: '€62 por pessoa, confirmado' }
        ]
      },
      {
        date: '12/12', short: 'Sáb', city: 'Budapeste → Bratislava', title: 'Ressaca, Bratislava e último mercado', image: 'bratislava-castle-market.jpg',
        intro: 'Manhã livre após a Boat Party e noite no centro compacto de Bratislava.',
        items: [
          { time: 'Até 12:00', title: 'Dormir, banho e checkout', category: 'Recuperação', desc: 'Sem turismo de manhã. Peçam checkout tardio se houver disponibilidade ou deixem malas guardadas.', maps: 'Hive Party Hostel Budapest', image: 'budapest-parliament-night.jpg', cost: 'Sem custo extra confirmado' },
          { time: '12:00', title: 'Brunch e estação', category: 'Transporte', desc: 'Brunch reforçado e ida à estação para o trem direto Budapeste → Bratislava.', maps: 'Budapest Nyugati Railway Station', image: 'budapest-parliament-night.jpg', cost: 'Consumo a registrar' },
          { time: '13:00 aprox.', title: 'Trem para Bratislava', category: 'Transporte', desc: 'Horário final a confirmar. A chegada precisa preservar a noite no Christmas Market.', maps: 'Bratislava hlavná stanica', image: 'bratislava-castle-market.jpg', cost: '€14 estimado por pessoa' },
          { time: 'Fim da tarde', title: 'Castelo de Bratislava por fora', category: 'Passeio opcional', desc: 'Subam apenas se houver energia e luz. Jardins e mirante são gratuitos.', maps: 'Bratislava Castle', image: 'bratislava-castle-market.jpg', cost: 'Gratuito' },
          { time: '17:30', title: 'Centro histórico e Christmas Market', category: 'Christmas Market', desc: 'Catedral de São Martinho por fora, Michael’s Gate, Čumil, Hlavné námestie e Hviezdoslavovo námestie.', maps: 'Hlavné námestie Bratislava', image: 'bratislava-castle-market.jpg', cost: 'Hostel: €18 por pessoa, consumo a registrar' }
        ]
      },
      {
        date: '13/12', short: 'Dom', city: 'Bratislava → Dublin', title: 'Volta para Dublin', image: 'bratislava-castle-market.jpg',
        intro: 'Saída cedo para o Aeroporto de Bratislava e voo de volta.',
        items: [
          { time: '06:45 a 07:15', title: 'Saída para o aeroporto', category: 'Transporte', desc: 'Definir ônibus urbano ou táxi conforme o endereço final do hostel e o primeiro horário disponível.', maps: 'Bratislava Airport BTS', image: 'bratislava-castle-market.jpg', cost: 'Valor a pesquisar' },
          { time: '07:55', title: 'Chegada ao Aeroporto BTS', category: 'Aeroporto', desc: 'Chegar com cerca de duas horas antes do voo. Documentos e bagagem de mão prontos.', maps: 'Bratislava Airport BTS', image: 'bratislava-castle-market.jpg', cost: 'Incluído no voo' },
          { time: '09:55', title: 'Voo para Dublin', category: 'Volta', desc: 'Voo Bratislava → Dublin.', maps: 'Bratislava Airport BTS', image: 'bratislava-castle-market.jpg', cost: 'Voo já pago: €66 por pessoa' }
        ]
      }
    ],
    costs: [
      { id: 'flight', category: 'Voos', title: 'Dublin → Bratislava → Dublin', note: 'Ida e volta. Já pago.', amount: 66, paid: true },
      { id: 'bus-bts-vienna', category: 'Transporte', title: 'BTS → Viena', note: 'Ônibus Slovak Lines, horário pendente.', amount: 10 },
      { id: 'hostel-vienna', category: 'Hospedagem', title: 'JO&JOE Viena', note: '1 noite.', amount: 29 },
      { id: 'train-vienna-prague', category: 'Transporte', title: 'Viena → Praga', note: 'Railjet, horário pendente.', amount: 17 },
      { id: 'hostel-prague', category: 'Hospedagem', title: 'Drunken Monkey Praga', note: '2 noites.', amount: 40 },
      { id: 'pubcrawl', category: 'Noite', title: 'Drunken Monkey Pub Crawl', note: '07/12, 22:00 no hostel.', amount: 32 },
      { id: 'castle-prague', category: 'Atração', title: 'Castelo de Praga, Main Circuit', note: '450 CZK convertido para euro.', amount: 18.44 },
      { id: 'night-train', category: 'Transporte', title: 'Trem noturno Praga → Budapeste', note: 'Beliche EN 477.', amount: 48 },
      { id: 'hostel-budapest', category: 'Hospedagem', title: 'Hive Hostel Budapeste', note: '2 noites, quarto de 6 e banheiro privativo.', amount: 40 },
      { id: 'boat-party', category: 'Noite', title: 'Boat Party Budapeste', note: '11/12, 22:30 no Akadémia 2 Ponton.', amount: 62 },
      { id: 'train-budapest-bratislava', category: 'Transporte', title: 'Budapeste → Bratislava', note: 'Trem, horário pendente.', amount: 14 },
      { id: 'hostel-bratislava', category: 'Hospedagem', title: 'Wild Elephants Bratislava', note: '1 noite.', amount: 18 }
    ],
    checklist: [
      { id: 'passport', title: 'Passaporte e IRP', note: 'Ter os dois acessíveis nos deslocamentos.' },
      { id: 'flights', title: 'Boarding passes dos voos', note: 'Baixar no celular e manter cópia no e-mail.' },
      { id: 'trains', title: 'Tickets de trem e ônibus', note: 'Especialmente o EN 477 e os dois horários pendentes.' },
      { id: 'bank', title: 'Cartão e limite internacional', note: 'Avisar o banco se necessário e levar cartão reserva.' },
      { id: 'charger', title: 'Carregador, cabo e power bank', note: 'Power bank sempre na bagagem de mão.' },
      { id: 'adapter', title: 'Adaptador tipo C/F', note: 'Irlanda usa tomada tipo G; Europa Central usa C/F.' },
      { id: 'roaming', title: 'Roaming ou eSIM', note: 'Confirmar cobertura na Áustria, Tchéquia, Hungria e Eslováquia.' },
      { id: 'cold', title: 'Casaco, camadas e luvas', note: 'Noites de mercado de Natal podem ser bem frias.' },
      { id: 'party', title: 'Roupa para Pub Crawl e Boat Party', note: 'Levar opção de festa que não ocupe muito espaço.' },
      { id: 'offline', title: 'Baixar mapas offline', note: 'Baixar áreas das quatro cidades no Google Maps.' }
    ]
  };

  let state = { ...TripStorage.DEFAULT_STATE };
  let activeDay = 0;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const euro = (amount) => new Intl.NumberFormat('pt-IE', { style: 'currency', currency: 'EUR' }).format(amount);

  const isTripDate = () => {
    const now = new Date();
    const start = new Date('2026-12-06T00:00:00');
    const end = new Date('2026-12-13T23:59:59');
    return now >= start && now <= end;
  };
  const dayForNow = () => {
    if (!isTripDate()) return 0;
    return Math.max(0, Math.min(7, new Date().getDate() - 6));
  };
  const savedPaid = (id) => state.paid.includes(id);
  const paidIds = () => [...new Set(state.paid)];
  const mapButton = (query) => `<a class="mini-map" href="${mapsUrl(query)}" target="_blank" rel="noopener" aria-label="Abrir mapa">⌖</a>`;

  function renderHome() {
    const nowDay = dayForNow();
    const day = trip.days[nowDay];
    const upcoming = day.items[0];
    $('#screen-home').innerHTML = `
      <div class="hero" style="--hero-image:url('${image(day.image)}')">
        <p class="eyebrow">06 a 13 de dezembro de 2026</p>
        <h1>Natal<br>Europeu</h1>
        <p class="hero-copy">Viena, Praga, Budapeste e Bratislava.</p>
        <div class="route-chips"><span>6 amigos</span><span>4 cidades</span><span>1 noite no trem</span></div>
      </div>
      <div class="section-heading"><div><h2>${isTripDate() ? 'Próxima parada' : 'Ponto de partida'}</h2><p>${day.date} · ${day.city}</p></div></div>
      <article class="next-card">
        <div class="next-row"><div><span class="next-time">${upcoming.time}</span><h3>${upcoming.title}</h3><p>${upcoming.desc}</p></div>${mapButton(upcoming.maps)}</div>
      </article>
      <div class="section-heading"><div><h2>A viagem em um toque</h2><p>Roteiro, custos e guia no celular</p></div></div>
      <div class="quick-grid">
        <button class="quick-card" data-go="itinerary"><span class="quick-icon">☰</span><strong>Roteiro diário</strong><span>8 dias organizados</span></button>
        <button class="quick-card" data-go="costs"><span class="quick-icon">€</span><strong>Custos</strong><span>Pagamentos e gastos</span></button>
        <button class="quick-card" data-go="guide"><span class="quick-icon">⌂</span><strong>Hostels</strong><span>Mapas e reservas</span></button>
        <button class="quick-card" data-go="guide"><span class="quick-icon">✓</span><strong>Checklist</strong><span>Antes de sair</span></button>
      </div>`;
    $$('[data-go]', $('#screen-home')).forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.go)));
  }

  function renderItinerary() {
    const day = trip.days[activeDay];
    $('#screen-itinerary').innerHTML = `
      <header class="page-intro"><h1 id="itinerary-title" class="page-title">Roteiro</h1><p>Toque em cada atividade para ver detalhes e abrir a localização.</p></header>
      <div class="day-tabs">${trip.days.map((item, index) => `<button class="day-tab ${index === activeDay ? 'is-active' : ''}" data-day="${index}" type="button"><strong>${item.short} ${item.date}</strong><span>${item.city}</span></button>`).join('')}</div>
      <div class="day-summary"><img src="${image(day.image)}" alt="${day.city}"><div><h2>${day.short}, ${day.date} · ${day.city}</h2><p>${day.intro}</p></div></div>
      <div class="timeline">${day.items.map((item, index) => `<button class="timeline-item" data-activity="${index}" type="button"><div class="timeline-top"><span class="timeline-time">${item.time}</span><span class="timeline-city">${item.category}</span></div><h3>${item.title}</h3><p>${item.desc}</p>${item.cost.includes('confirmado') ? '<span class="timeline-flag">CONFIRMADO</span>' : ''}</button>`).join('')}</div>`;
    $$('[data-day]', $('#screen-itinerary')).forEach((button) => button.addEventListener('click', () => { activeDay = Number(button.dataset.day); renderItinerary(); }));
    $$('[data-activity]', $('#screen-itinerary')).forEach((button) => button.addEventListener('click', () => openActivity(day.items[Number(button.dataset.activity)], day.city)));
  }

  function renderCosts() {
    const paidTotal = trip.costs.filter((item) => savedPaid(item.id)).reduce((sum, item) => sum + item.amount, 0);
    const planned = trip.costs.reduce((sum, item) => sum + item.amount, 0);
    const extras = state.expenses.reduce((sum, item) => sum + Number(item.amount), 0);
    const percent = Math.round((paidTotal / planned) * 100);
    $('#screen-costs').innerHTML = `
      <header class="page-intro"><h1 id="costs-title" class="page-title">Custos</h1><p>Valores individuais. Marque o que pagou e inclua gastos reais durante a viagem.</p></header>
      <section class="cost-hero"><span class="eyebrow">Planejado por pessoa</span><p class="total-number">${euro(planned)}</p><p>${euro(paidTotal)} marcado como pago · ${euro(extras)} em gastos extras</p><div class="cost-progress"><span style="width:${percent}%"></span></div></section>
      <div class="section-heading"><div><h2>Planejado</h2><p>Toque na caixa quando pagar</p></div></div>
      <div class="cost-list">${trip.costs.map((item) => {
        const paid = savedPaid(item.id);
        return `<label class="cost-item ${paid ? 'is-paid' : ''}"><input class="cost-check" type="checkbox" data-cost="${item.id}" ${paid ? 'checked' : ''}><span class="cost-details"><strong>${item.title}</strong><small>${item.category} · ${item.note}</small>${paid ? '<span class="status-label">PAGO</span>' : ''}</span><span class="cost-value">${euro(item.amount)}</span></label>`;
      }).join('')}</div>
      <div class="section-heading"><div><h2>Gastos reais</h2><p>Comida, bebida ou extras</p></div></div>
      <form id="expense-form" class="expense-form"><select id="expense-category" aria-label="Categoria"><option>Alimentação</option><option>Bebida</option><option>Transporte local</option><option>Extra</option></select><input id="expense-description" required maxlength="42" placeholder="Descrição"><input id="expense-amount" required min="0.01" step="0.01" inputmode="decimal" type="number" placeholder="€"><button class="primary-button" type="submit">+</button></form>
      <div class="expense-list">${state.expenses.length ? state.expenses.map((item) => `<div class="expense-row"><span>${item.category} · ${item.description}</span><strong>${euro(Number(item.amount))}</strong><button class="delete-expense" type="button" data-delete="${item.id}" aria-label="Excluir gasto">×</button></div>`).join('') : '<p class="page-title" style="font-size:.92rem;color:var(--muted);margin:12px 0">Nenhum gasto real adicionado ainda.</p>'}</div>`;
    $$('[data-cost]', $('#screen-costs')).forEach((input) => input.addEventListener('change', async () => {
      const ids = paidIds();
      state.paid = input.checked ? [...new Set([...ids, input.dataset.cost])] : ids.filter((id) => id !== input.dataset.cost);
      state = await TripStorage.save(state); renderCosts(); showToast(input.checked ? 'Pagamento marcado como pago.' : 'Pagamento marcado como pendente.');
    }));
    $('#expense-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const category = $('#expense-category').value;
      const description = $('#expense-description').value.trim();
      const amount = Number($('#expense-amount').value);
      if (!description || !amount) return;
      state.expenses = [...state.expenses, { id: `expense-${Date.now()}`, category, description, amount }];
      state = await TripStorage.save(state); renderCosts(); showToast('Gasto adicionado.');
    });
    $$('[data-delete]', $('#screen-costs')).forEach((button) => button.addEventListener('click', async () => {
      state.expenses = state.expenses.filter((item) => item.id !== button.dataset.delete);
      state = await TripStorage.save(state); renderCosts(); showToast('Gasto removido.');
    }));
  }

  function renderGuide() {
    const stays = [
      ['Viena', 'JO&JOE Hostel', '1 noite · €29', 'JO&JOE Vienna'],
      ['Praga', 'Drunken Monkey Hostel', '2 noites · €40', 'Drunken Monkey Hostel Prague'],
      ['Budapeste', 'Hive Hostel', '2 noites · €40', 'Hive Party Hostel Budapest'],
      ['Bratislava', 'Wild Elephants Hostel', '1 noite · €18', 'Wild Elephants Hostel Bratislava']
    ];
    $('#screen-guide').innerHTML = `
      <header class="page-intro"><h1 id="guide-title" class="page-title">Guia</h1><p>Hospedagem, checklist, reservas e instruções para usar offline.</p></header>
      <section class="guide-card"><h3>Hostels</h3>${stays.map(([city, hostel, note, query]) => `<a class="stay-row" href="${mapsUrl(query)}" target="_blank" rel="noopener"><span class="stay-icon">⌂</span><span><strong>${city} · ${hostel}</strong><small>${note}</small></span><span>⌖</span></a>`).join('')}</section>
      <section class="guide-card"><h3>Reservas e pontos de encontro</h3>
        <a class="link-row" href="${mapsUrl('Drunken Monkey Hostel Prague')}" target="_blank" rel="noopener">07/12 · Pub Crawl, 22:00 no Drunken Monkey <span>⌖</span></a>
        <a class="link-row" href="${mapsUrl('Akadémia 2 Ponton Budapest')}" target="_blank" rel="noopener">11/12 · Boat Party, 22:30 no Akadémia 2 Ponton <span>⌖</span></a>
        <a class="link-row" href="https://www.cd.cz/en/spojeni-a-jizdenka/" target="_blank" rel="noopener">Trem noturno EN 477 e demais trens <span>↗</span></a>
        <a class="link-row" href="https://www.slovaklines.sk/en/" target="_blank" rel="noopener">Slovak Lines, BTS → Viena <span>↗</span></a>
        <a class="link-row" href="./credits.html">Créditos e licenças das imagens <span>↗</span></a>
      </section>
      <section class="guide-card"><h3>Checklist</h3><div class="checklist">${trip.checklist.map((item) => { const checked = state.checked.includes(item.id); return `<label class="check-row ${checked ? 'is-done' : ''}"><input type="checkbox" data-check="${item.id}" ${checked ? 'checked' : ''}><span><strong>${item.title}</strong><small style="display:block;color:var(--muted);margin-top:2px;font-size:.73rem">${item.note}</small></span></label>`; }).join('')}</div></section>
      <section class="install-note"><strong>Instalação no iPhone:</strong> abra este site no Safari, toque em Compartilhar e escolha <em>Adicionar à Tela de Início</em>. O roteiro, checklist e gastos ficam salvos neste navegador e aparelho. O modo offline mantém o conteúdo do site, mas os links do Google Maps precisam de internet.</section>`;
    $$('[data-check]', $('#screen-guide')).forEach((input) => input.addEventListener('change', async () => {
      const checked = new Set(state.checked);
      input.checked ? checked.add(input.dataset.check) : checked.delete(input.dataset.check);
      state.checked = [...checked]; state = await TripStorage.save(state); renderGuide();
    }));
  }

  function openActivity(item, city) {
    const dialog = $('#activity-dialog');
    $('#dialog-image').src = image(item.image);
    $('#dialog-image').alt = item.title;
    $('#dialog-label').textContent = `${city} · ${item.category}`;
    $('#dialog-title').textContent = item.title;
    $('#dialog-description').textContent = item.desc;
    $('#dialog-time').textContent = item.time;
    $('#dialog-cost').textContent = item.cost;
    $('#dialog-maps').href = mapsUrl(item.maps);
    dialog.showModal();
  }

  function showScreen(name) {
    $$('.screen').forEach((screen) => screen.classList.toggle('is-active', screen.id === `screen-${name}`));
    $$('.nav-button').forEach((button) => button.classList.toggle('is-active', button.dataset.screen === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showToast(text) {
    const toast = $('#toast-template').content.firstElementChild.cloneNode(true);
    toast.textContent = text; document.body.append(toast); setTimeout(() => toast.remove(), 2100);
  }

  async function boot() {
    state = await TripStorage.load();
    if (!state.initialized) {
      state.paid = trip.costs.filter((item) => item.paid).map((item) => item.id);
      state.initialized = true;
      state = await TripStorage.save(state);
    }
    renderHome(); renderItinerary(); renderCosts(); renderGuide();
    $$('.nav-button').forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.screen)));
    $('.dialog-close').addEventListener('click', () => $('#activity-dialog').close());
    $('#activity-dialog').addEventListener('click', (event) => { if (event.target.id === 'activity-dialog') event.currentTarget.close(); });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
  boot();
})();
