import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://qiita.com/',
  timeout: 10000,
});

function createHeader(token) {
  if (!token) {
    throw new Error('不正なトークンです');
  }
  return ({
    Authorization: `Bearer ${token}`
  });
}

export default {
  fetchArticles(page = 1, per_page = 100, query) {
    return instance.get('api/v2/items', { params: { page, per_page, query }})
  },
  fetchProfile(token) {
    const headers = createHeader(token);

    return instance.get('api/v2/authenticated_user', { headers });
  },
  fetchStock(token, user_id, page = 1, per_page = 10) {
    const headers = createHeader(token);
    const params = { page, per_page };
    if (!user_id) {
      throw new Error('user_idがありません');
    }

    return instance.get(`api/v2/users/${user_id}/stocks`, { headers, params })
<<<<<<< HEAD
  },
  fetchAccessToken(query) {
    return axios.post('https://qiita.com/api/v2/access_tokens', query)
=======
>>>>>>> flatlist
  }
}
