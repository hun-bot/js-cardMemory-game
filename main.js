const card=document.querySelectorAll(".card-memory")
const counter=document.querySelectorAll(".counter")
const showCounter=document.querySelector(".showCounter")

let hasFilpped=false
let matched=[]
let cardMatched=false
let count=0
let cardArr=[]

card.forEach(e=>e.addEventListener("click",filpedCard))

function cardShuffle(){
  card.forEach(e=>{
    let random=Math.floor(Math.random()*18)
    e.style.order=random
  })
}
cardShuffle()

function setupCounter() {
  count++
  showCounter.innerText=count
  if(count===9){
    alert("카드를 모두 맞추셨습니다. 축하드립니다!")
  }
  arr=[]
}


function filpedCard(){
  this.classList.add("filp")
  let selectedCardName=this.children[0].alt
  matched.push(selectedCardName)
  if(!hasFilpped){
    hasFilpped=true
    showingCard(this)
  }
  checkCard(this)
}

function showingCard(props){
  let card=props
  card.classList.add("filp")
  hasFilpped=false
}
function showingBackSideCard(props){
  let card=props
  setTimeout(()=>{
    card.map(e=>{
      e.classList.remove("filp")
      e.classList.add("slowly")
    })
  },1000)
  
  hasFilpped=true
}

function checkCard(props){
  cardArr.push(props)
  if(cardArr.length===2){
    cardArr.map(e=>console.log(e))
  }
  if(matched.length===2){
    if(matched[0]===matched[1]){
      cardMatched=true
      setupCounter()
    }
    else{
      console.dir(cardArr)
      showingBackSideCard(cardArr)
    }
    cardArr=[]
    cardMatched=false
    return matched=[]
  }
}
