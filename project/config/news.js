import {_api_key, article_url, lang, returnLang} from './restconfig';

export async function getArticles(props) {
  try {
    console.log('lang' + lang);
    let article = await fetch(
      `${article_url}?language=${lang}&category=${props}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );
    let result = await article.json();

    article = null;
    // console.log('hello');
    // console.log(result.articles);
    return result.articles;
  } catch (error) {
    console.log(' couldnt fetch data from within the article');
    throw error;
  }
}
