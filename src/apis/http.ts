import axios from 'axios';

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 3000,
});

/**
 * POST请求
 * @param url url后缀
 * @param data 请求参数
 */
export const post = (url: string, data: any): Promise<any> => {
  return new Promise((resolve) => {
    myAxios
      .post(url, data)
      .then((res) => {
        const { data = {} } = res || {};
        resolve(data);
      })
      .catch((err) => {
        console.log('qmerr', err);
      });
  });
};
