import axios from 'axios';

const getNews = (key) => axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${key}&pageSize=30&apiKey=eab0a7aaeb014132b5aedc975a6da88f`)
  .then((res) => Promise.resolve(res.data.articles))
  .catch(() => Promise.reject('anda sedang offline :('));

export default getNews;
