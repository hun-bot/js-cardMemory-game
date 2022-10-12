const card=document.querySelectorAll(".card-memory")
const counter=document.querySelectorAll(".counter")

let hasFilpped=false
let matched=[]
let cardMatched=false

card.forEach(e=>e.addEventListener("click",filpedCard))

function cardShuffle(){
  card.forEach(e=>{
    let random=Math.floor(Math.random()*18)
    e.style.order=random
  })
}
cardShuffle()



function setupCounter() {
  return
}


function filpedCard(){
  this.classList.add("filp")
  let selectedCardName=this.children[0].alt
  console.log(selectedCardName)
  matched.push(selectedCardName)
  if(matched.length===2){
    checkCard()
    // disabled 줘서 다른 카드 못만지게 하기
  }
  if(!hasFilpped){
    hasFilpped=true
    showingCard(this)
  }
}

function showingCard(props){
  let card=props
  setTimeout(()=>{
    card.classList.remove("filp")
    card.classList.toggle("slowly")
  },2000)
  hasFilpped=false
}

function checkCard(props){
  // console.log(props)
  if(matched.length===2){
    if(matched[0]===matched[1]){
      cardMatched=true
      console.log('같다')
    }
    cardMatched=false
    return matched=[]
  }
}

