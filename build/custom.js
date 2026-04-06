


function vh_audioProgress(percentPlayed) {
  if (document.forms[0]) {
    document.forms[0].message.value += "Received 'vh_audioProgress' at " + percentPlayed + "% \n";
  }
}

function vh_sceneLoaded() {
  window.setStatus(1, 1, 0, 1); // Interrupt mode ON
  if (document.forms[0]) {
    document.forms[0].message.value += "Received 'vh_sceneLoaded' event \n   calling: 'setStatus(1,1,0,1)' \n";
  }
  var btn_disable_character = document.getElementById("btn_disable_character");
  btn_disable_character.style.opacity = "1";
  btn_disable_character.style.pointerEvents = "unset";
}


function vh_audioStarted() {
  if (document.forms[0]) {
    document.forms[0].message.value += "Received 'vh_audioStarted' event \n";
  }
}

function vh_audioEnded() {
  if (document.forms[0]) {
    document.forms[0].message.value += "Received 'vh_audioEnded' event \n";
  }
}

function vh_saySilent() {
  if (document.forms[0]) {
    document.forms[0].message.value += "Received 'vh_saySilent' event \n";
  }
}


