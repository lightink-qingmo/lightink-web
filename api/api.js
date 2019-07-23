import apiUtils from './apiUtils'

export const A_mainPage = (rid) => {
  return apiUtils.jsonGet(`/file/publicConfig/A_mainPage.json`, 'noLoad')
}