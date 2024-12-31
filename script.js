document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("openSidebar");
    const closeButton = document.getElementById("closeSidebar");
    const offCanvas = document.getElementById("offCanvas");
  
    openButton.addEventListener("click", () => {
      offCanvas.classList.add("active");
    });
  
    closeButton.addEventListener("click", () => {
      offCanvas.classList.remove("active");
    });
  });
  