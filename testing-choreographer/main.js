import './style.css';
import 'choreographer-js'; //doesn't seem to work; linked the script in index instead;

let choreographer = new Choreographer({
  animations:[
    {
    range: [-1, window.innerWidth],
    selector:'#box',
    type: 'scale',
    style:'opacity',
    from:0.1, 
    to:1
  },
  {
    range: [-1, window.innerWidth],
    selector:'h1',
    type: 'change',
    style:'color',
    from:'#000',
    to: '#ffffff'
  }
  ]

});

window.addEventListener('mousemove', function(e) {
  choreographer.runAnimationsAt(e.clientX)
})

