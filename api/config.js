const service = 'dev';
const apiDomain = service == 'dev' ? 'https://test.yuming.com' : 'https://mobile01.yuming.com';
const dynamicDomin = service == 'dev' ? 'https://dynamictest.yuming.com' : 'https://d1.yuming.com';
const appMgr = service == 'dev' ? '1500' : '1080'

export default  {
    apiDomain: apiDomain,
    dynamicDomin:dynamicDomin,
    errorImg:'',
    appMgr: appMgr
}