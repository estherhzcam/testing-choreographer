import './style.css'

let choreographer = new Choreographer({
  animations:[
    {
    range: [-1, 1000],
    selector:'#text',
    type: 'change',
    style: 'transform:translateY', 
    to: 300,
    unit: 'vh'
  }
  ]

});

window.addEventListener('scroll', () => {
  choreographer.runAnimationsAt(window.pageYOffset)
})