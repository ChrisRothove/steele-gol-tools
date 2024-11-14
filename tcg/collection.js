window.collectionCount =
  window.collectionCount >= 0 ? window.collectionCount + 1 : 0;

if (typeof CollectionHandler === "function") {
  new CollectionHandler(window.collectionCount).initiate();
} else {
  class CollectionHandler {
    constructor(collectionCount) {
      this.elementId = collectionCount;
      this.ALL_CARDS = window.cards;
      this.DataContainer = this.getDataContainer();
      this.Placeholder = this.getPlaceholder();
      this.collection = this.getCollectionFromIdContainer();
      this.decks = this.getDecksFromContainer();
      this.config = this.getConfigFromContainer();
      this.activeCard = this.collection[0] || null;
      this.activeCollection = this.collection;
      this.buttonMode = "list";
    }

    getDataContainer() {
      return document.getElementsByClassName("data-container")[this.elementId];
    }

    getPlaceholder() {
      return document.getElementsByClassName("collection-placeholder")[
        this.elementId
      ];
    }

    getFirst(id, source = "data") {
      if (source === "data") {
        return this.DataContainer.getElementsByClassName(id)[0];
      } else {
        return this.Placeholder.getElementsByClassName(id)[0];
      }
    }
    getAll(id, source = "data") {
      if (source === "data") {
        return this.DataContainer.getElementsByClassName(id);
      } else {
        return this.Placeholder.getElementsByClassName(id);
      }
    }

    getCardsFromIdString(idString) {
      if (idString === "all") return this.ALL_CARDS;
      const idArray = this.getCollectionIds(idString);
      const collectionArray = [];
      const errorArray = [];

      idArray.forEach((id) => {
        const foundRawId = this.ALL_CARDS.filter((card) => card.code === id);
        if (foundRawId.length >= 1) {
          collectionArray.push(foundRawId[0]);
        } else {
          const numberlessId = id.replace(/[0-9]/g, "");
          const idNumber = id.replace(/[a-z]/g, "");
          const foundId = this.ALL_CARDS.filter(
            (card) => card.code === numberlessId
          );
          if (foundId.length >= 1) {
            collectionArray.push({ ...foundId[0], value: idNumber });
          } else {
            errorArray.push(id);
          }
        }
      });

      this.cardErrors = errorArray;
      return collectionArray;
    }

    getCollectionIds(idString) {
      return idString.split(",").map((id) => id.trim());
    }

    getCollectionFromIdContainer() {
      const idElement = this.getFirst("collection");
      const idString = idElement.innerHTML;
      return this.getCardsFromIdString(idString);
    }

    getConfigFromContainer() {
      const configElements = this.getFirst("config").children;
      const config = Array.from(configElements).map(
        (element) => element.innerHTML.split("</b>")[1]
      );
      return config;
    }

    getDecksFromContainer() {
      const deckElements = this.getAll("deck");
      const decks = Array.from(deckElements).map((element) => {
        const deck = {};
        const idString = element.children[1].innerHTML;
        deck.name = element.children[0].innerHTML;
        deck.cards = this.getCardsFromIdString(idString);
        return deck;
      });
      return decks;
    }

    changeActiveCard(newIndex) {
      this.activeCard = this.activeCollection[newIndex];
    }

    changeActiveCollection(deckIndex) {
      if (deckIndex >= 0) {
        this.activeCollection = this.decks[deckIndex].cards;
      } else {
        this.activeCollection = this.collection;
      }
    }

    changeCardButtonMode(newMode) {
      this.buttonMode = newMode;
    }

    initiate() {
      this.setupTemplate(this.collection);
    }

    setupTemplate(list) {
      this.populateContainer();
      this.populateListButtons(list);
      this.populateActiveCard();
      this.populateDeckButtons();
    }

    // handle container html
    generateContainer() {
      return `
      <div class="collection-wrapper" style="
      --primary-color: ${this.config[0] || "white"};
      --secondary-color: ${this.config[1] || "red"};
      --accent-color: ${this.config[2] || "black"};
      ">
        <div class="deck-and-display">
          <div class="config-buttons">
            <button class="collection-button">Full Collection</button>
            <button class="option-button">List View</button>
            <button class="option-button">Card View</button>
          </div>
          <h3 class="deck-title">Decks</h3>
          <div class="deck-list"></div>
          <div class="card-display"></div>
        </div>
        <div class="card-list"></div>
      </div>
      `;
    }

    populateContainer() {
      this.Placeholder.innerHTML = this.generateContainer();
      const collectionButton = this.getFirst(
        "collection-button",
        "placeholder"
      );
      collectionButton.addEventListener("focus", (e) => {
        e.preventDefault();
        this.changeActiveCollection();
        this.changeActiveCard(0);
        this.setupTemplate(this.collection);
      });
    }

    // handle button html
    populateListButtons(list) {
      const target = this.getFirst("card-list", "placeholder");
      target.innerHTML = this.generateListButtons(list);
      const buttonList = this.getAll("card-list-button", "placeholder");
      Array.from(buttonList).forEach((button, index) => {
        button.addEventListener("focus", (e) => {
          e.preventDefault();
          this.changeActiveCard(index);
          this.populateActiveCard();
        });
      });
    }

    generateListButtons(buttonList) {
      return buttonList.map((button) => this.listButtonHtml(button)).join("");
    }

    listButtonHtml({ name, value = "*", cardType }) {
      return `
      <button class="card-list-button">${name}${
        cardType !== "Champion" ? ` (${value})` : ""
      }</button>
      `;
    }

    populateDeckButtons() {
      const target = this.getFirst("deck-list", "placeholder");
      target.innerHTML = this.generateDeckButtons(this.decks);
      const buttonList = this.getAll("deck-list-button", "placeholder");
      Array.from(buttonList).forEach((button, index) => {
        button.addEventListener("focus", (e) => {
          e.preventDefault();
          const newDeck = this.decks[index];
          this.changeActiveCollection(0);
          this.changeActiveCard(0);
          this.setupTemplate(newDeck.cards);
        });
      });
    }

    generateDeckButtons(list) {
      return list.map((button) => this.deckButtonHtml(button)).join("");
    }

    deckButtonHtml({ name }) {
      return `
      <button class="deck-list-button">${name}</button>
      `;
    }

    // handle card display html
    populateActiveCard() {
      const target = this.getFirst("card-display", "placeholder");
      target.innerHTML = this.activeCardHtml();
    }

    activeCardHtml() {
      const {
        attribute,
        value = "*",
        name,
        cardType,
        cp,
        strength,
        defense,
        text,
        specialType,
        specialText,
      } = this.activeCard;

      const colorClass = this.getColorClass(attribute);
      return `
      <div class="active-display-card ${colorClass}">
        ${
          cardType === "Champion"
            ? `
            <div class="active-display-cp">${cp}</div>
          `
            : `
            <div class="active-display-cp">${value}</div>
          `
        }
        ${
          cardType === "Champion"
            ? `
            <div class="active-display-value">
              <div>${strength}</div>
              <hr>
              <div>${defense}</div>
            </div>
          `
            : ""
        }
        <img src="https://i.postimg.cc/YqJZXVmt/playtest.png"></img>
      </div>
      <div class="card-text">
        <h2>${name}</h2>
        <p>${text || " "}</p>
        ${
          specialType &&
          `
          <div class="special-text ${this.getSpecialClass(specialType)}">
            <h3>${specialType}</h3>
            <p>${specialText}</p>
          </div>
        `
        }
      </div>
      `;
    }

    getColorClass(atr) {
      switch (atr) {
        case "Magic":
          return "card-magic";
          break;
        case "Power":
          return "card-power";
          break;
        case "Speed":
          return "card-speed";
          break;

        default:
          return "card-item";
      }
    }

    getSpecialClass(specialType) {
      switch (specialType) {
        case "Sleight":
          return "sleight-type";
          break;
        case "Form":
          return "form-type";
          break;
        case "Clash":
          return "clash-type";
          break;

        default:
          return "item-type";
      }
    }
  }

  new CollectionHandler(window.collectionCount).initiate();
}
