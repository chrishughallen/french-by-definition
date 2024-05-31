// set current noun

// display a noun and a button for M / F

// If correct button is clicked add noun to correctAnswers and remove from genders

let nouns = [
  { noun: "Table", gender: "F", article: "La" },
  { noun: "Chien", gender: "M", article: "Le" },
  { noun: "Voiture", gender: "F", article: "La" },
  { noun: "Pomme", gender: "F", article: "La" },
  { noun: "Livre", gender: "M", article: "Le" },
  { noun: "Chaise", gender: "F", article: "La" },
  { noun: "Ordinateur", gender: "M", article: "L'" },
  { noun: "Bouteille", gender: "F", article: "La" },
  { noun: "Stylo", gender: "M", article: "Le" },
  { noun: "Maison", gender: "F", article: "La" },
  { noun: "Arbre", gender: "M", article: "L'" },
  { noun: "Fleur", gender: "F", article: "La" },
  { noun: "Télévision", gender: "F", article: "La" },
  { noun: "Canapé", gender: "M", article: "Le" },
  { noun: "Fenêtre", gender: "F", article: "La" },
  { noun: "Porte", gender: "F", article: "La" },
  { noun: "Miroir", gender: "M", article: "Le" },
  { noun: "Lit", gender: "M", article: "Le" },
  { noun: "Couteau", gender: "M", article: "Le" },
  { noun: "Fourchette", gender: "F", article: "La" },
  { noun: "Cuillère", gender: "F", article: "La" },
  { noun: "École", gender: "F", article: "L'" },
  { noun: "Université", gender: "F", article: "L'" },
  { noun: "Parc", gender: "M", article: "Le" },
  { noun: "Jardin", gender: "M", article: "Le" },
  { noun: "Rue", gender: "F", article: "La" },
  { noun: "Pont", gender: "M", article: "Le" },
  { noun: "Hôpital", gender: "M", article: "L'" },
  { noun: "Boulangerie", gender: "F", article: "La" },
  { noun: "Magasin", gender: "M", article: "Le" },
  { noun: "Supermarché", gender: "M", article: "Le" },
  { noun: "Cinéma", gender: "M", article: "Le" },
  { noun: "Théâtre", gender: "M", article: "Le" },
  { noun: "Musée", gender: "M", article: "Le" },
  { noun: "Stade", gender: "M", article: "Le" },
  { noun: "Église", gender: "F", article: "L'" },
  { noun: "Banque", gender: "F", article: "La" },
  { noun: "Poste", gender: "F", article: "La" },
  { noun: "Bureau", gender: "M", article: "Le" },
  { noun: "Café", gender: "M", article: "Le" },
  { noun: "Restaurant", gender: "M", article: "Le" },
  { noun: "Hôtel", gender: "M", article: "L'" },
  { noun: "Plage", gender: "F", article: "La" },
  { noun: "Montagne", gender: "F", article: "La" },
  { noun: "Rivière", gender: "F", article: "La" },
  { noun: "Lac", gender: "M", article: "Le" },
  { noun: "Mer", gender: "F", article: "La" },
  { noun: "Océan", gender: "M", article: "L'" },
  { noun: "Soleil", gender: "M", article: "Le" },
  { noun: "Lune", gender: "F", article: "La" },
  { noun: "Étoile", gender: "F", article: "L'" },
  { noun: "Ciel", gender: "M", article: "Le" },
  { noun: "Nuage", gender: "M", article: "Le" },
  { noun: "Pluie", gender: "F", article: "La" },
  { noun: "Neige", gender: "F", article: "La" },
  { noun: "Vent", gender: "M", article: "Le" },
  { noun: "Tempête", gender: "F", article: "La" },
  { noun: "Orage", gender: "M", article: "L'" },
  { noun: "Tonnerre", gender: "M", article: "Le" },
  { noun: "Éclair", gender: "M", article: "L'" },
  { noun: "Cheval", gender: "M", article: "Le" },
  { noun: "Vache", gender: "F", article: "La" },
  { noun: "Mouton", gender: "M", article: "Le" },
  { noun: "Chèvre", gender: "F", article: "La" },
  { noun: "Cochon", gender: "M", article: "Le" },
  { noun: "Poulet", gender: "M", article: "Le" },
  { noun: "Canard", gender: "M", article: "Le" },
  { noun: "Poisson", gender: "M", article: "Le" },
  { noun: "Oiseau", gender: "M", article: "L'" },
  { noun: "Papillon", gender: "M", article: "Le" },
  { noun: "Abeille", gender: "F", article: "L'" },
  { noun: "Fourmi", gender: "F", article: "La" },
  { noun: "Araignée", gender: "F", article: "L'" },
  { noun: "Serpent", gender: "M", article: "Le" },
  { noun: "Tigre", gender: "M", article: "Le" },
  { noun: "Lion", gender: "M", article: "Le" },
  { noun: "Singe", gender: "M", article: "Le" },
  { noun: "Éléphant", gender: "M", article: "L'" },
  { noun: "Girafe", gender: "F", article: "La" },
  { noun: "Zèbre", gender: "M", article: "Le" },
  { noun: "Kangourou", gender: "M", article: "Le" },
  { noun: "Panda", gender: "M", article: "Le" },
  { noun: "Souris", gender: "F", article: "La" },
  { noun: "Rat", gender: "M", article: "Le" },
  { noun: "Lapin", gender: "M", article: "Le" },
  { noun: "Écureuil", gender: "M", article: "L'" },
  { noun: "Loup", gender: "M", article: "Le" },
  { noun: "Renard", gender: "M", article: "Le" },
  { noun: "Ours", gender: "M", article: "L'" },
  { noun: "Chauve-souris", gender: "F", article: "La" },
  { noun: "Dauphin", gender: "M", article: "Le" },
  { noun: "Baleine", gender: "F", article: "La" },
  { noun: "Requin", gender: "M", article: "Le" },
  { noun: "Phare", gender: "M", article: "Le" },
  { noun: "Bateau", gender: "M", article: "Le" },
  { noun: "Avion", gender: "M", article: "L'" },
  { noun: "Train", gender: "M", article: "Le" }
];


