// app.js (clean)
// router
import { getRoute, onRouteChange, currentHash } from './router.js';

// ===== helpers
function getCaseIdFromHash() {
  const m = (window.location.hash || '').match(/^#\/case\/(\d+)/);
  return m ? m[1] : null;
}

const renderCaseHeader = () => `
  <div class="home-bar-sticky">
    <header class="home-bar">
      <a href="#/" class="back-btn" aria-label="Назад">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </a>
      <h1 class="hero-title">bids.club — кейсы.</h1>
    </header>
  </div>
`;

// ===== live strip (global) ===================================================
const renderLiveStrip = () => `
  <section class="live-strip">
    <div class="live-track">
      ${Array.from({ length: 20 }).map((_, i) => `
        <div class="live-item q-${
          i % 5 === 0 ? 'covert' :
          i % 5 === 1 ? 'mythical' :
          i % 5 === 2 ? 'rare' :
          i % 5 === 3 ? 'uncommon' : 'ancient'
        }">
          <div class="live-pic"></div>
        </div>
        ${i < 19 ? '<div class="live-separator"></div>' : ''}
      `).join('')}
    </div>
  </section>
`;

const renderSubHeader = (title, backHref = '#/') => `
  <div class="home-bar-sticky">
    <header class="home-bar home-bar--sub">
      <a href="${backHref}" class="back-btn" aria-label="Назад">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </a>
      <h1 class="hero-title">${title}</h1>
      <span></span>
    </header>
  </div>
`;

