// storyGame.js
"use client";

import { useEffect } from "react";
import { INVENTORY } from "@/components/inventory.js";
import { INTRO_MESSAGES } from "@/components/messages.js";

// Declares an exportable React functional component that takes setOutput as a prop
// setOutput allows the parent component in page.js to set output state
export default function storyGame({ setOutput }) {
  // useEffect hook performs side-effects of the React component
  useEffect(() => {
    setOutput(INTRO_MESSAGES.intro1);
    // delayed action as learned from bootcamp pre-work
    setTimeout(() => {
      setOutput(INTRO_MESSAGES.intro2);
    }, 10000);
  }, [setOutput]); // dependency list

  return null; // Logic-only component
};

/* 
export default function StoryGame({ setOutput }) {
  // Gets references to messages
  const introMessage = messages.intro1;
  const yesMessage = messages.intro2;
  const noMessage = messages.ifTheyPressNo;

  // Outputs first message
  storyOutput.textContent = introMessage;

  // Event listener for "yes" button
  function onYesClick() {
    // Removes the event listener for "yes" button
    yesButton.removeEventListener("click", onYesClick);
    // Removes the event listener for "no" button
    noButton.removeEventListener("click", onNoClick);

    storyOutput.textContent = yesMessage;
    setTimeout(nextQuestion, 5000);
  }
  yesButton.addEventListener("click", onYesClick);

  // Event listener for "no" button
  function onNoClick() {
    // Removes the event listener for "yes" button
    yesButton.removeEventListener("click", onYesClick);
    // Removes the event listener for "no" button
    noButton.removeEventListener("click", onNoClick);

    storyOutput.textContent = noMessage;
  }
  noButton.addEventListener("click", onNoClick);
}
*/

/* TO BE FIXED

function nextQuestion() {
  // gets references to messages
  const leaveRoomOrNot = messages.leaveRoom;
  const gameOver1 = messages.leaveRoomNo;

  // displays choice to leave room or not
  storyOutput.textContent = leaveRoomOrNot;

  // define the event listener functions
  function handleYesClick() {
    // remove event listeners
    yesButton.removeEventListener("click", handleYesClick);
    noButton.removeEventListener("click", handleNoClick);

    upstairsChoices();
  }

  function handleNoClick() {
    // remove event listeners
    yesButton.removeEventListener("click", handleYesClick);
    noButton.removeEventListener("click", handleNoClick);

    storyOutput.textContent = gameOver1;

    // add event listener to restart the game
    yesButton.addEventListener("click", function () {
      beginGame();
    });
  }

  // add event listeners
  yesButton.addEventListener("click", handleYesClick);
  noButton.addEventListener("click", handleNoClick);
}

function upstairsChoices() {
  // references to messages
  const leftOrRight = messages.leaveRoomYes;

  // asks whether the user wants to go left or right
  storyOutput.textContent = leftOrRight;

  // remove existing event listeners
  yesButton.removeEventListener("click", chooseLeft);
  noButton.removeEventListener("click", chooseRight);

  // add event listeners
  yesButton.addEventListener("click", chooseLeft);
  noButton.addEventListener("click", chooseRight);
}

//this invokes correctly
function chooseLeft() {
  // remove event listeners
  yesButton.removeEventListener("click", chooseLeft);
  noButton.removeEventListener("click", chooseRight);

  // references to messages
  const left = messages.upstairs1;

  // asks if they want to look inside a cupboard
  storyOutput.textContent = left;

  // if yes, proceed to gun choices
  yesButton.addEventListener("click", gunchoices);

  // if no, proceed to bat choices
  noButton.addEventListener("click", batchoices);
}

//this invokes properly, goes to coatChoices propery but the no button doesn't seem to work...
function chooseRight() {
  // Remove event listeners
  yesButton.removeEventListener("click", chooseLeft);
  noButton.removeEventListener("click", chooseRight);

  // References to messages
  const right = messages.upstairs2;

  // Asks if they want to look through the room
  storyOutput.textContent = right;

  // If yes, proceed to coat choices
  yesButton.addEventListener("click", coatChoices);

  // If no, they leave and take the bat
  function handleNoClick() {
    if (!weapons.bat) {
      // References to messages
      const bat = messages.bedroomNo;

      storyOutput.textContent = bat;

      // Sets bat to true in inventory
      weapons.bat = true;

      // Change the HTML to display it
      let batStatus = document.getElementById("batStatus");
      batStatus.innerHTML = "has bat";

      // Proceed to main floor
      mainFloorChoices();
    }

    // Remove event listener for the "no" button
    noButton.removeEventListener("click", handleNoClick);
  }

  // Add event listener for the "no" button
  noButton.addEventListener("click", handleNoClick);
}

//haven't checked if this works yet
function gunChoices() {
  // Remove event listeners
  yesButton.removeEventListener("click", chooseLeft);
  noButton.removeEventListener("click", chooseRight);

  //references message
  const takePistolOrNot = messages.attic1;

  //gives user the choice to take gun or not
  storyOutput.textContent = takePistolOrNot;

  function handleYesClick() {
    if (!weapons.gun) {
      weapons.gun = true;
      //how would I actually get it to display?
      mainFloorChoices();
    }
  }

  function handleNoClick() {
    const gameOver2 = messages.gunNo;
    storyOutput.textContent = gameOver2;
  }

  //if yes, get the gun and proceed to main floor
  yesButton.addEventListener("click", handleYesClick);

  //if no, game over #2
  noButton.addEventListener("click", handleNoClick);
}

//still can't display weapons status here either
function batChoices() {
  //removes previous event listeners
  yesButton.removeEventListener("click", chooseLeft);
  noButton.removeEventListener("click", chooseRight);

  //gets reference to message
  const wantABat = messages.attic2;

  //offers a bat
  storyOutput.textContent = wantABat;

  function handleYesClick() {
    if (!weapons.bat) {
      weapons.bat = true;
      //how do I display it on the webpage??
      mainFloorChoices();
    }
  }

  function handleNoClick() {
    //removes previous event listeners
    yesButton.removeEventListener("click", chooseLeft);
    noButton.removeEventListener("click", chooseRight);

    //gets reference to messages
    const gameOver3 = messages.batNo;
    const gameOver3Part2 = messages.batNo2;

    //displayes part 1 of message
    storyOutput.textContent = gameOver3;

    //displays part 2 of message after 5 seconds
    setTimeout(function () {
      storyOutput.textContent = gameOver3Part2;
    }, 5000);

    //restarts the game if they press yes
    yesButton.addEventListener("click", beginGame);
  }

  //assigns event listeners
  yesButton.addEventListener("click", handleYesClick);
  noButton.addEventListener("click", handleNoClick);
}

//untested
function coatChoices() {
  //removes previous event listeners
  yesButton.removeEventListener("click", coatChoices);
  noButton.removeEventListener("click", handleNoClick);

  //references message
  const furOrLeather = messages.bedroomYes;

  //asks if they want to get a fur coat or leather jacket
  storyOutput.textContent = furOrLeather;

  //fur coat option
  function handleYesClick() {
    const spiderBite = messages.furCoat;
    if (!coat.fur) {
      coat.fur = true;

      //how do I show you have a fur coat?

      storyOutput.textContent = spiderBite;
    }

    mainFloorChoices();
  }

  //leather jacket option with pistol
  function handleNoClick() {
    const leatherCoatAndPistol = messages.leatherCoat;

    if (!weapons.gun) {
      weapons.gun = true;

      //still don't know how to display it yet
    }

    storyOutput.textContent = leatherCoatAndPistol;

    mainFloorChoices();
  }

  //assigns event listeners
  yesButton.addEventListener("click", handleYesClick);
  noButton.addEventListener("click", handleNoClick);
}

function mainFloorChoices() {
  const mainFloorChoice = prompt(messages.LEATHERCOAT2);
  if (mainFloorChoice === 'bathroom') {
    bathroomChoices();
  } else if (mainFloorChoice === 'living room') {
    //game over
    alert(messages.LIVINGROOM);
  }
};
*/

