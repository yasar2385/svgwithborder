// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
document.getElementById('');
var Arr = [
  'circle-border',
  'circle-border45',
  'circle-border90',
  'circle-border135',
  'circle-border180'
];
var svg = document.getElementById('svg');
for (var index = 1; index <= 3; index++) {
  (function(index) {
    setTimeout(function() {
      svg.classList.forEach(list => {
        svg.classList.remove(list);
      });
      svg.classList.add(Arr[index]);
    }, index * 1000);
  })(index);
}

