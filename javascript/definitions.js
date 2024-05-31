let words = [
  {
    word: "ami",
    definition: "personne pour laquelle on éprouve de l'amitié",
    englishWord: "friend",
    englishDef: "person for whom one feels friendship",
  },
  {
    word: "amour",
    definition: "sentiment intense d'affection",
    englishWord: "love",
    englishDef: "intense feeling of affection",
  },
  {
    word: "arbre",
    definition: "végétal ligneux",
    englishWord: "tree",
    englishDef: "woody plant",
  },
  {
    word: "argent",
    definition: "métal précieux ou monnaie",
    englishWord: "money",
    englishDef: "precious metal or currency",
  },
  {
    word: "beauté",
    definition: "qualité de ce qui est beau",
    englishWord: "beauty",
    englishDef: "quality of being beautiful",
  },
  {
    word: "chien",
    definition: "animal domestique",
    englishWord: "dog",
    englishDef: "domestic animal",
  },
  {
    word: "chat",
    definition: "animal domestique félin",
    englishWord: "cat",
    englishDef: "domestic feline animal",
  },
  {
    word: "école",
    definition: "établissement où l'on enseigne",
    englishWord: "school",
    englishDef: "place where teaching is done",
  },
  {
    word: "enfant",
    definition: "jeune être humain",
    englishWord: "child",
    englishDef: "young human being",
  },
  {
    word: "famille",
    definition: "ensemble de personnes liées par le sang ou le mariage",
    englishWord: "family",
    englishDef: "group of people related by blood or marriage",
  },
  {
    word: "femme",
    definition: "être humain de sexe féminin",
    englishWord: "woman",
    englishDef: "female human being",
  },
  {
    word: "fleur",
    definition: "organe reproducteur des plantes",
    englishWord: "flower",
    englishDef: "reproductive organ of plants",
  },
  {
    word: "guerre",
    definition: "conflit armé entre des groupes",
    englishWord: "war",
    englishDef: "armed conflict between groups",
  },
  {
    word: "homme",
    definition: "être humain de sexe masculin",
    englishWord: "man",
    englishDef: "male human being",
  },
  {
    word: "jour",
    definition: "période de 24 heures",
    englishWord: "day",
    englishDef: "period of 24 hours",
  },
  {
    word: "maison",
    definition: "bâtiment servant de logement",
    englishWord: "house",
    englishDef: "building serving as a residence",
  },
  {
    word: "mer",
    definition: "vaste étendue d'eau salée",
    englishWord: "sea",
    englishDef: "vast expanse of salt water",
  },
  {
    word: "monde",
    definition: "ensemble de tout ce qui existe",
    englishWord: "world",
    englishDef: "all that exists",
  },
  {
    word: "nuit",
    definition: "période de l'obscurité entre le coucher et le lever du soleil",
    englishWord: "night",
    englishDef: "period of darkness between sunset and sunrise",
  },
  {
    word: "paix",
    definition: "absence de guerre",
    englishWord: "peace",
    englishDef: "absence of war",
  },
  {
    word: "père",
    definition: "homme qui a engendré un enfant",
    englishWord: "father",
    englishDef: "man who has fathered a child",
  },
  {
    word: "peur",
    definition: "sentiment d'appréhension",
    englishWord: "fear",
    englishDef: "feeling of apprehension",
  },
  {
    word: "pluie",
    definition: "eau qui tombe du ciel",
    englishWord: "rain",
    englishDef: "water falling from the sky",
  },
  {
    word: "rêve",
    definition: "suite d'images produites pendant le sommeil",
    englishWord: "dream",
    englishDef: "sequence of images produced during sleep",
  },
  {
    word: "roi",
    definition: "chef d'État monarchique",
    englishWord: "king",
    englishDef: "monarchical head of state",
  },
  {
    word: "route",
    definition: "voie de circulation",
    englishWord: "road",
    englishDef: "traffic route",
  },
  {
    word: "saison",
    definition: "période de l'année",
    englishWord: "season",
    englishDef: "period of the year",
  },
  {
    word: "sang",
    definition: "liquide rouge circulant dans les veines",
    englishWord: "blood",
    englishDef: "red liquid circulating in veins",
  },
  {
    word: "santé",
    definition: "état de bon fonctionnement de l'organisme",
    englishWord: "health",
    englishDef: "state of good functioning of the body",
  },
  {
    word: "soeur",
    definition: "fille des mêmes parents qu'une autre personne",
    englishWord: "sister",
    englishDef: "girl of the same parents as another person",
  },
  {
    word: "soleil",
    definition: "astre lumineux qui éclaire la Terre",
    englishWord: "sun",
    englishDef: "luminous star that lights the Earth",
  },
  {
    word: "temps",
    definition: "mesure de la durée",
    englishWord: "time",
    englishDef: "measure of duration",
  },
  {
    word: "terre",
    definition: "planète où nous vivons",
    englishWord: "Earth",
    englishDef: "planet where we live",
  },
  {
    word: "travail",
    definition: "activité professionnelle",
    englishWord: "work",
    englishDef: "professional activity",
  },
  {
    word: "vie",
    definition: "existence d'un être vivant",
    englishWord: "life",
    englishDef: "existence of a living being",
  },
  {
    word: "ville",
    definition: "agglomération urbaine",
    englishWord: "city",
    englishDef: "urban agglomeration",
  },
  {
    word: "voiture",
    definition: "véhicule à moteur",
    englishWord: "car",
    englishDef: "motor vehicle",
  },
  {
    word: "eau",
    definition: "liquide vital incolore",
    englishWord: "water",
    englishDef: "colorless vital liquid",
  },
  {
    word: "lumière",
    definition: "énergie visible qui éclaire",
    englishWord: "light",
    englishDef: "visible energy that illuminates",
  },
  {
    word: "ombre",
    definition: "zone sombre créée par un objet",
    englishWord: "shadow",
    englishDef: "dark area created by an object",
  },
  {
    word: "feu",
    definition: "combustion produisant chaleur et lumière",
    englishWord: "fire",
    englishDef: "combustion producing heat and light",
  },
  {
    word: "ciel",
    definition: "espace au-dessus de la terre",
    englishWord: "sky",
    englishDef: "space above the earth",
  },
  {
    word: "vent",
    definition: "mouvement de l'air",
    englishWord: "wind",
    englishDef: "movement of air",
  },
  {
    word: "montagne",
    definition: "relief élevé",
    englishWord: "mountain",
    englishDef: "elevated terrain",
  },
  {
    word: "rivière",
    definition: "cours d'eau",
    englishWord: "river",
    englishDef: "watercourse",
  },
  {
    word: "jardin",
    definition: "terrain où l'on cultive des plantes",
    englishWord: "garden",
    englishDef: "land where plants are cultivated",
  },
  {
    word: "pont",
    definition: "construction permettant de franchir un obstacle",
    englishWord: "bridge",
    englishDef: "structure allowing crossing of an obstacle",
  },
  {
    word: "voix",
    definition: "son produit par les cordes vocales",
    englishWord: "voice",
    englishDef: "sound produced by vocal cords",
  },
  {
    word: "livre",
    definition: "ensemble de pages reliées",
    englishWord: "book",
    englishDef: "set of bound pages",
  },
  {
    word: "lettre",
    definition: "caractère d'écriture",
    englishWord: "letter",
    englishDef: "character of writing",
  },
  {
    word: "musique",
    definition: "art des sons",
    englishWord: "music",
    englishDef: "art of sounds",
  },
  {
    word: "chanson",
    definition: "composition musicale vocale",
    englishWord: "song",
    englishDef: "vocal musical composition",
  },
  // Verbs
  {
    word: "aimer",
    definition: "éprouver de l'amour",
    englishWord: "to love",
    englishDef: "to feel love",
  },
  {
    word: "aller",
    definition: "se déplacer vers un lieu",
    englishWord: "to go",
    englishDef: "to move to a place",
  },
  {
    word: "apporter",
    definition: "amener quelque chose",
    englishWord: "to bring",
    englishDef: "to bring something",
  },
  {
    word: "attendre",
    definition:
      "rester en un lieu jusqu'à l'arrivée de quelqu'un ou quelque chose",
    englishWord: "to wait",
    englishDef: "to stay in a place until someone or something arrives",
  },
  {
    word: "avoir",
    definition: "posséder",
    englishWord: "to have",
    englishDef: "to possess",
  },
  {
    word: "chanter",
    definition: "produire des sons musicaux avec la voix",
    englishWord: "to sing",
    englishDef: "to produce musical sounds with the voice",
  },
  {
    word: "chercher",
    definition: "essayer de trouver",
    englishWord: "to look for",
    englishDef: "to try to find",
  },
  {
    word: "comprendre",
    definition: "saisir le sens de quelque chose",
    englishWord: "to understand",
    englishDef: "to grasp the meaning of something",
  },
  {
    word: "connaître",
    definition: "avoir la connaissance de quelque chose",
    englishWord: "to know",
    englishDef: "to have knowledge of something",
  },
  {
    word: "courir",
    definition: "se déplacer rapidement avec les jambes",
    englishWord: "to run",
    englishDef: "to move quickly with the legs",
  },
  {
    word: "créer",
    definition: "produire quelque chose de nouveau",
    englishWord: "to create",
    englishDef: "to produce something new",
  },
  {
    word: "croire",
    definition: "tenir pour vrai",
    englishWord: "to believe",
    englishDef: "to hold something as true",
  },
  {
    word: "demander",
    definition: "solliciter quelque chose",
    englishWord: "to ask",
    englishDef: "to request something",
  },
  {
    word: "dire",
    definition: "exprimer par des mots",
    englishWord: "to say",
    englishDef: "to express with words",
  },
  {
    word: "donner",
    definition: "transmettre quelque chose à quelqu'un",
    englishWord: "to give",
    englishDef: "to pass something to someone",
  },
  {
    word: "écrire",
    definition: "tracer des signes graphiques représentant des mots",
    englishWord: "to write",
    englishDef: "to draw graphic signs representing words",
  },
  {
    word: "écouter",
    definition: "prêter attention à des sons",
    englishWord: "to listen",
    englishDef: "to pay attention to sounds",
  },
  {
    word: "entrer",
    definition: "pénétrer dans un lieu",
    englishWord: "to enter",
    englishDef: "to penetrate into a place",
  },
  {
    word: "envoyer",
    definition: "faire parvenir quelque chose à quelqu'un",
    englishWord: "to send",
    englishDef: "to make something reach someone",
  },
  {
    word: "être",
    definition: "exister",
    englishWord: "to be",
    englishDef: "to exist",
  },
  {
    word: "faire",
    definition: "effectuer une action",
    englishWord: "to do",
    englishDef: "to perform an action",
  },
  {
    word: "fermer",
    definition: "clore une ouverture",
    englishWord: "to close",
    englishDef: "to shut an opening",
  },
  {
    word: "finir",
    definition: "arriver au terme de quelque chose",
    englishWord: "to finish",
    englishDef: "to reach the end of something",
  },
  {
    word: "jouer",
    definition: "participer à un jeu",
    englishWord: "to play",
    englishDef: "to take part in a game",
  },
  {
    word: "lire",
    definition: "déchiffrer des signes graphiques",
    englishWord: "to read",
    englishDef: "to decipher graphic signs",
  },
  {
    word: "manger",
    definition: "consommer des aliments",
    englishWord: "to eat",
    englishDef: "to consume food",
  },
  {
    word: "marcher",
    definition: "se déplacer à pied",
    englishWord: "to walk",
    englishDef: "to move on foot",
  },
  {
    word: "mettre",
    definition: "placer quelque chose quelque part",
    englishWord: "to put",
    englishDef: "to place something somewhere",
  },
  {
    word: "ouvrir",
    definition: "dégager une ouverture",
    englishWord: "to open",
    englishDef: "to clear an opening",
  },
  {
    word: "parler",
    definition: "communiquer par la parole",
    englishWord: "to speak",
    englishDef: "to communicate through speech",
  },
  {
    word: "partir",
    definition: "quitter un lieu",
    englishWord: "to leave",
    englishDef: "to leave a place",
  },
  {
    word: "penser",
    definition: "avoir des pensées",
    englishWord: "to think",
    englishDef: "to have thoughts",
  },
  {
    word: "pouvoir",
    definition: "avoir la capacité de faire quelque chose",
    englishWord: "to be able to",
    englishDef: "to have the ability to do something",
  },
  {
    word: "prendre",
    definition: "se saisir de quelque chose",
    englishWord: "to take",
    englishDef: "to seize something",
  },
  {
    word: "regarder",
    definition: "diriger ses yeux vers quelque chose",
    englishWord: "to look at",
    englishDef: "to direct one's eyes towards something",
  },
  {
    word: "rester",
    definition: "demeurer en un lieu",
    englishWord: "to stay",
    englishDef: "to remain in a place",
  },
  {
    word: "savoir",
    definition: "avoir la connaissance de quelque chose",
    englishWord: "to know",
    englishDef: "to have knowledge of something",
  },
  {
    word: "amitié",
    definition: "sentiment d'affection entre deux personnes",
    englishWord: "friendship",
    englishDef: "feeling of affection between two people",
  },
  {
    word: "animal",
    definition: "être vivant doué de sensibilité",
    englishWord: "animal",
    englishDef: "living being with sensitivity",
  },
  {
    word: "argent",
    definition: "métal précieux ou monnaie",
    englishWord: "silver",
    englishDef: "precious metal or currency",
  },
  {
    word: "balcon",
    definition: "plateforme extérieure",
    englishWord: "balcony",
    englishDef: "external platform",
  },
  {
    word: "bateau",
    definition: "moyen de transport sur l'eau",
    englishWord: "boat",
    englishDef: "means of transportation on water",
  },
  {
    word: "boulangerie",
    definition: "lieu où l'on fait du pain",
    englishWord: "bakery",
    englishDef: "place where bread is made",
  },
  {
    word: "bureau",
    definition: "pièce où l'on travaille",
    englishWord: "office",
    englishDef: "room where one works",
  },
  {
    word: "cadeau",
    definition: "objet offert",
    englishWord: "gift",
    englishDef: "offered object",
  },
  {
    word: "café",
    definition: "boisson noire et amère",
    englishWord: "coffee",
    englishDef: "black and bitter drink",
  },
  {
    word: "cheval",
    definition: "grand mammifère herbivore",
    englishWord: "horse",
    englishDef: "large herbivorous mammal",
  },
  {
    word: "chemin",
    definition: "voie de passage",
    englishWord: "path",
    englishDef: "passageway",
  },
  {
    word: "cœur",
    definition: "organe qui pompe le sang",
    englishWord: "heart",
    englishDef: "organ that pumps blood",
  },
  {
    word: "crayon",
    definition: "outil pour écrire ou dessiner",
    englishWord: "pencil",
    englishDef: "tool for writing or drawing",
  },
  {
    word: "désert",
    definition: "région aride",
    englishWord: "desert",
    englishDef: "arid region",
  },
  {
    word: "docteur",
    definition: "personne qui exerce la médecine",
    englishWord: "doctor",
    englishDef: "person who practices medicine",
  },
  {
    word: "église",
    definition: "bâtiment pour le culte chrétien",
    englishWord: "church",
    englishDef: "building for Christian worship",
  },
  {
    word: "étoile",
    definition: "astre qui brille dans le ciel",
    englishWord: "star",
    englishDef: "celestial body that shines in the sky",
  },
  {
    word: "fête",
    definition: "célébration",
    englishWord: "party",
    englishDef: "celebration",
  },
  {
    word: "forêt",
    definition: "grande étendue boisée",
    englishWord: "forest",
    englishDef: "large wooded area",
  },
  {
    word: "glace",
    definition: "eau congelée",
    englishWord: "ice",
    englishDef: "frozen water",
  },
  {
    word: "gâteau",
    definition: "pâtisserie sucrée",
    englishWord: "cake",
    englishDef: "sweet pastry",
  },
  {
    word: "hôpital",
    definition: "établissement de soins médicaux",
    englishWord: "hospital",
    englishDef: "medical care facility",
  },
  {
    word: "île",
    definition: "étendue de terre entourée d'eau",
    englishWord: "island",
    englishDef: "land surrounded by water",
  },
  {
    word: "jardin",
    definition: "terrain où l'on cultive des plantes",
    englishWord: "garden",
    englishDef: "land where plants are cultivated",
  },
  {
    word: "jouet",
    definition: "objet pour jouer",
    englishWord: "toy",
    englishDef: "object to play with",
  },
  {
    word: "lampe",
    definition: "appareil qui éclaire",
    englishWord: "lamp",
    englishDef: "device that illuminates",
  },
  {
    word: "montagne",
    definition: "relief élevé",
    englishWord: "mountain",
    englishDef: "elevated terrain",
  },
  {
    word: "musée",
    definition: "lieu où l'on expose des œuvres d'art",
    englishWord: "museum",
    englishDef: "place where art is exhibited",
  },
  {
    word: "neige",
    definition: "précipitation blanche et froide",
    englishWord: "snow",
    englishDef: "white and cold precipitation",
  },
  {
    word: "oiseau",
    definition: "animal qui vole",
    englishWord: "bird",
    englishDef: "animal that flies",
  },
  {
    word: "pain",
    definition: "aliment de base fait de farine",
    englishWord: "bread",
    englishDef: "staple food made from flour",
  },
  {
    word: "poule",
    definition: "oiseau domestique",
    englishWord: "chicken",
    englishDef: "domestic bird",
  },
  {
    word: "quartier",
    definition: "partie d'une ville",
    englishWord: "neighborhood",
    englishDef: "part of a city",
  },
  {
    word: "rivière",
    definition: "cours d'eau",
    englishWord: "river",
    englishDef: "watercourse",
  },
  {
    word: "salle",
    definition: "pièce dans un bâtiment",
    englishWord: "room",
    englishDef: "space in a building",
  },
  {
    word: "savon",
    definition: "produit pour se laver",
    englishWord: "soap",
    englishDef: "product for washing",
  },
  {
    word: "souris",
    definition: "petit rongeur",
    englishWord: "mouse",
    englishDef: "small rodent",
  },
  {
    word: "table",
    definition: "meuble sur lequel on mange ou travaille",
    englishWord: "table",
    englishDef: "furniture on which one eats or works",
  },
  {
    word: "train",
    definition: "moyen de transport ferroviaire",
    englishWord: "train",
    englishDef: "rail transport",
  },
  {
    word: "vache",
    definition: "grand mammifère domestique",
    englishWord: "cow",
    englishDef: "large domestic mammal",
  },
  {
    word: "valise",
    definition: "bagage pour voyager",
    englishWord: "suitcase",
    englishDef: "luggage for traveling",
  },
];

