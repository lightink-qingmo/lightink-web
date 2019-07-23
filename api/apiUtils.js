import axios from 'axios';
// import {Toast} from 'antd-mobile'
import api from './config'
// console.log(api,'apiBaseUrl')
const APIUtils = {
  base: api.apiDomain,
  jsonBaseUrl:api.dynamicDomin,
  /**
   * 公用post请求
   * @param url
   * @param params
   * @returns {Promise.<TResult>}
   */
  commonPost: (url, params, type) => {
    let time = new Date().getTime()
    if (type !== 'noLoad') {
      //Toast.loading('正在加载...', 0, null);
    }
    if(Object.prototype.toString.call(params) !== '[object Object]'){
      params = {}
    }
    return axios({
      url: APIUtils.base+url,
      method: 'post',
      data: params,
      timeout: 6000,
      responseType: 'json',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    }).then(res => {
      let time1 = new Date().getTime()
      console.log(url+'接口耗时======='+(time1-time)/1000+'秒')
      console.log('Toast',type)
      if (type !== 'noLoad') {
        //Toast.hide();
      }
      return res
    }).catch( error => {
      //Toast.info('网络连接失败，请检查您的网络设置并稍后再试', 2, null, false)
      console.log(error,'=========')
    })
  },
  /**
   * 公用get请求
   * @param url
   * @returns {Promise.<TResult>}
   */
  commonGet: (url,params,type='')=>{
    // Toast.loading('正在加载...', 0, null);
    let time = new Date().getTime()
    if (type !== 'noLoad') {
      //Toast.loading('正在加载...', 0, null);
    }
    return axios({
      url: APIUtils.base+url,
      responseType: 'json',
      params:params,
      timeout: 6000,
    }).then(res => {
      let time1 = new Date().getTime()
      console.log(url+'接口耗时======='+(time1-time)/1000+'秒')
      if (type !== 'noLoad') {
        //Toast.hide();
      }
      // console.log(url+'接口返回数据：',APIUtils.XML2jsobj(res.data.documentElement))
      // return APIUtils.XML2jsobj(res.data.documentElement)
      return res
    }).catch( error =>{
      //Toast.info('网络连接失败，请检查您的网络设置并稍后再试', 2, null, false)
      console.log(error)
    })
  },
  jsonGet: async(url, type) => {
    if (type !== 'noLoad') {
      //Toast.loading('正在加载...', 0, null);
    }
    let Opt = {
      url: APIUtils.jsonBaseUrl + url,
      responseType: 'json',
      timeout: 6000,
    }
    const res = await axios(Opt);
    const statusCode = res.status;
    if(statusCode == 200) {
      const ReqData = res.data
        if(typeof res.data === 'string') {
            try {
              ReqData = JSON.parse(res.data);
            } catch(err) {
                console.error(err);
            }
        }
        return ReqData
        if(ReqData.code !=='0') {
            return ReqData;
        }
        if(ReqData.code =='0') {
            return  ReqData.data;
        } else {
            console.log(url,'请求成功 但code不为1', 'error:' + res.data);
        }
    } else {
        console.error(`statusCode:${statusCode}, request ${url} failed`);
        return;
    }
    // return axios({
    //   url: APIUtils.jsonBaseUrl + url,
    //   responseType: 'json',
    //   timeout: 6000,
    // }).then(res => {
    //   console.log(url + '接口返回数据========', res);
    //   //Toast.hide();
    //   return res;
    // }).catch(error => {
    //   console.log(error);
    //   if (type !== 'noLoad') {
    //     //Toast.hide();
    //   }
    //   //Toast.info('网络连接失败，请检查您的网络设置并稍后再试', 2, null, false)
    //   return null;
    // })
  }
}
export default APIUtils
