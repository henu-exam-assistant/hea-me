import axios from 'axios'
import { Config } from '../config'

export const CommonAjax = (option: AjaxOption) => {
  const dataCommon = {
    url: Config.apiUrl + option.path,
    method: option.method || 'get',
    headers: option.headers,
  }

  return new Promise<AjaxResult>((resolve, reject) => {
    axios(dataCommon)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
