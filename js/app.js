const rootDiv = document.getElementById('root');
let home = '';
let about = '';
let contact = '';

// Load the HTML Page based on page passed in as 'param'
const loadPage = async (page) => {
  const res = await (await fetch(page)).text();
  return res;
};

const loadAllPages = async () => {
  home = await loadPage('home.html');
  about = await loadPage('about.html');
  contact = await loadPage('contact.html');
};

const main = async () => {
  await loadAllPages();
  rootDiv.innerHTML = home;
  routes = {
    '/': home,
    '/contact': contact,
    '/about': about,
  };
};

main();

const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
