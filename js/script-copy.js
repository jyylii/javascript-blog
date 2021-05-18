// 'use strict';

// function titleClickHandler(event) {
//   event.preventDefault();
//   const clickedElement = this;
//   //console.log('Link was clicked!');

//   /* [DONE] remove class 'active' from all article links  */

//   const activeLinks = document.querySelectorAll('.titles a.active');

//   // console.log({activeLinks})

//   for (let activeLink of activeLinks) {
//     activeLink.classList.remove('active');
//   }

//   /* [DONE] add class 'active' to the clicked link */

//   //console.log('clickedElement:', clickedElement);
//   clickedElement.classList.add('active');

//   /* [DONE] remove class 'active' from all articles */

//   const activeArticles = document.querySelectorAll('.posts article.active');

//   for (let activeArticle of activeArticles) {
//     activeArticle.classList.remove('active');
//   }

//   /* [DONE] get 'href' attribute from the clicked link */

//   const articleSelector = clickedElement.getAttribute('href');
//   //console.log(articleSelector);

//   /* [DONE] find the correct article using the selector (value of 'href' attribute) */

//   const targetArticle = document.querySelector(articleSelector);
//   //console.log(targetArticle);

//   /* [DONE]add class 'active' to the correct article */

//   targetArticle.classList.add('active');
// }

// const optArticleSelector = '.post',
//   optTitleSelector = '.post-title',
//   optTitleListSelector = '.titles';
// optArticleTagsSelector = '.post-tags .list';

// function generateTitleLinks() {
//   /* remove contents of titleList */

//   const titleList = document.querySelector(optTitleListSelector);
//   // console.log('to tu to jest element (NODE):', titleList);

//   function clearMessages() {
//     titleList.innerHTML = '';
//   }
//   clearMessages();

//   /* [DONE] get the article id */
//   /* [DONE] for each article */
//   /* [DONE] find the title element */
//   /* [DONE] get the title from the title element */
//   /* [DONE] create HTML of the link */

//   const articles = document.querySelectorAll(optArticleSelector);
//   //let html = '';
//   //console.log('to jest html', html);
//   for (let article of articles) {
//     //console.log('to jest pojedynczy article:', article);
//     const articleId = article.getAttribute('id');
//     // console.log(articleId);
//     const articleTitle = article.querySelector(optTitleSelector).innerHTML;
//     // console.log('articleTitle to jest:', articleTitle);

//     const linkHTML =
//       '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//     //console.log('to jest linkHTML', linkHTML);

//     titleList.insertAdjacentHTML('beforeend', linkHTML);
//     // console.log(
//     //   'titleList.insertAdjacentHTML jest tu:',
//     //   titleList.insertAdjacentHTML('beforeend', linkHTML)
//     // );
//   }

//   /* ROZBIJAJAC TO NA CZYNNIKI PIERWSZE:
//     selektor okresla element w dokumencie, tu selektorem jest optTitleSelector, querySelector to metoda - tak znajdujemy dokumenty, querySelectror ma argument, ktory jest selektorem, article to czesc dokumentu, jest elememtem, dlatego mozemy na nim uzyc magicznych opcji w stylu querySelector, albo innerHTML

//     a oto rozpisanie tego:

//       const articleTitle = article.querySelector(optTitleSelector).innerHTML;

//     w inny sposob:

//     const articleHeaderElement = article.querySelector(optTitleSelector);
//     const articleTitle = articleHeaderElement.innerHTML; /*

//   /* insert link into titleList */

//   const links = document.querySelectorAll('.titles a');
//   //console.log('console.log od links', links);

//   for (let link of links) {
//     link.addEventListener('click', titleClickHandler);
//     // link.addEventListener("click", (event) => titleClickHandler(event));
//   }
// }

// generateTitleLinks();

// function generateTags() {
//   /* find all articles */

//   const articles = document.querySelectorAll(optArticleSelector);
//   /* START LOOP: for every article: */
//   /* find tags wrapper */
//   /* make html variable with empty string */
//   /* get tags from data-tags attribute */
//   /* split tags into array */
//   /* START LOOP: for each tag */
//   /* generate HTML of the link */
//   /* add generated code to html variable */
//   /* END LOOP: for each tag */
//   /* insert HTML of all the links into the tags wrapper */
//   /* END LOOP: for every article: */
// }

// generateTags();
