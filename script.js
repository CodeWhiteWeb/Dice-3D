let tl = gsap.timeline({ease:Power2.in});

const sound = new Audio('https://www.whoisofek.in/dice.mp3')

const diceSound = ()=>{
     sound.currentTime = 0
     sound.play()
}

const cube = document.querySelector('#cube')
let cubeNum = [
  {
    y:0,
    x:0,
    text:'1'
  },
  {
    y:-90,
    x:0,
    text:'3'
  },
  {
    y:-180,
    x:0,
    text:'2'
  },
  {
    y:90,
    x:0,
    text:'4'
  },
  {
    y:0,
    x:-90,
    text:'5'
  },
  {
    y:0,
    x:90,
    text:'6'
  },
]

let _randomValue 

document.addEventListener('click',()=>{
  _randomValue = cubeNum[Math.floor(Math.random() * cubeNum.length)];
  cube.style.transform = `rotateX(${_randomValue.x}deg) rotateY(${_randomValue.y}deg)`
  tl.to('#num',{y:'100%',onComplete:()=>{
      document.querySelector('#num').innerHTML = _randomValue.text
  }})
   tl.to('#num',{y:'0%'})
   diceSound()
})