var darkmodeObjects = ['p', 'body', 'h2'];

document.addEventListener('DOMContentLoaded', (event) => {
  var x = window.matchMedia("(prefers-color-scheme: dark)");
  if (x.matches) { // If media query matches
    for(var i=0;i<darkmodeObjects.length;i++){
      document.querySelector(darkmodeObjects[i]).classList.add('dark');
    }
  }
})
