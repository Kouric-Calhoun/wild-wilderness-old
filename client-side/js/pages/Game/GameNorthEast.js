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
    return  startGameNorthEast();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "You are driving back from a long weekend in Vegas with your buddies and the car breaks down. In your left hand you have your phone (Flashlight) what do you take in the right?",
    options: [
      {
        text: "Take water",
        setState: { water: true },
        nextText: 2,
      },
      {
        text: "Take nothing",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You venture forth in search for help and someone (We will call him a merchant) offers you a deal, he wants your water",
    options: [
      {
        text: "Trade the water for a lighter",
        requiredState: (currentState) => currentState.water,
        setState: { water: false, lighter: true },
        nextText: 3,
      },
      {
        text: "Trade the water for a map (Why would you need a map when you have a phone....)",
        requiredState: (currentState) => currentState.water,
        setState: { water: false, map: true },
        nextText: 3,
      },
      {
        text: "Ignore the merchant",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "After leaving the merchant you start to feel sleepy and stumble upon a small run down town next to a dangerous looking mansion.",
    options: [
      {
        text: "Explore the mansion",
        nextText: 4,
      },
      {
        text: "Find a room to sleep at in the town",
        nextText: 5,
      },
      {
        text: "Sleep in a alley",
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: "You are so tired that you fall asleep while exploring the mansion and are killed by a snake in your sleep.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "Without any money to buy a room you break into a hotel and fall asleep. After a few hours of sleep the owner of the hotel finds you and calls the police. You are going to jail.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: "You wake up well rested and full of energy ready to explore the nearby mansion.",
    options: [
      {
        text: "Explore the castle",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "You knock on the door and a thirsty looking child answers....",
    options: [
      {
        text: "Ignore the boy, and walk past him.",
        nextText: 8,
      },
      {
        text: "Give the boy your lighter",
        requiredState: (currentState) => currentState.lighter,
        nextText: 9,
      },
      {
        text: "Offer him your map",
        requiredState: (currentState) => currentState.map,
        nextText: 10,
      },
      {
        text: "Give him your water",
        requiredState: (currentState) => currentState.water,
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: "He has a really big dog right behind him that you did not see, the dog denies your attempt LOL!!!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "He does not want a lighter and shuts the door in your face.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: "He has no idea what would he use a map for when he has google (Why did you choose to take a map?) The boy closes the door in your face.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "He takes the water and Thanks you, his parents are rich and they cut you a check for all your troubles in the amount 1.5 million. ",
    options: [
      {
        text: "Congratulations!!!! Play Again.",
        nextText: -1,
      },
    ],
  },
];
