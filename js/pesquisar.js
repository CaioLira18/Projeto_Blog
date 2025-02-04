function toggleSearch() {
  let searchInput = document.getElementById("search");
  if (searchInput.style.display === "none" || searchInput.style.display === "") {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
}

function searchArticles() {
  let input = document.getElementById("search").value.toLowerCase();
  let articles = document.querySelectorAll("article");
  
  articles.forEach(article => {
    let title = article.querySelector("h2").innerText.toLowerCase();
    if (title.includes(input)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });  
}