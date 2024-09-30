window.TammyCount = window.TammyCount ? window.TammyCount + 1 : 0;

let currentInfo = null;

function getAllCommandTitles(element) {
  return element.getElementsByClassName("command");
}

function getAllCommandDescriptions(element) {
  return element.getElementsByClassName("command-details");
}

function getStyleTitle(element) {
  return element.getElementsByClassName("style")[0];
}

function getStyleDescription(element) {
  return element.getElementsByClassName("style-details")[0];
}

function getInfoWindow(element) {
  return element.getElementsByClassName("gif-info")[0];
}

function getCurrentWindow() {
  return document.getElementsByClassName("tammy-wrapper")[window.TammyCount];
}

function resetInfo(index, titleText, descText) {
  const InfoBlock = getInfoWindow(getCurrentWindow());

  if (currentInfo == index) {
    currentInfo = null;
  } else {
    currentInfo = index;
  }

  if (currentInfo !== null) {
    InfoBlock.innerHTML = `<b>${titleText}</b><hr>${descText}`;
  } else {
    InfoBlock.innerHTML = "";
  }
}

function populateInfoBlock(index) {
  const CurrentWindow = getCurrentWindow();
  const titles = getAllCommandTitles(CurrentWindow);
  const descriptions = getAllCommandDescriptions(CurrentWindow);

  const titleText = titles[index]?.innerHTML;
  const descText = descriptions[index]?.innerHTML;

  resetInfo(index, titleText, descText);
}

function populateInfoWithStyle() {
  const CurrentWindow = getCurrentWindow();
  const Title = getStyleTitle(CurrentWindow);
  const Desc = getStyleDescription(CurrentWindow);

  const titleText = Title.innerHTML;
  const descText = Desc.innerHTML;

  resetInfo(100, titleText, descText);
}

function initiateButtons() {
  const CurrentWindow = getCurrentWindow();

  const buttons = Array.from(getAllCommandTitles(CurrentWindow)) || [];
  buttons?.forEach((element, index) =>
    element.addEventListener("click", (e) => {
      e.preventDefault();
      populateInfoBlock(index);
    })
  );

  const styleButton = getStyleTitle(CurrentWindow);
  styleButton.addEventListener("click", (e) => {
    e.preventDefault();
    populateInfoWithStyle();
  });
}

initiateButtons();