let currentWord;
let currentIndex;
let score = 0;
let correctWords = []

const definitionDisplay = document.getElementById("definitionDisplay");
const wordDisplay = document.getElementById("wordDisplay");
const scoreBoard = document.getElementById("scoreBoard");
const textInput = document.getElementById("textInput");
const continueButton = document.getElementById("continueButton");
const translateButton = document.getElementById("translateButton");
const correctBanner = document.getElementById("correctBanner")

const lettersDisplay = document.getElementById("letters")
const dictionaryDisplay = document.getElementById("dictionaryDisplay")
textInput.addEventListener("keyup", (e) => checkForEnterKey(e));


// MAIN GAME FUNCTIONS
function initialize() {
  if (words.length === 0) {
    console.log("game over");
    return null;
  }
  correctBanner.classList.add('d-none')
  updateScore();
  setIndex();
  setCurrentWord();
  renderDefinition();
  removePreviousWord();
  showInitialOptions();
  renderDictionary()
  clearInput();
  // showLetters();
}

function renderDictionary() {
  dictionaryDisplay.innerHTML = ""
  let correctWordsDiv = document.createElement("div")
  correctWordsDiv.className = "text-success d-flex gap-3 flex-wrap"
  
  let remainingWordsDiv = document.createElement("div")
  remainingWordsDiv.className = "d-flex gap-3 flex-wrap"
  correctWords.forEach((word) => {
    let el = document.createElement("div")
    el.innerText = word.word
    correctWordsDiv.appendChild(el)
  })
  words.forEach((word) => {
    let el = document.createElement("div")
    el.innerText = word.word
    remainingWordsDiv.appendChild(el)
  })
  if(correctWords.length > 0) {
    dictionaryDisplay.appendChild(correctWordsDiv)
  }
  dictionaryDisplay.appendChild(remainingWordsDiv)
}

