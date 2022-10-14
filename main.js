const card=document.querySelectorAll(".card-memory")
const counter=document.querySelectorAll(".counter")
const showCounter=document.querySelector(".showCounter")

// bug -> 같은 카드가 클릭되도 count가 실행됨, 여러개 선택시 함수가 정상동작을 하지 않음

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

// console.log(showCounter.innerText)

function setupCounter(arr) {
  count++
  showCounter.innerText=count
  arr=[]
}


function filpedCard(){
  this.classList.add("filp")
  let selectedCardName=this.children[0].alt
  // console.log(selectedCardName)
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
  // console.log("카드 뒤집기",card)
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
      // Showing front side of the card
      // showingFrontSide(cardArr)
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
// function showingFrontSide(arr){
//   console.log(arr)
//   setTimeout(()=>{
//     arr.map((e)=>{
//       e.className="card-memory filp"
//     })
//     showingFrontSide()
//   },1000)
// }
// if(cardMatched){
//   showingFrontSide()
// }
