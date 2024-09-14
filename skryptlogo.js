document.getElementById("logoForm").addEventListener("input", updateLogo);
document.getElementById("resetLogo").addEventListener("click", resetLogo);

function updateLogo() {
  const logoText = document.getElementById("logoText").value || "Logo";
  const iconClass = document.getElementById("iconSelect").value;
  const fontSize = document.getElementById("fontSize").value + "px";
  const color = document.getElementById("color").value;
  const fontFamily = document.getElementById("fontFamily").value;

  const logoPreview = document.getElementById("logo-preview");
  logoPreview.innerHTML = `<span class="${iconClass}" style="font-size: ${fontSize}; color: ${color}; font-family: ${fontFamily};"></span> ${logoText}`;
}

function resetLogo() {
  document.getElementById("logoText").value = "";
  document.getElementById("fontSize").value = 30;
  document.getElementById("color").value = "#e60000";
  document.getElementById("fontFamily").value = "Arial";
  document.getElementById("iconSelect").value = "fa-star";
  updateLogo();
}

// Inicjalizacja z domyślnym widokiem
window.onload = updateLogo;