function showLetters() {
  lettersDisplay.innerText = ""
  
  let div = document.createElement("div")
  div.className = "d-flex gap-3 flex-wrap"
  
  let letters = shuffleArray(currentWord.word.split(''))
  letters.forEach((letter) => {
    let el = document.createElement("button")
    el.className = "btn btn-info btn-sm p-3 fs-5 text-uppercase"
    el.innerText = letter
    el.addEventListener('click', (e) => {
      textInput.value += e.currentTarget.innerText.toLowerCase()
      checkInput()
      e.currentTarget.remove()
    })
    div.appendChild(el)
  })
  document.getElementById("letters").appendChild(div)
}

function continueGame() {
  words.splice(currentWord, 1);
  correctWords.push(currentWord)
  score += 1;
  initialize();
}

function skipWord() {
  initialize();
}
function showWord() {
  wordDisplay.innerText = `${currentWord.word} / ${currentWord.englishWord}`;
}

function removePreviousWord() {
  wordDisplay.innerText = "";
}

// VALIDATION FUNCTIONS
function checkForEnterKey(e) {
  if (e.key == "Enter") {
    if (textInput.value.toLowerCase().trim() == currentWord.word) {
      continueGame();
    }
  }
}

function checkInput() {
  if (textInput.value.toLowerCase().trim() == currentWord.word) {
    showCorrectResponseOption();
  } else {
    showInitialOptions();
  }
}

// helper functions

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateScore() {
  scoreBoard.innerHTML = `${score} / ${words.length + score}`;
}

function setIndex() {
  currentIndex = Math.floor(Math.random() * words.length);
  setCurrentWord();
}

function setCurrentWord() {
  currentWord = words[currentIndex];
}

function clearInput() {
  textInput.value = "";
  // showLetters()
  showInitialOptions()
}

function renderDefinition() {
  definitionDisplay.innerText = currentWord.definition;
}

function translateDefinition() {
  if (definitionDisplay.innerText == currentWord.definition) {
    definitionDisplay.innerText = currentWord.englishDef;
    translateButton.innerText = "Français";
  } else {
    definitionDisplay.innerText = currentWord.definition;
    translateButton.innerText = "Anglais";
  }
}

function showCorrectResponseOption() {
  correctBanner.classList.remove('d-none')
  document.getElementById("initialOptions").classList.add("d-none");
  continueButton.classList.remove("d-none");
}

function showInitialOptions() {
  wordDisplay.innerHTML = "";
  // lettersDisplay.classList.remove('d-none')
  document.getElementById("initialOptions").classList.remove("d-none");
  continueButton.classList.add("d-none");
}

window.onLoad = initialize();