/* UNFINISHED STORY LINES 

function bathroomChoices() {
  const bathroomChoice = prompt(messages.BATHROOM1);
  if (bathroomChoice === 'red') {
    basementChoices();
  } else if (bathroomChoice === 'black') {
    //game over
    alert(messages.BLACKVIAL);
  }
}

function basementChoices() {
  const basementChoice = confirm(messages.REDVIAL);
  if (basementChoice && coat.fur === true) {
    //game over
    alert(messages.FURCOATBASEMENT);
  } else if (basementChoice) {  
    runOrHideChoices();
  } else if (!basementChoice) {
    alert(messages.BASEMENTNO);
  } 
}

function runOrHideChoices() {
  const runOrHideChoice = prompt(messages.BASEMENTYES);
  if (runOrHideChoice === 'run') {
    basementRunChoices();
  } else if (runOrHideChoice === 'hide') {
    basementHideChoices();
  }
}

function basementRunChoices() {
  const basementRunChoice = confirm(messages.BASEMENTRUN);
  const basementDoorOpen = prompt(messages.BASEMENTDOOROPEN);
  if (basementDoorOpen === 'fight' || basementDoorOpen === 'Fight') {
    if (weapons.gun === true) {
      const runGun = prompt(messages.ATDOORGUNFIGHT);
      if (runGun === 'approach' || runGun === 'Approach') {
        //win!
        prompt(messages.DOUBLETAP);
        
      } else if (runGun === 'run' || runGun === 'Run') {
        //win!
        alert(messages.KEEPRUNNING);
      }
    } else if (weapons.bat === true) {
      //game over
      alert(messages.ATDOORBATFIGHT); 
      alert(messages.ATDOORBATFIGHT2);
    }
  } else if (basementDoorOpen === 'run' || basementDoorOpen === 'Run') {
    //win!
    alert(messages.KEEPRUNNING);
  }
}

function basementHideChoices() {
  if (weapons.gun === true) {
    const gunHide = prompt(messages.BASEMENTGUNHIDE);
    if (gunHide === 'shoot' || gunHide === 'Shoot') {
      //win!
      alert(messages.BASEMENTGUNHIDETHENSHOOT);
      alert(messages.BASEMENTGUNNOWRUNNING);
    } else if (gunHide === 'hide' || gunHide === 'Hide') {
      //game over
      alert(messages.BASEMENTGUNHIDE2)
    }
  } else if (weapons.bat === true) {
    const batHide = prompt(messages.BASEMENTBATHIDE);
    if (batHide === 'fight' || batHide === 'Fight') {
      //win!
      alert(messages.BATFIGHTNOW);
      alert(messages.BATFIGHTNOW2);
    } else if (batHide === 'hide' || batHide === 'Hide') {
      //game over
      alert(messages.BASEMENTBATHIDE2);
    }
  }
}

beginGame();
*/
