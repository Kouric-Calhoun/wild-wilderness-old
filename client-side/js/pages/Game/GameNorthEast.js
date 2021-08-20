let textElement;
let optionButtonsElement;

let state = {};

export default function startGameNorthEast() {
  textElement = document.getElementById("scenarios-text");
  optionButtonsElement = document.getElementById("option-buttons");
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGameNorthEast();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "You are in a forest and you are about to go hunting, you have room for one more item in your bag, which will you take? ",
    options: [
      {
        text: "Take a extra knife",
        setState: { knife: true },
        nextText: 2,
      },
      {
        text: "Take some more food",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "As you travel you notice you have a hole in your bag and you lost all of your supplies except 3 items, Which one do you take?",
    options: [
      {
        text: "Take your food",
        requiredState: (currentState) => currentState.food,
        setState: { knife: false, food: true },
        nextText: 3,
      },
      {
        text: "Take your water jug",
        requiredState: (currentState) => currentState.water,
        setState: { knife: false, water: true },
        nextText: 3,
      },
      {
        text: "Take your knife and leave the rest",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "As you travel you come upon a path, which direction do you take?",
    options: [
      {
        text: "Go to the right",
        nextText: 4,
      },
      {
        text: "Go to the left",
        nextText: 5,
      },
      {
        text: "Keep straight on the path you are already on",
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: "You hit a dead end and decided to wait for someone to come find you, your game is over.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "You go left and end up getting yourself lost, You are not ready to be a huntsman, try again.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: "You keep straight and find a river, you can swim across but you are not sure where it will lead",
    options: [
      {
        text: "Swim in the river",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "You emerge from the river and you see a angry bear, you have no choice but to defend yourself",
    options: [
      {
        text: "Ignore the bear, and hope he does not see you",
        nextText: 8,
      },
      {
        text: "Give him your food",
        requiredState: (currentState) => currentState.food,
        nextText: 9,
      },
      {
        text: "Throw water at him",
        requiredState: (currentState) => currentState.water,
        nextText: 10,
      },
      {
        text: "Pull out your knife",
        requiredState: (currentState) => currentState.knife,
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: "That did not work and the bear saw you, then ate you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "He ate the food, then ate you. Game Over!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: "You threw water on the bear and that really got him angry, He ate you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "The bear saw your shiny blade and decided he did not want no smoke today and left you alone.",
    options: [
      {
        text: "Congratulations!!!! Play Again.",
        nextText: -1,
      },
    ],
  },
];