let currentWord
const wordDisplay = document.getElementById("wordDisplay")
const optionsDisplay = document.getElementById("optionsDisplay")
const nounsDisplay = document.getElementById("nounsDisplay")
const scoreBoard = document.getElementById("scoreBoard")
let correctWords = []
const correctBanner = document.getElementById("correctBanner")
const incorrectBanner = document.getElementById("incorrectBanner")

const initialize = () => {
  correctBanner.classList.add('d-none')
  incorrectBanner.classList.add('d-none')
  currentWord = getRandomWord()
  updateWordDisplay(currentWord.noun)
  updateOptionDisplay(currentWord.gender)
  updateScoreBoard()
}

const updateScoreBoard = () => {
  scoreBoard.innerText = `${correctWords.length} / ${nouns.length}`
  nounsDisplay.innerHTML = ""  
  nounsDisplay.appendChild(createCorrectWordsDisplay())
  nounsDisplay.appendChild(createRemainingWordsDisplay())
}

const createCorrectWordsDisplay = () => {
  let div = document.createElement("div")
  div.className = "d-flex gap-3 flex-wrap"
  correctWords.forEach((word) => {
    let el = document.createElement("div")
    el.className = "text-success"
    el.innerText = word.noun
    div.appendChild(el)
  })
  return div
}

const createRemainingWordsDisplay = () => {
  let div = document.createElement("div")
  div.className = "d-flex gap-3 flex-wrap"
  
  nouns.forEach((noun) => {
    let el = document.createElement("div")
    el.innerText = noun.noun
    div.appendChild(el)
  })
  
  return div
}

const getRandomWord = () => {
  let randomIndex = Math.floor(Math.random() * nouns.length)
  return nouns[randomIndex]
}

const updateWordDisplay = (word) => {
  wordDisplay.innerHTML = word
}

const updateOptionDisplay = () => {
  optionsDisplay.innerHTML = ""
  optionsDisplay.appendChild(createOption("M"))
  optionsDisplay.appendChild(createOption("F"))
}

const createOption = (gender) => {
  let btn = document.createElement("button")
  btn.className = "btn"
  gender == "F" ? btn.style.backgroundColor = "#FF69B4" : btn.style.backgroundColor = "#6ca0dc";
  btn.innerText = gender
  btn.addEventListener("click", (e) => checkAnswer(e))
  return btn
}

const checkAnswer = (e) => {
  if(e.currentTarget.innerText == currentWord.gender) {
    showContinueOption(true)
  } else {
    showContinueOption(false)
  }
}

const showContinueOption = (correct) => {
  optionsDisplay.innerHTML = ""
  showArticle()
  optionsDisplay.appendChild(createContiueButton(correct))
}

const showArticle = () => {
  if(currentWord.article == "Le" || currentWord.article == "La") {
    wordDisplay.innerHTML = `${currentWord.article} ${currentWord.noun}`
  } else {
    wordDisplay.innerHTML = `${currentWord.article}${currentWord.noun}`
  }
}

const createContiueButton = (correct) => {
  let btn = document.createElement("button")
  if(correct) {
    btn.className = "btn btn-success"
    btn.innerText = "Continuer"
    btn.setAttribute("onclick", "handleCorrectResponse()")
    correctBanner.classList.remove('d-none')
  } else {
    btn.className = "btn btn-danger"
    btn.innerText = "Passer"
    btn.setAttribute("onclick", "handleIncorrectResponse()")
    incorrectBanner.classList.remove('d-none')
  }

  return btn
}

const handleCorrectResponse = () => {
  nouns.splice(currentWord, 1);
  correctWords.push(currentWord)
  initialize()
}

const handleIncorrectResponse = () => {
  initialize()
}

window.onLoad = initialize();