const service = 'dev';
const apiDomain = service == 'dev' ? 'http://qingmo.zohar.space' : 'http://qingmo.zohar.space';
const dynamicDomin = service == 'dev' ? 'http://qingmo.zohar.space' : 'http://qingmo.zohar.space';
const appMgr = service == 'dev' ? '1500' : '1080'

export default  {
    apiDomain: apiDomain,
    dynamicDomin:dynamicDomin,
    errorImg:'',
    appMgr: appMgr
}