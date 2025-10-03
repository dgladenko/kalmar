// pages/Home.js
import { store } from '/store.js';
export function Home(){
  const s = store.get();
  return /*html*/`
    <section class="container mt6">
      <div class="grid grid-2">
        <div class="card">
          <h1>Фиксированная левая панель</h1>
          <p class="mb4">SPA на чистом JS + PHP API. Тёмная тема.</p>
          <button class="btn primary" id="inc">Счётчик: ${s.counter}</button>
        </div>
        <div class="card">
          <h2>API пример</h2>
          <button class="btn" id="apiBtn">Сказать «привет»</button>
          <pre id="apiOut" class="mt6"></pre>
        </div>
      </div>
    </section>
  `;
}
export function mountHomeEvents(){
  document.getElementById('inc')?.addEventListener('click', () => {
    const { set, get } = store;
    set({ counter: get().counter + 1 });
  });
  document.getElementById('apiBtn')?.addEventListener('click', async () => {
    const res = await fetch('/api/hello.php').then(r => r.json());
    document.getElementById('apiOut').textContent = JSON.stringify(res, null, 2);
  });
}
