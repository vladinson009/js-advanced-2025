function getArticleGenerator(articles) {
  const content = document.getElementById('content');
  let i = 0;

  return closure;

  function closure() {
    if (i < articles.length) {
      const article = Object.assign(document.createElement('article'), {
        textContent: articles[i++],
      });
      content.appendChild(article);
    }
  }
}
