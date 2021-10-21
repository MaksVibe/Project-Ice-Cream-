const cityListRef = document.querySelector('.city-list');
const cityListSelectRef = document.querySelectorAll('.city-list__select');
const cityWrapperMapRef = document.querySelectorAll('.city-wrapper__map');

console.log(cityListRef);
cityListRef.addEventListener('click', updateMap);

function updateMap(event) {
  if (!event.target.classList.contains('city-list__select')) return;
  const value = event.target.dataset.city;
  cityWrapperMapRef.forEach(item => {
    item.classList.remove('show');
  });
  document.querySelector(`div[data-city="${value}"]`).classList.add('show');

  cityListSelectRef.forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`button[data-city="${value}"]`).classList.add('active');
}
