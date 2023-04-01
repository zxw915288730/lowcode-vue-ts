import { compile } from 'path-to-regexp'
import axios, { AxiosRequestConfig } from 'axios'
import { forEach } from 'lodash-es'

export interface ActionPayload {
  urlParams?: { [key: string]: any };
  data?: any;
  searchParams?: { [key: string]: any };
}

//第二步，确定参数
export function actionWrapper(url: string, commitName: string, config: AxiosRequestConfig = { method: 'get'}) {
  // 第一步 不管三七二十一，先返回一个函数和原来的函数处理一摸一样
  return async (context: any, payload: ActionPayload = {}) => {
    //第三部 写内部重复的逻辑
    const { urlParams, data, searchParams } = payload
    const newConfig = { ...config, data, opName: commitName }
    let newURL = url
    if (urlParams) {
      const toPath = compile(url, { encode: encodeURIComponent })
      newURL = toPath(urlParams)
      console.log(newURL)
    }
    if (searchParams) {
      const search = new URLSearchParams()
      forEach(searchParams, (value :any, key:any) => {
        search.append(key, value)
      })
      newURL += '?' + search.toString()
      // 另外一种方式
      // newURL += '?' + objToQueryString(searchParams)
    }
    const resp = await axios(newURL, newConfig)
    context.commit(commitName, { payload ,...resp.data})
    return resp.data
  }
}