// ===== UI templates
const templates = {
  Home: `
    <div class="home-bar-sticky">
      <header class="home-bar">
        <h1 class="hero-title">bids.club — кейсы.</h1>

        <div class="filters-bar">
          <div class="search-shell">
            <div class="search-panel">
              <button class="search-icon-btn" aria-label="Поиск">
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </button>
              <input class="search-input" type="text" placeholder="Введите название" />
            </div>
          </div>

          <div class="price-range">
            <input class="price-input" type="text" inputmode="decimal" placeholder="$0.00" aria-label="Min price">
            <div class="divider" aria-hidden="true"></div>
            <input class="price-input" type="text" inputmode="decimal" placeholder="$1 000.00" aria-label="Max price">
          </div>

          <div class="category">
            <button class="category-select" type="button" aria-haspopup="listbox" aria-expanded="false">
              <span class="category-text">Все категории</span>
              <span class="category-ico" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M15 11l-3 3l-3-3"></path>
                </svg>
              </span>
            </button>
            <ul class="category-menu" role="listbox">
              <li role="option" data-value="all">Все категории</li>
              <li role="option" data-value="pistols">Пистолеты</li>
              <li role="option" data-value="rifles">Винтовки</li>
              <li role="option" data-value="knives">Ножи</li>
              <li role="option" data-value="gloves">Перчатки</li>
            </ul>
          </div>
        </div>
      </header>
    </div>

    <section class="cases-grid">
      ${Array.from({ length: 8 }).map((_, i) => `
        <article class="case-card" data-case-id="${i+1}" role="button" tabindex="0" aria-label="Открыть кейс ${i+1}">
          <div class="case-media">
            <div class="case-plate"></div>
            <img class="case-bg" src="/img/case-bg.png" alt="" />
            <img class="case-weapon" src="/img/case-weapon.png" alt="" />
            <div class="case-foot">
              <div class="case-title">Case #${i+1}</div>
              <div class="case-price">$1.00</div>
            </div>
          </div>
        </article>
      `).join('')}
    </section>

    <section class="raffles">
      ${[275,220,160].map((w,i)=>`
        <div class="raffle-item">
          <div class="raffle-hero" aria-hidden="true"><img src="img/gun.png" alt=""></div>
          <div class="raffle-body">
            <div class="raffle-price">$15.<span>35</span></div>
            <div class="raffle-text">
              <div class="raffle-type">${['Ежедневный','Трёхдневный','Недельный'][i]}</div>
              <div class="raffle-name">MP5-SD | PHOSPHOR</div>
            </div>
            <div class="raffle-progress"><div class="raffle-progress-fill" style="width:${w}px"></div></div>
            <div class="raffle-meta">
              <span class="raffle-condition">Пополни баланс на 150₽</span>
              <span class="raffle-timer">${['59 мин','3 дня','7 дней'][i]}</span>
            </div>
          </div>
        </div>
        ${i<2?'<div class="raffle-divider" aria-hidden="true"></div>':''}
      `).join('')}
    </section>

    <section class="cases-stats">
      <div class="stats-col stats-col--popular">
        <h3 class="popular-heading">Самый популярный за {Август}</h3>
        <article class="popular-card" data-case-id="15" role="button" tabindex="0" aria-label="Открыть популярный кейс">
          <div class="popular-media">
            <div class="popular-img" style="--img:url('/img/case-bg.png')" aria-hidden="true"></div>
            <div class="popular-meta">Открыто: 1024 шт.</div>
          </div>
          <footer class="popular-foot">
            <span class="popular-name">Case #1</span>
            <span class="popular-price">$1.44</span>
          </footer>
        </article>
      </div>

      <div class="stats-col stats-col--best">
        <h3 class="popular-heading">Лучшие за неделю</h3>
        <div class="best-list">
          ${[2,3,4].map(n => `
            <article class="best-card" data-case-id="${n}" role="button" tabindex="0" aria-label="Открыть лучший кейс ${n}">
              <div class="best-media" style="--img:url('/img/case-bg.png')"></div>
              <div class="best-title">Case #${n}</div>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="stats-col stats-col--today">
        <div class="today-wrap">
          <h3 class="popular-heading">Больше всего открыли сегодня</h3>
          <div class="today-grid">
            ${Array.from({ length: 9 }).map((_, i) => `
              <article class="today-card" data-case-id="${100+i}">
                <div class="today-media"></div>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="cases-category">
      <h3 class="section-title">Новые кейсы</h3>
      <div class="cases-grid">
        ${Array.from({ length: 16 }).map((_, i) => `
          <article class="case-card" data-case-id="${200+i}">
            <div class="case-media">
              <div class="case-plate"></div>
              <img class="case-bg" src="/img/case-bg.png" alt="" />
              <img class="case-weapon" src="/img/case-weapon.png" alt="" />
              <div class="case-foot">
                <div class="case-title">Case #${i+1}</div>
                <div class="case-price">$1.00</div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="cases-category">
      <h3 class="section-title">Кейсы от Армяна ван бурена</h3>
      <div class="cases-grid">
        ${Array.from({ length: 20 }).map((_, i) => `
          <article class="case-card" data-case-id="${300+i}">
            <div class="case-media">
              <div class="case-plate"></div>
              <img class="case-bg" src="/img/case-bg.png" alt="" />
              <img class="case-weapon" src="/img/case-weapon.png" alt="" />
              <div class="case-foot">
                <div class="case-title">Case #${i+1}</div>
                <div class="case-price">$1.00</div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `,

  Case: (id) => `
    ${renderCaseHeader()}

    <section class="case-view">
      <div id="caseList" class="case-list">
        ${makeCaseBox(id, 1)}
      </div>

      <div class="case-actions" style="margin-top:30px">
        <button id="btnMinus" class="case-btn case-btn--minus is-disabled" aria-label="Уменьшить">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
            <path d="M1 1H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button class="case-btn case-btn--open" disabled id="btnOpen">
          <span class="label">Открыть</span>
        </button>

        <button id="btnPlus" class="case-btn case-btn--plus" aria-label="Увеличить">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v14M1 8h14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="case-total">Итого: <span id="caseTotal">100 ₽</span></div>
    </section>

    <section class="case-page">
      <header class="case-head" style="margin-bottom:14px;">
        <h1 class="hero-title">Кейс #${id}</h1>
        <p class="text-dim" style="margin-top:6px;">36 предметов</p>
      </header>

      <div class="cases-grid cases-grid--6x6">
        ${Array.from({ length: 36 }).map((_, i) => `
          <article class="case-card case-card--sm" data-case-id="${id}-${i+1}">
            <div class="case-media case-media--sm">
              <img class="case-weapon case-weapon--sm" src="img/gun.png" alt="Item #${i+1}">
            </div>
            <div class="case-foot case-foot--sm">
              <div class="case-title case-title--sm">Item #${i+1}</div>
              <div class="case-price case-price--sm">$${(i+1).toFixed(2)}</div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `,

Contracts: `
  ${renderSubHeader('bids.club — контракты.')}
  <section class="page-content">
    <div class="contracts-section">
      <div class="contracts-left c-grid">
        ${Array.from({ length: 10 }).map(() => `
          <div class="c-block">
            <div class="c-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="106" height="108" viewBox="0 0 106 108" fill="none">
                <path d="M53 22C59.329 22 65.5159 23.8767 70.7782 27.3929C76.0406 30.9091 80.1421 35.9069 82.5641 41.7541C84.9861 47.6013 85.6198 54.0355 84.3851 60.2428C83.1504 66.4502 80.1027 72.1521 75.6274 76.6274C71.1521 81.1027 65.4503 84.1504 59.2429 85.3851C53.0355 86.6198 46.6013 85.9861 40.7541 83.5641C34.9069 81.1421 29.9092 77.0406 26.393 71.7782C22.8767 66.5158 21 60.329 21 54L21.0213 52.8C21.3318 44.5264 24.8369 36.6952 30.8001 30.9518C36.7634 25.2083 44.7206 21.9997 53 22ZM53 43.3333C50.3089 43.3324 47.717 44.3488 45.7437 46.1786C43.7705 48.0084 42.5618 50.5165 42.36 53.2L42.3333 54C42.3333 56.1096 42.9589 58.1719 44.131 59.926C45.303 61.6802 46.9689 63.0473 48.918 63.8547C50.8671 64.662 53.0118 64.8732 55.0809 64.4617C57.1501 64.0501 59.0507 63.0342 60.5425 61.5424C62.0342 60.0507 63.0501 58.15 63.4617 56.0809C63.8733 54.0118 63.662 51.8671 62.8547 49.918C62.0474 47.9689 60.6802 46.303 58.9261 45.1309C57.1719 43.9589 55.1096 43.3333 53 43.3333ZM73.8 91.92C75.1063 91.9201 76.3671 92.3997 77.3433 93.2678C78.3195 94.1358 78.9431 95.3319 79.096 96.6293L79.1333 97.3066C79.1318 98.666 78.6113 99.9735 77.6781 100.962C76.745 101.95 75.4696 102.545 74.1125 102.625C72.7555 102.705 71.4193 102.263 70.3769 101.391C69.3345 100.518 68.6645 99.2805 68.504 97.9306L68.4666 97.2533C68.4666 95.8388 69.0285 94.4822 70.0287 93.4821C71.0289 92.4819 72.3855 91.92 73.8 91.92ZM90.5467 78.5866C91.853 78.5868 93.1138 79.0664 94.09 79.9344C95.0662 80.8025 95.6898 81.9986 95.8427 83.296L95.88 83.9733C95.8785 85.3327 95.358 86.6401 94.4248 87.6286C93.4916 88.617 92.2162 89.2119 90.8592 89.2915C89.5022 89.3712 88.166 88.9297 87.1235 88.0572C86.0811 87.1847 85.4112 85.9471 85.2507 84.5973L85.2133 83.92C85.2133 82.5055 85.7752 81.1489 86.7754 80.1487C87.7756 79.1485 89.1322 78.5866 90.5467 78.5866ZM99.7733 59.3333C101.08 59.3335 102.34 59.8131 103.317 60.6811C104.293 61.5492 104.916 62.7453 105.069 64.0426L105.107 64.72C105.105 66.0793 104.585 67.3868 103.651 68.3753C102.718 69.3637 101.443 69.9585 100.086 70.0382C98.7289 70.1179 97.3926 69.6764 96.3502 68.8039C95.3078 67.9314 94.6379 66.6938 94.4773 65.344L94.44 64.6666C94.44 63.2521 95.0019 61.8956 96.0021 60.8954C97.0023 59.8952 98.3588 59.3333 99.7733 59.3333Z" fill="#1A1D24"/>
              </svg>
            </div>
          </div>
        `).join('')}
      </div>


      <aside class="contracts-right">
        <div class="cr-plate">
          <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none" aria-hidden="true">
            <path d="M190.869 133.899C192.132 136.428 192.34 139.355 191.446 142.037C190.552 144.72 188.629 146.937 186.101 148.203L100.768 190.869C99.2874 191.609 97.6551 191.994 96 191.994C94.3449 191.994 92.7125 191.609 91.232 190.869L5.89864 148.203C3.45887 146.887 1.62707 144.673 0.791265 142.03C-0.0445445 139.388 0.181283 136.523 1.42091 134.044C2.66054 131.565 4.81661 129.665 7.4324 128.748C10.0482 127.831 12.9183 127.968 15.4346 129.131L96 169.387L176.576 129.12C179.105 127.857 182.033 127.65 184.715 128.544C187.397 129.438 189.614 131.36 190.88 133.888M190.88 91.2213C192.143 93.7507 192.35 96.678 191.456 99.3602C190.562 102.042 188.64 104.26 186.112 105.525L100.779 148.192C99.2981 148.932 97.6657 149.317 96.0106 149.317C94.3556 149.317 92.7232 148.932 91.2426 148.192L5.9093 105.525C3.46954 104.21 1.63774 101.996 0.801931 99.3531C-0.0338786 96.7102 0.191952 93.8457 1.43158 91.3665C2.67121 88.8872 4.82727 86.9879 7.44307 86.0708C10.0589 85.1537 12.9289 85.2909 15.4453 86.4533L96 126.72L176.576 86.4533C179.105 85.1902 182.033 84.9828 184.715 85.8769C187.397 86.7709 189.614 88.6932 190.88 91.2213Z" fill="#1A1D24"/>
          </svg>
        </div>
        <div class="cr-skin is-hidden" aria-hidden="true"></div>
      </aside>

      <div class="controls-left">
        <span class="ctr-line ctr-line--lg" aria-hidden="true"></span>
        <div class="ctr-price ctr-price--block" role="textbox" contenteditable="true">$0.00</div>
        <span class="ctr-line ctr-line--lg" aria-hidden="true"></span>
      </div>

      <div class="contracts-bottom-container">
        <!-- сюда можно вставить карточки / список / любой контент -->
      </div>

      <div class="controls-right">
        <span class="ctr-line ctr-line--sm" aria-hidden="true"></span>
        <div class="ctr-price ctr-price--block" role="textbox" contenteditable="true">$0.00</div>
        <span class="ctr-line ctr-line--sm" aria-hidden="true"></span>
      </div>

      <!-- ВАЖНО: кнопка и хелп остаются ВНУТРИ .contracts-section -->
      <div class="contracts-right-col">
  <button class="contracts-sign" type="button">Подписать контракт</button>

  <div class="contracts-help">
    <div class="contracts-help-title">Как это работает?</div>
    <p class="contracts-help-text">
      Выберите от 2 до 10 предметов из своего инвентаря ценой не ниже 10 ₽
    </p>
  </div>
</div>
  </section>
`,

  Upgrades: `
    ${renderSubHeader('bids.club — апгрейды.')}
    <section class="page-content upgrades-page">
      <div class="upg-grid">
        <!-- LEFT: inventory -->
        <aside class="upg-inventory">
          <header class="upg-head">
            <div class="upg-head-title">Инвентарь</div>
            <input class="upg-search" type="text" placeholder="Поиск..." />
          </header>
          <div class="upg-inv-grid">
            ${Array.from({length:18}).map((_,i)=>`
              <button class="upg-item" data-price="${(i%6+1)*3}">
                <div class="upg-item-media"></div>
                <div class="upg-item-name">Gun #${i+1}</div>
                <div class="upg-item-price">$${((i%6+1)*3).toFixed(2)}</div>
              </button>
            `).join('')}
          </div>
        </aside>

        <!-- CENTER: upgrader -->
        <main class="upg-center">
          <div class="upg-stage">
            <div class="upg-card upg-card--from" data-role="from">
              <div class="upg-card-label">Вы выбрали</div>
              <div class="upg-card-box">
                <div class="upg-img"></div>
                <div class="upg-meta">
                  <div class="upg-name">—</div>
                  <div class="upg-price">$0.00</div>
                </div>
              </div>
            </div>

            <div class="upg-arrow" aria-hidden="true">
              <svg viewBox="0 0 48 48" class="ico">
                <path d="M8 24h28M28 14l10 10-10 10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="upg-chance">
                <div class="upg-chance-num" id="upgChance">0%</div>
                <div class="upg-bar"><span id="upgBar"></span></div>
              </div>
            </div>

            <div class="upg-card upg-card--to" data-role="to">
              <div class="upg-card-label">Цель</div>
              <div class="upg-card-box">
                <div class="upg-img"></div>
                <div class="upg-meta">
                  <div class="upg-name">—</div>
                  <div class="upg-price">$0.00</div>
                </div>
              </div>
            </div>
          </div>

          <div class="upg-controls">
            <div class="upg-row">
              <div class="upg-control">
                <div class="upg-control-title">Множитель</div>
                <div class="upg-mults" id="upgMults">
                  ${[1.5,2,3,5,10].map(v=>`<button class="pill" data-m="${v}">×${v}</button>`).join('')}
                </div>
              </div>

              <div class="upg-control">
                <div class="upg-control-title">Цена цели</div>
                <div class="upg-target">
                  <input id="upgTargetInput" type="text" inputmode="decimal" placeholder="$0.00"/>
                </div>
              </div>
            </div>

            <div class="upg-slider-wrap">
              <input id="upgSlider" type="range" min="0" max="100" step="1" value="0"/>
              <div class="upg-slider-meta">
                <span>Низкий шанс</span><span>Высокий шанс</span>
              </div>
            </div>

            <button id="upgDo" class="upg-do" disabled>Апгрейдить</button>
          </div>
        </main>

        <!-- RIGHT: feed -->
        <aside class="upg-feed">
          <div class="upg-head">
            <div class="upg-head-title">Лента апгрейдов</div>
          </div>
          <ul class="upg-feed-list" id="upgFeed">
            ${Array.from({length:8}).map((_,i)=>`
              <li class="upg-feed-item ${i%3===0?'is-win':'is-loss'}">
                <div class="upg-feed-row">
                  <div class="from">$${(3+(i%6)*2).toFixed(2)}</div>
                  <span class="sep">→</span>
                  <div class="to">$${(12+(i%6)*5).toFixed(2)}</div>
                  <span class="pct">${(30+((i*7)%60)).toFixed(0)}%</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </aside>
      </div>
    </section>
  `,

  Promo: `<h1 class="text-xl font-bold">Promo</h1>`,
  FAQ: `<h1 class="text-xl font-bold">FAQ</h1>`,
  Profile: `<h1 class="text-xl font-bold">Profile</h1>`,
};

// ===== render ================================================================
function render() {
  const app = document.getElementById('app');

  const caseId = getCaseIdFromHash();
  if (caseId) {
    app.innerHTML = renderLiveStrip() + templates.Case(caseId);
    updateActiveSidebar();
    setupCaseCounter();
    return;
  }

  const route = getRoute();
  const pageHtml = templates[route] || templates.Home;
  app.innerHTML = renderLiveStrip() + pageHtml;
  updateActiveSidebar();
}

render();
onRouteChange(render);

// ===== delegates =============================================================
document.addEventListener('click', (e) => {
  // переход на /case/{id} из карточек
  const card = e.target.closest('.case-card, .today-card, .popular-card, .best-card');
  if (card) {
    const id = card.getAttribute('data-case-id') || '0';
    window.location.hash = `#/case/${id}`;
    return;
  }

  // раскрывающийся поиск
  const btn = e.target.closest(".search-icon-btn");
  if (btn) {
    const shell = btn.closest(".search-shell");
    const icon = btn.querySelector(".icon");
    const input = shell.querySelector(".search-input");

    shell.classList.toggle("active");

    if (shell.classList.contains("active")) {
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643z"/>
        </svg>`;
      input.focus();
    } else {
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>`;
      input.value = "";
    }
  }
});

// подсветка активного пункта — на /case/* ничего не выделяем
function updateActiveSidebar() {
  const hash = currentHash() || '#/';
  const isCase = /^#\/case(\/|$)/.test(hash);
  document.querySelectorAll('.sb-item').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', !isCase && href === hash);
  });
}

// ===== category dropdown =====================================================
const catIconClosed = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"></circle>
  <path d="M15 11l-3 3l-3-3"></path>
</svg>`;

const catIconOpen = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="currentColor">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m-2.293 8.293a1 1 0 0 0 -1.414 1.414l3 3a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.294 2.292z"/>
</svg>`;

function openCategory(wrap){
  const btn = wrap.querySelector('.category-select');
  wrap.classList.add('is-open');
  btn.setAttribute('aria-expanded', 'true');
  wrap.querySelector('.category-ico').innerHTML = catIconOpen;
}
function closeCategory(wrap){
  const btn = wrap.querySelector('.category-select');
  wrap.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  wrap.querySelector('.category-ico').innerHTML = catIconClosed;
}

document.addEventListener('click', (e) => {
  const wrap = e.target.closest('.category');
  const anyOpen = document.querySelector('.category.is-open');

  if (e.target.closest('.category-select')) {
    const w = e.target.closest('.category');
    if (w.classList.contains('is-open')) closeCategory(w);
    else {
      if (anyOpen && anyOpen !== w) closeCategory(anyOpen);
      openCategory(w);
    }
    return;
  }

  if (e.target.matches('.category-menu li')) {
    const w = e.target.closest('.category');
    const text = w.querySelector('.category-text');
    text.textContent = e.target.textContent.trim();
    closeCategory(w);
    return;
  }

  if (anyOpen && !wrap) closeCategory(anyOpen);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const anyOpen = document.querySelector('.category.is-open');
    if (anyOpen) closeCategory(anyOpen);
  }
  // активация карточки с клавиатуры
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList.contains('case-card')) {
    const id = document.activeElement.getAttribute('data-case-id') || '0';
    window.location.hash = `#/case/${id}`;
    e.preventDefault();
  }
});

// ===== case view helpers =====================================================
function makeCaseBox(id, idx){
  return `
    <div class="case-view-box" data-idx="${idx}">
      <div class="case-view-bg"></div>
      <div class="case-view-weapon"></div>
      <div class="case-price-tag">100 ₽</div>
    </div>
  `;
}

function setupCaseCounter() {
  const list = document.getElementById('caseList');
  if (!list) return;

  let count = Math.max(1, list.querySelectorAll('.case-view-box').length);

  const btnMinus = document.getElementById('btnMinus');
  const btnPlus  = document.getElementById('btnPlus');
  const btnOpen  = document.getElementById('btnOpen');
  const totalEl  = document.getElementById('caseTotal');

  function syncUI(){
    list.classList.toggle('is-carousel', count > 2);
    btnOpen.querySelector('.label').textContent = count > 1 ? `Открыть ×${count}` : 'Открыть';
    const disabledMinus = count <= 1;
    btnMinus.disabled = disabledMinus;
    btnMinus.classList.toggle('is-disabled', disabledMinus);
    btnOpen.disabled = false;
    totalEl.textContent = `${100 * count} ₽`;
  }

  function rebuild(){
    list.innerHTML = Array.from({ length: count })
      .map((_, i) => makeCaseBox('x', i+1))
      .join('');
    syncUI();
  }

  btnPlus.addEventListener('click', () => { count += 1; rebuild(); });
  btnMinus.addEventListener('click', () => { if (count > 1) { count -= 1; rebuild(); } });
  btnOpen.addEventListener('click', () => console.log(`Открыть ${count} кейс(а)`));

  syncUI();
}

// initial sidebar highlight
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) window.location.hash = '#/';
  updateActiveSidebar();
});
document.querySelectorAll('.sb-item').forEach(a =>
  a.addEventListener('click', () => setTimeout(updateActiveSidebar, 0))
);

