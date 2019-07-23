import axios from 'axios'
// import store from '@/store'

axios.interceptors.request.use(config => {
  //过滤配置文件请求 
  if(!(config.method==='get'&&config.responseType==='json')){
    // config.headers['accessToken'] = getCookie('accessToken')||getAppCookieData['accessToken']||'+NEflO3uj02MBMS5Y1lDrWp6h2nk+NkrJvSsGhwGPyc85AgcfvVL/idZH+OQJsNjpWZxkURepLZwVvTh0YLQbbEerLeyDPyOe9oeo2k7VO7a4CF7I1D5lSBDqdemhNQ3QrYHN8x6UsvQvy9YUfRHPmAejmyGO51w3mUcCq8Y9tuP5owbRlSTKQ=='
    // config.headers['appMode'] = getCookie('appMode')||getAppCookieData['appMode']||'PROD'
    // config.headers['appMuId'] = getCookie('appMuId')||getAppCookieData['appMuId']||'ADAB1A6D54DD4B01B730D238CA415DB8'
    // config.headers['appId'] = getCookie('appId')||getAppCookieData['appId']||'qz2YTO0QSBWQS1X90V304X024D7X30738'
    // config.headers['appName'] = getCookie('appName')||getAppCookieData['appName']||'QZA'
    // config.headers['appVersion'] = getCookie('appVersion')||getAppCookieData['appVersion']||'2.0.0'
    // config.headers['source'] = getCookie('source')||getAppCookieData['source']||'301'
    // console.log('accessToken:=>',getCookie('accessToken'))
    // console.log('appMuId:=>',getCookie('appMuId'))
    // console.log('appId:=>',getCookie('appId'))
  }
  return config
}, error => {
    console.log(error) // for debug
    Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
    response => {
        const {code,msg} = response.data
        if ((code>=2001&&code<=2003)||(code>=2008&&code<=2010)) {
            //Token失效
        }else if(code!=='1'){
            Toast.info(msg)
        }
        return response.data
        // return Promise.resolve(response)
    },
    error => {
        console.log('err' + error)// for debug
        return Promise.reject(error)
    }
)
