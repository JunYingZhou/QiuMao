## mock 调试配置

- 使用 mock 接口的时候，接口务必加上 mock 前缀

- 调试完成后在请求接口处删除 mock 即可

- ```js
  Mock.mock(/mock\/goods\/goodAll/, 'post', () => {});
  ```

- ```js
  export const test = (data: TestParams): Promise<TestData> => post('/mock/goods/goodAll', data);
  ```

