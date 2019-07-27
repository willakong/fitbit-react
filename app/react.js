import document from "document";

let titleScreen = document.getElementById("title-screen");
let reactScreen = document.getElementById("react-screen");
let reactTouch = document.getElementById("react-touch");
let reactText = document.getElementById("react-text");
let reactSubText = reactText.getElementById("copy");
let resultsScreen = document.getElementById("results-screen");
let resultsTouch = document.getElementById("results-touch");
let resultsText = document.getElementById("results-text");

let isGreen = false;  // has the screen turned green and ready for user input

export function startReact() {
  // Change screens
  isGreen = false;
  reactTouch.style.fill = "fb-black";
  reactText.style.fill = "fb-peach";
  reactText.text = "Wait...";
  reactSubText.text = "~( ˘ v ˘ ~)";

  titleScreen.style.display = "none";
  resultsScreen.style.display = "none";
  reactScreen.style.display = "inline";

  // Random float generated between 1-3 s
  let min = 1, max = 3;
  let waitTime = Math.floor((Math.random() * (max - min) + min) * 100) / 100;

  // Wait for the wait time (s)
  setTimeout(() => {
    calcReactTime();
  }, waitTime * 1000);
};

function calcReactTime() {
  // Change the screen to green and wait for a user tap
  let startTime = Date.now();
  reactTouch.style.fill = "fb-green";
  reactText.style.fill = "fb-white";
  reactText.text = "Tap!";
  reactSubText.text = "(; > д <)";
  isGreen = true;

  // User has tapped! Display the reaction time if screen has turned green
  reactTouch.onclick = function(e) {
    if (isGreen) {
      let endTime = Date.now();
      let elapsed = endTime - startTime;

      // Change screen
      resultsText.text = "Your reaction time was: " + (elapsed / 1000) + " s";

      titleScreen.style.display = "none";
      reactScreen.style.display = "none";
      resultsScreen.style.display = "inline";

      resultsTouch.onclick = function() {
        startReact();
      };
    }
  }
}