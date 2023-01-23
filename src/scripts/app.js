import './Component/container';
import getNews from './data/data';

const main = () => {
  const container = document.querySelector('article-container');
  const renderPage = async (key = 'general') => {
    try {
      const newsData = await getNews(key);
      container.innerHTML = '';
      container.data = newsData;
    } catch (error) {
      alert(error);
    }
  };
  const btnEvent = () => {
    const btn = document.querySelectorAll('.nav-link');
    const title = document.querySelector('.title');
    btn.forEach((el) => {
      el.addEventListener('click', (e) => {
        renderPage(e.target.dataset.id);
        title.innerText = e.target.innerText;
      });
    });
  };
  window.addEventListener('load', () => {
    renderPage();
    btnEvent();
  });
};
export default main;
