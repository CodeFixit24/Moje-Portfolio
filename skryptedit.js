document.addEventListener("DOMContentLoaded", function () {
  // Przyciski do personalizacji i dodawania sekcji
  const customizeButton = document.getElementById("customizePage");
  const closeCustomizerButton = document.getElementById("closeCustomizer");
  const customizerPanel = document.getElementById("customizer");

  // Inputy do personalizacji
  const bgColorInput = document.getElementById("bgColor");
  const textColorInput = document.getElementById("textColor");
  const headerColorInput = document.getElementById("headerColor");
  const headerFontSizeInput = document.getElementById("headerFontSize");
  const textFontSizeInput = document.getElementById("textFontSize");

  // Otwieranie i zamykanie customizera
  customizeButton.addEventListener("click", function () {
    customizerPanel.classList.remove("hidden");
  });

  closeCustomizerButton.addEventListener("click", function () {
    customizerPanel.classList.add("hidden");
  });

  // Zmiana tła strony w czasie rzeczywistym
  bgColorInput.addEventListener("input", function () {
    document.body.style.backgroundColor = bgColorInput.value;
  });

  // Zmiana koloru tekstu wszystkich edytowalnych elementów
  textColorInput.addEventListener("input", function () {
    const allTextElements = document.querySelectorAll(".editable-element");
    allTextElements.forEach(function (element) {
      element.style.color = textColorInput.value;
    });
  });

  // Zmiana koloru nagłówka
  headerColorInput.addEventListener("input", function () {
    const headers = document.querySelectorAll("header h1");
    headers.forEach(function (header) {
      header.style.color = headerColorInput.value;
    });
  });

  // Zmiana rozmiaru czcionki nagłówka
  headerFontSizeInput.addEventListener("input", function () {
    const headers = document.querySelectorAll("header h1");
    headers.forEach(function (header) {
      header.style.fontSize = `${headerFontSizeInput.value}px`;
    });
  });

  // Zmiana rozmiaru czcionki tekstu
  textFontSizeInput.addEventListener("input", function () {
    const allTextElements = document.querySelectorAll(".editable-element");
    allTextElements.forEach(function (element) {
      element.style.fontSize = `${textFontSizeInput.value}px`;
    });
  });

  // Dodawanie nowego nagłówka
  const addNewHeaderButton = document.getElementById("addNewHeader");
  addNewHeaderButton.addEventListener("click", function () {
    const newHeader = document.createElement("header");
    newHeader.className = "editable-element";
    newHeader.innerHTML = "<h1>Nowy Nagłówek</h1>";
    document.getElementById("editorArea").appendChild(newHeader);
  });

  // Dodawanie nowej sekcji
  const addNewSectionButton = document.getElementById("addNewSection");
  addNewSectionButton.addEventListener("click", function () {
    const newSection = document.createElement("section");
    newSection.className = "editable-element";
    newSection.textContent = "Nowa Sekcja";
    document.getElementById("editorArea").appendChild(newSection);
  });

  // Dodawanie nowego obrazu
  const addNewImageButton = document.getElementById("addNewImage");
  addNewImageButton.addEventListener("click", function () {
    const newImage = document.createElement("img");
    newImage.className = "editable-element";
    newImage.src = "https://via.placeholder.com/800x400";
    document.getElementById("editorArea").appendChild(newImage);
  });

  // Dodawanie nowej stopki
  const addNewFooterButton = document.getElementById("addNewFooter");
  addNewFooterButton.addEventListener("click", function () {
    const newFooter = document.createElement("footer");
    newFooter.className = "editable-element";
    newFooter.textContent = "Nowa Stopka";
    document.getElementById("editorArea").appendChild(newFooter);
  });
});
