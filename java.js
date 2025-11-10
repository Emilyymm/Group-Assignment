


const newsSection = document.getElementById("news");
const toggleButton = document.getElementById("toggle-news");

toggleButton.addEventListener("click", () => {
    if (newsSection.style.display === "none") {
        newsSection.style.display = "block";
        toggleButton.textContent = "Hide News";
    } else {
        newsSection.style.display = "none"; 
        toggleButton.textContent = "Show News";
    }
});

