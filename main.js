const inputNumber = document.getElementById('inputNumber')
const enterBtn = document.getElementById('enterBtn')
const winingMsg = document.getElementById('winningMsg')
const lostMsg = document.getElementById('lostMsg')
const totalChances = document.getElementById('totalChances')
const finished = document.getElementById('finished')
const newGame = document.getElementById('newGame')

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const randomNumber = getRandomArbitrary(1,5)
  console.log(randomNumber)

let chances = 5;

enterBtn.addEventListener('click', ()=>{
    
    if(randomNumber==inputNumber.value){
        winingMsg.innerText = 'Congratulation you guess right and won the match';
        lostMsg.innerText = ''
    }else{
        lostMsg.innerText = 'you guess wrong ,Try again !';
        winingMsg.innerText = ''
        
    }
    chances--;
    if(chances<0){
        finished.innerText = 'Game Over'
        lostMsg.innerText = ''
        winingMsg.innerText = ''
        
    }else{
        totalChances.textContent = chances;

    }
    inputNumber.value = ''
})

const reset = () =>{
    chances = 5;
    totalChances.textContent = chances;
    lostMsg.innerText = '';
    winingMsg.innerText = '';
    finished.innerText = '';


}
newGame.addEventListener('click', reset)