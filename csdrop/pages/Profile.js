// pages/Profile.js
import { store } from '/store.js';
export function Profile(){
  const { user } = store.get();
  return /*html*/`
    <section class="container mt6">
      <div class="card">
        <h1>Профиль</h1>
        <p>Имя: ${user?.name ?? "—"}</p>
      </div>
    </section>
  `;
}
