// components/Header.js — шапка внутри контента (не обязательна)
export function Header(){
  return /*html*/`
    <div class="container">
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:16px">
        <div style="font-weight:700">Пример страницы</div>
        <nav style="display:flex;gap:12px">
          <a class="btn" href="#/">Главная</a>
          <a class="btn" href="#/about">О проекте</a>
        </nav>
      </div>
    </div>
  `;
}
