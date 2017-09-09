import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://qiita.com/',
  timeout: 10000,
});

export default {
  fetchArticles(page = 1, size = 100, query) {
    return instance.get(`api/v2/items?page=${page}&per_page=${size}&query=${query}`)
  }
}
