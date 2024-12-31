// Story Lines
const messages = {
  intro1:
    "You wake up dazed and confused. The room you are in is cold, dark, and eerily quiet. What is going on? Your gut is telling you that something is very wrong. (press yes to continue)",
  ifTheyPressNo: "Well, you're rude. Enjoy being trapped in a murder house.",
  intro2:
    "You stand up to look around and realize that you are in a house you do not recognize, and you have no idea how you ended up here. You hear a muffled scream in the distance.",
  leaveRoom: "Let's get the #@!*& out of here, right?",
  leaveRoomYes:
    "You peek out of the room and see a hallway with two doors. Which one do you want to enter? (left or right)",
  leaveRoomNo:
    "You hide in place as footsteps approach. A masked figure approaches. You scream, but it’s too late. Guess you'll die here. Press yes to restart",
  upstairs1:
    "You open the door and see what looks like an attic. There are dusty boxes and cobwebs all around you. You catch a glimpse of a partially opened cupboard. Do you want to look inside?",
  upstairs2:
    "You open the door and see what looks like a bedroom. Dim light filters through the heavy curtains and reveals a filthy, bug-infested room. Do you want to stay and look through the room?",
  bedroomYes:
    "You notice a closet with coats hanging inside. You shiver and realize how cold you are. You go up to the closet and notice a large fur coat and a leather jacket. Which one do you put on? (Press left for fur and right for leather)",
  bedroomNo:
    "Alright, let’s go. You notice a baseball bat next to the door and decide to take it with you.",
  furCoat:
    "You go to slip on the fluffy jacket when all of a sudden, a black widow spider crawls out and bites you. You wince in pain, throw the jacket to the ground, and leave the room.",
  furCoat2:
    "You peek down the other side of the hallway and see a staircase leading downwards. You tiptoe down and see a large living room, and what looks like a bathroom across the hallway. Which room do you want to enter? (bathroom/living room)",
  furCoatBasement:
    "You rush down the stairs when you begin to feel woozy. You remember the spider bite, which is the last thought you have before collapsing onto the staircase. RIP",
  leatherCoat:
    "You slip on the leather jacket and quickly begin to feel warmer. Your determination grows: you are going to make it out of here. You reach into the pocket and find a small pistol inside. That will come in handy.",
  leatherCoat2:
    "You peek down the other side of the hallway and see a staircase leading downwards. You tiptoe down and see a large living room, and what looks like a bathroom across the hallway. Which room do you want to enter? (bathroom/living room)",
  attic1:
    "You open the cupboard and find a small pistol. Do you want to take it with you?",
  gunYes:
    "Alright, let’s go. You peek down the other side of the hallway and see a staircase leading downwards. You tiptoe down and see a large living room, and what looks like a bathroom across the hallway. Which room do you want to enter? (bathroom/living room)",
  gunNo:
    "You turn to exit the room and are startled when the door slams shut. You hear the door lock. You pound on the door and yell for help, but no one will hear you. You will not be leaving any time soon. RIP",
  attic2:
    "Okay, let’s leave. You turn to exit the room and notice a baseball bat propped up next to the door. Do you want to take it with you?",
  batYes:
    "Alright, let’s go. You peek down the other side of the hallway and see a staircase leading downwards. You tiptoe down and see a large living room, and what looks like a bathroom across the hallway. Which room do you want to enter? (bathroom/living room)",
  batNo:
    "As you glance down the other side of the hallway, you hear a rustling behind you. All of a sudden, a swarm of bats scatters throughout the attic. You shriek and slam the door shut.",
  batNo2:
    "You rush down the hallway and see a staircase leading downwards. Frantically, you run down the stairs, but one of the steps collapses underneath you. You crash down and look up to see a masked figure holding a knife at the top of the stairs. You try to pull yourself up, but it is no use. You scream as the killer approaches. RIP. (Press Yes to restart)",
  bathroom1:
    "You make your way into the small, dirty bathroom and notice a medicine cabinet. You open it and find two small vials: one black and one red. Which color do you grab? (red/black)",
  redVial:
    "You grab the vial and place it in your pocket. Suddenly, you hear a floorboard creak near you and footsteps that grow closer and closer. You rush out of the bathroom and notice another small set of stairs at the end of the hallway. You peer down and see what looks like a basement. Do you go down the stairs?",
  blackVial:
    "You grab the vial and decide to drink the liquid inside. You gasp as you feel your throat burn and begin to swell. You clutch at your neck and try to yell for help, but words won't come out. You collapse to the floor. RIP",
  livingRoom:
    "You make your way into the vast, empty room, searching for a way out of this house. You hear a snapping sound above you. As you look up, you see a large chandelier plummeting to the ground. It is the last thing you will ever see. RIP",
  basementYes:
    "You rush down the stairs and spot a metal door at the far side of the basement. Do you run to the door or hide? (run/hide)",
  basementNo:
    "You decide to turn around, but when you do, you come face to face with a masked figure. You scream as they raise their knife and attack you. RIP",
  basementRun:
    "You decide to make a run for it. You quickly decide to drink the contents of the red vial you found earlier. Then you sprint to the door, feeling a boost of adrenaline pulsing through your veins. (press y to open the door)",
  basementDoorOpen:
    "You have to shove with all of your strength, but the door finally opens. You run out, only to hear someone chasing after you in the darkness. You remember the gun you grabbed earlier. Do you turn around and fight or keep running? (fight/run)",
  basementDoorOpenWithBat:
    "You have to shove with all of your strength, but the door finally opens. You run out, baseball bat in hand, only to hear someone chasing after you in the darkness. Do you turn around and fight or keep running? (fight/run)",
  atDoorGunFight:
    "You turn, cock your gun, and fire three times. The racing footsteps stop. Do you approach to see if they are dead or run? (approach/run)",
  atDoorBatFight:
    "You hide on the other side of the door, waiting for your attacker to follow you. They begin to walk through the doorway, and you swing your bat as hard as you can and hit them over the head.",
  atDoorBatFight2:
    "You turn and begin to run away, but you are too slow. The masked figure stands up, knife in hand, and successfully chases after you. RIP, you really tried.",
  keepRunning:
    "You turn away and sprint through the woods surrounding the house. It is pitch black, and you cannot seem to find a road or any other houses to run to for help. You need daylight. Let's hope you make it through the night.",
  doubleTap:
    "You turn back confidently and stand over the masked figure. You shoot until your clip empties. You sprint away from the house and keep running until you find help. Congrats on making it out alive.",
  basementGunHide:
    "You choose to hide behind a large shelf in the basement. Something, or someone, has followed you. You hear footsteps creaking down the stairs and the sound of a knife scraping along the walls. You remember the gun you grabbed earlier. Do you shoot or keep hiding? (shoot/hide)",
  basementGunHideThenShoot:
    "You decide to drink the contents from the vial you found earlier and feel a boost of adrenaline pulsing through your veins. You stand and steady yourself. A masked figure turns and lunges at you with a knife. You lift your gun and shoot repeatedly. They fall to the ground, and you run.",
  basementGunNowRunning:
    "You sprint to the door in the basement, fling it open, and slam it shut behind you. You keep running into the night and do not look back. You finally stop when you are able to find help. Congrats on making it out alive.",
  basementGunHide2:
    "You hide, terrified, and try to quiet your rapid breathing. But it’s no use. A bright light is suddenly turned on, and you squint to see a masked figure staring at you. You fumble for the gun in your waistband, but the killer charges towards you with a knife in hand. You are too slow. RIP",
  basementBatHide:
    "You choose to hide behind a large shelf in the basement. Something, or someone, has followed you. You hear footsteps creaking down the stairs and the sound of a knife scraping along the walls. You clutch the baseball bat you found earlier. Do you stand up and fight or keep hiding? (fight/hide)",
  batFightNow:
    "You decide to drink the contents from the vial you found earlier and feel a boost of adrenaline pulsing through your veins. You stand and steady yourself. A masked figure turns and lunges at you with a knife. You swing as hard as you can and hit your attacker in the head. They fall to the ground, and you run.",
  batFightNow2:
    "You sprint to the door in the basement, fling it open, and slam it shut behind you. You keep running into the night and do not look back. You finally stop when you are able to find help. Congrats on making it out alive.",
  basementBatHide2:
    "You hide, terrified, and try to quiet your rapid breathing. But it’s no use. A bright light is suddenly turned on, and you squint to see a masked figure staring at you. You fumble to swing the baseball bat, but the killer charges towards you with a knife in hand. You are too slow. RIP",
  approachedDoorDead:
    "You slowly approach the fallen figure, heart pounding. As you get closer, you realize they are not dead but only unconscious. You quickly turn around and run out of the house, not daring to look back. Congrats on making it out alive.",
};

// Refactor in nest dictionary

// Weapons Inventory
const weapons = {
  gun: false,
  bat: false,
};

// Coat
const coat = {
  fur: false,
};
