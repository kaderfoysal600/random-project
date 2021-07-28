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


const win = () =>{
    winingMsg.innerText = 'You have won the match'
    winingMsg.classList.add('winMsg')
    lostMsg.innerText = ''
    enterBtn.setAttribute('disabled' , 'disabled')
}
const lost = () =>{
    lostMsg.innerText = 'You guess wrong Please Try Again'
    winingMsg.innerText = '';
    lostMsg.classList.add('lostMsg')
    
}

const reset = () =>{
    chances = 3;
    totalChances.textContent = chances;
    lostMsg.innerText = '';
    winingMsg.innerText = '';
    finished.innerText = '';
    inputNumber.value = ''
    enterBtn.removeAttribute('disabled', 'disabled')


}

let chances = 3;
enterBtn.addEventListener('click', ()=>{
    chances--;
    if(chances>0){
      
        if(randomNumber==inputNumber.value){
            win()
        }else{
           lost()
            
        }
    }else{
        finished.innerText = `You have  lost the game random Number is : ${randomNumber}`
        finished.classList.add('finishedMsg')
        lostMsg.innerText = ''
        winingMsg.innerText = ''
        enterBtn.setAttribute('disabled' , 'disabled')
    }
    totalChances.textContent = chances;
    inputNumber.value = ''
})

newGame.addEventListener('click', reset)