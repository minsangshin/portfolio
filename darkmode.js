// $(document).on("touchstart", function(){ })
//
// $(document).ready(function() {
//   applyMode();
// });

// get pseudo class's property ('.slider:before')
  // https://davidwalsh.name/pseudo-element
// var slider = document.getElementsByClassName("slider");
// var transition = window.getComputedStyle(slider[0], ':before').getPropertyValue('transition');
// var transition = window.getComputedStyle(document.getElementsByClassName('slider'), ':before').getPropertyValue('transition');
// console.log(transition)

var darkmodeObjects = ['body', 'a', '#header', '#switch-name', 'h2', 'p'];

// // apply darkmode by default if user's system is in darkmode
// function defaultMode(x) {
//   if (x.matches) { // If media query matches
//     for(var i=0;i<darkmodeObjects.length;i++){
//       document.querySelector(darkmodeObjects[i]).classList.add('dark');
//       self.value === 'night' ? self.value = 'day' : self.value = 'night';
//     }
//   }
// }
//
// var x = window.matchMedia("(prefers-color-scheme: dark)")
// defaultMode(x) // Call listener function at run time
// x.addListener(defaultMode) // Attach listener function on state changes

// save the mode into local storage
  // https://flaviocopes.com/dark-mode/

function darkmodeHandler(self){
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
  applyMode();
}

// apply darkmode
function applyMode(){
    for(var i=0;i<darkmodeObjects.length;i++){
        localStorage.getItem('mode') === 'dark' ? document.querySelector(darkmodeObjects[i]).classList.add('dark') : document.querySelector(darkmodeObjects[i]).classList.remove('dark');
        self.value === 'night' ? self.value = 'day' : self.value = 'night';
    }
}

// draft version of darkmode function
  // function applyMode () {
  //   localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
  //   localStorage.getItem('mode') === 'dark' ? document.querySelector('a').classList.add('dark') : document.querySelector('body').classList.remove('dark');
  //   localStorage.getItem('mode') === 'dark' ? document.getElementById('header').classList.add('dark') : document.getElementById('header').classList.remove('dark');
  //   localStorage.getItem('mode') === 'dark' ? document.getElementById('switch-name').classList.add('dark') : document.getElementById('switch-name').classList.remove('dark');
  //   localStorage.getItem('mode') === 'dark' ? document.querySelector('h2').classList.add('dark') : document.querySelector('h2').classList.remove('dark');
  //   self.value === 'night' ? self.value = 'day' : self.value = 'night'; //input value가 night면 day로 바꾸고, day면 night로 바꿈
  // }

// automatically turn on the dark mode toggle button UI if the mode is dark (ONLY WORKS IF CACHED)
  // https://www.w3schools.com/jsref/prop_checkbox_checked.asp
  // https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
  // document.addEventListener('DOMContentLoaded', (event) => {
  //   ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('.slider').classList.add('notransition') : document.querySelector('.slider').classList.remove('notransition');
  //   ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.getElementById("darkmodeSwitch").checked = true : document.getElementById("darkmodeSwitch").checked = false;
  // })

  document.addEventListener('DOMContentLoaded', (event) => {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'dark' ? 'dark' : 'light');
    localStorage.getItem('mode') === 'dark' ? document.querySelector('.slider').classList.add('notransition') : document.querySelector('.slider').classList.remove('notransition');
    localStorage.getItem('mode') === 'dark' ? document.getElementById("darkmodeSwitch").checked = true : document.getElementById("darkmodeSwitch").checked = false;
  })
