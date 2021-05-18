'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  //console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  // console.log({activeLinks})

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  //console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  //console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  //console.log(targetArticle);

  /* [DONE]add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = '') {
  console.log('tutaj masz customSelector', customSelector);
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  // console.log('to tu to jest element (NODE):', titleList);

  function clearMessages() {
    titleList.innerHTML = '';
  }
  clearMessages();

  /* [DONE] get the article id */
  /* [DONE] for each article */
  /* [DONE] find the title element */
  /* [DONE] get the title from the title element */
  /* [DONE] create HTML of the link */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  console.log('to jest to wazne na ten moment articles:', articles);

  /* UWAGA: tu np. wyjdzie nam: 
  NodeList(4) [article#article-1.post.active, article#article-4.post, article#article-7.post, article#article-9.post] */

  //let html = '';
  //console.log('to jest html', html);
  for (let article of articles) {
    //console.log('to jest pojedynczy article:', article);
    const articleId = article.getAttribute('id');
    // console.log(articleId);
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    // console.log('articleTitle to jest:', articleTitle);

    const linkHTML =
      '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log('to jest linkHTML', linkHTML);

    titleList.insertAdjacentHTML('beforeend', linkHTML);
    // console.log(
    //   'titleList.insertAdjacentHTML jest tu:',
    //   titleList.insertAdjacentHTML('beforeend', linkHTML)
    // );
    // tym sposobem dla kazdego artykulu odczytujemy jego ID oraz title i wykorzystujemy zeby wygenerowac link dla kazdego artykulu
  }

  /* ROZBIJAJAC TO NA CZYNNIKI PIERWSZE: 
    selektor okresla element w dokumencie, tu selektorem jest optTitleSelector, querySelector to metoda - tak znajdujemy dokumenty, querySelectror ma argument, ktory jest selektorem, article to czesc dokumentu, jest elememtem, dlatego mozemy na nim uzyc magicznych opcji w stylu querySelector, albo innerHTML

    a oto rozpisanie tego: 

      const articleTitle = article.querySelector(optTitleSelector).innerHTML; 

    w inny sposob:
      
    const articleHeaderElement = article.querySelector(optTitleSelector);
    const articleTitle = articleHeaderElement.innerHTML; /*
 

  /* insert link into titleList */

  const links = document.querySelectorAll('.titles a');
  //console.log('console.log od links', links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
    // link.addEventListener("click", (event) => titleClickHandler(event));
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  /* START LOOP: for every article: */
  /* find tags wrapper */
  /* make html variable with empty string */
  /* get tags from data-tags attribute */

  /* split tags into array */
  /* START LOOP: for each tag */
  /* generate HTML of the link */
  /* add generated code to html variable */
  /* END LOOP: for each tag */
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */

  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    const titleList = article.querySelector(optArticleTagsSelector);
    //console.log(titleList);
    let html = '';
    //console.log('to jest zmienna html:', html);
    const articleTags = article.getAttribute('data-tags');
    //console.log('articleTags', articleTags);

    const articleTagsArray = articleTags.split(' ');
    //console.log(articleTagsArray);
    for (let tag of articleTagsArray) {
      // console.log('tu jest tag:', tag);

      const linkHTML = '<li><a href="#tag-' + tag + '">' + '&#8287;' + tag + '</a></li>';
      // console.log('to jest linkHTML', linkHTML);
      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }
    const links = article.querySelectorAll('data-tags');
    //console.log('console.log od links', links);
  }
}
generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  /* make new constant named "clickedElement" and give it the value of "this" */

  event.preventDefault();
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('to jest od tagLinks', tagLinks);

  /* START LOOP: for each active tag link */
  /* remove class active */
  /* END LOOP: for each active tag link */

  for (let tagLink of tagLinks) {
    tagLink.classList.remove('active');
  }
  // tagLink to NodeElement, poniewaz znalezlismy go z dokumentu

  /* find all tag links with "href" attribute equal to the "href" constant */

  const allTagLinksWithTheSameHref = document.querySelectorAll('a[href="' + href + '"]');

  //w nawiasie mam de facto 3 stringi - 1 string, 2 zmienna, ktora jest defacto stringiem i na koncu 3 string

  /* START LOOP: for each found tag link */
  /* add class active */
  /* END LOOP: for each found tag link */

  for (let tagLink of allTagLinksWithTheSameHref) {
    tagLink.classList.add('active');
  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */

  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
  for (let tagLink of tagLinks) {
    tagLink.addEventListener('click', tagClickHandler);
  }
}

addClickListenersToTags();
