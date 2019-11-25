function darkmodeHandler(self){
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
  applyMode();
}
// apply darkmode
function applyMode () {
  localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
  localStorage.getItem('mode') === 'dark' ? document.querySelector('a').classList.add('dark') : document.querySelector('body').classList.remove('dark');
  localStorage.getItem('mode') === 'dark' ? document.getElementById('header').classList.add('dark') : document.getElementById('header').classList.remove('dark');
  localStorage.getItem('mode') === 'dark' ? document.getElementById('switch-name').classList.add('dark') : document.getElementById('switch-name').classList.remove('dark');
  self.value === 'night' ? self.value = 'day' : self.value = 'night';
}
// automatically turn on the dark mode toggle button UI if the mode is dark
  // https://www.w3schools.com/jsref/prop_checkbox_checked.asp
  // https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('.slider').classList.add('notransition') : document.querySelector('.slider').classList.remove('notransition');
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.getElementById("darkmodeSwitch").checked = true : document.getElementById("darkmodeSwitch").checked = false;
})
