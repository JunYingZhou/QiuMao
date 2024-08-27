/// <reference types="vite/client" />
interface ImportMetaEnv {
  /** 请求接口前缀 */
  readonly VITE_BASEURL: string;
  /** 浏览器标签title */
  readonly VITE_TITLE: string;
  /** 打包后的css前缀 */
  readonly VITE_CSS_PREFIX: string;
  /** 项目名称 */
  readonly VITE_PROJECT: string;
  /** 平台，true=phone，false=pc */
  readonly VITE_PHONE: string;
}

