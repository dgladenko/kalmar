// router.js
export const routes = {
  '': 'Home',
  '#/': 'Home',
  // НЕТ '#/case' — страница каждого кейса на #/case/{id}
  '#/contracts': 'Contracts',
  '#/upgrades': 'Upgrades',
  '#/promo': 'Promo',
  '#/faq': 'FAQ',
  '#/profile': 'Profile',
};
export const currentHash = () => window.location.hash || '#/';
export const getRoute = () => routes[currentHash()] || 'Home';
export const onRouteChange = (cb) =>
  window.addEventListener('hashchange', () => cb(getRoute()));