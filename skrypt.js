// Pobranie elementów strony
const customizer = document.getElementById("customizer");
const addElementBtn = document.getElementById("add-element-btn");
const dynamicSection = document.getElementById("dynamic-section");
const elementType = document.getElementById("element-type");
const customizerButton = document.querySelector(".customizer-button");
const closeBtn = document.querySelector(".close-btn");

// Eventy dla otwierania i zamykania customizera
customizerButton.addEventListener("click", () => {
  customizer.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  customizer.classList.remove("show");
});

// Dodawanie nowego elementu
addElementBtn.addEventListener("click", () => {
  let element;

  switch (elementType.value) {
    case "header":
      element = document.createElement("h2");
      element.textContent = "Nowy Nagłówek";
      break;
    case "paragraph":
      element = document.createElement("p");
      element.textContent = "Nowy Akapit dodany dynamicznie.";
      break;
    case "image":
      element = document.createElement("img");
      element.src = ""; // Docelowo załaduj plik z komputera
      element.alt = "Nowy obrazek";
      break;
    case "button":
      element = document.createElement("button");
      element.textContent = "Nowy Przycisk";
      break;
    case "link":
      element = document.createElement("a");
      element.href = "#";
      element.textContent = "Nowy Link";
      break;
    case "list":
      element = document.createElement("ul");
      const listItem = document.createElement("li");
      listItem.textContent = "Nowa pozycja listy";
      element.appendChild(listItem);
      break;
    case "video":
      element = document.createElement("video");
      element.controls = true;
      const source = document.createElement("source");
      source.src = ""; // Docelowo załaduj plik wideo
      source.type = "video/mp4";
      element.appendChild(source);
      break;
  }

  element.classList.add("new-section");
  dynamicSection.appendChild(element);
});

// Stylizacja globalna - Kolory tła i tekstu
document
  .getElementById("bg-color-picker")
  .addEventListener("input", function () {
    document.body.style.backgroundColor = this.value;
  });

document
  .getElementById("text-color-picker")
  .addEventListener("input", function () {
    document.body.style.color = this.value;
  });

// Stylizacja czcionki i rozmiaru tekstu
document
  .getElementById("font-family-select")
  .addEventListener("input", function () {
    document.body.style.fontFamily = this.value;
  });

document
  .getElementById("font-size-range")
  .addEventListener("input", function () {
    document.body.style.fontSize = `${this.value}px`;
  });

// Animacje elementów
document
  .getElementById("animation-select")
  .addEventListener("input", function () {
    const selectedAnimation = this.value;

    dynamicSection.childNodes.forEach((node) => {
      node.style.animation = "none"; // Zresetuj animację

      switch (selectedAnimation) {
        case "fade-in":
          node.style.animation = "fade-in 0.5s forwards";
          break;
        case "slide-up":
          node.style.animation = "slide-up 0.5s forwards";
          break;
        case "rotate":
          node.style.animation = "rotate 1s forwards";
          break;
        default:
          node.style.animation = "none";
      }
    });
  });

// Reset funkcji
document.getElementById("reset-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.color = "#000000";
  document.body.style.fontFamily = "Arial";
  document.body.style.fontSize = "16px";
});
