import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://qiita.com/',
  timeout: 10000,
});

export default {
  fetchArticles(page = 1, per_page = 100, query) {
    return instance.get('api/v2/items', { params: { page, per_page, query }})
  }
}
