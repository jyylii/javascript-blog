"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  // console.log({activeLinks})

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* [DONE] add class 'active' to the clicked link */

  //console.log('clickedElement:', clickedElement);
  clickedElement.classList.add("active");

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE]add class 'active' to the correct article */

  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
  // link.addEventListener("click", (event) => titleClickHandler(event));
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  console.log("to tu to jest element (NODE):", titleList);

  function clearMessages() {
    titleList.innerHTML = "";
  }
  clearMessages();

  /* for each article */
  /* get the article id */
  /* find the title element */
  /* get the title from the title element */
  /* create HTML of the link */
  /* insert link into titleList */
}

generateTitleLinks();
