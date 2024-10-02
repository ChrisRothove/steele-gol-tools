window.TammyCount = window.TammyCount >= 0 ? window.TammyCount + 1 : 0;
console.log(window.TammyCount);

if (typeof TammyBookHandler === "function") {
  new TammyBookHandler().initiateButtons();
} else {
  class TammyBookHandler {
    constructor() {
      this.currentInfo = null;
      this.CurrentWindow =
        document.getElementsByClassName("tammy-wrapper")[window.TammyCount];

      this.AllCommandTitles =
        this.CurrentWindow.getElementsByClassName("command");

      this.AllCommandDescriptions =
        this.CurrentWindow.getElementsByClassName("command-details");

      this.StyleTitle = this.CurrentWindow.getElementsByClassName("style")[0];

      this.StyleDescription =
        this.CurrentWindow.getElementsByClassName("style-details")[0];

      this.InfoWindow =
        this.CurrentWindow.getElementsByClassName("gif-info")[0];
    }

    resetInfo(index, titleText, descText) {
      if (this.currentInfo == index) {
        this.currentInfo = null;
      } else {
        this.currentInfo = index;
      }

      if (this.currentInfo !== null) {
        this.InfoWindow.innerHTML = `<b>${titleText}</b><hr>${descText}`;
      } else {
        this.InfoWindow.innerHTML = "";
      }
    }

    populateInfoBlock(index) {
      const titleText = this.AllCommandTitles[index]?.innerHTML;
      const descText = this.AllCommandDescriptions[index]?.innerHTML;

      this.resetInfo(index, titleText, descText);
    }

    populateInfoWithStyle() {
      const titleText = this.StyleTitle.innerHTML;
      const descText = this.StyleDescription.innerHTML;

      this.resetInfo(100, titleText, descText);
    }

    initiateButtons() {
      const buttons = Array.from(this.AllCommandTitles) || [];
      buttons?.forEach((element, index) =>
        element.addEventListener("click", (e) => {
          e.preventDefault();
          this.populateInfoBlock(index);
        })
      );

      this.StyleTitle.addEventListener("click", (e) => {
        e.preventDefault();
        this.populateInfoWithStyle();
      });
    }
  }

  new TammyBookHandler().initiateButtons();
}
