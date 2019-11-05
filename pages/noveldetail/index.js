import Link from 'next/link'
// import Layout from '../'
import Layout from '../../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useRouter,withRouter} from 'next/router';
import React, { useState } from 'react';

import {BookSourceDescription,GetBookDetail} from '../../api/api'
const Booksource=({BookSourceData})=>{
  // 声明一个叫 "count" 的 state 变量
  const router = useRouter()
  const {link} = router.query
  // console.log(router.query)

  const [count, setCount] = useState(0);
  return (
    <Layout title={'书源仓库'}>
      {JSON.stringify(BookSourceData)}
    </Layout>  
  );
}
Booksource.getInitialProps=async({ req,query})=> {
  // const router = useRouter()
  let {url} = query
  console.log(query,'link-----')
  // url = url.replace('http://qingmo.zohar.space','').split('?')
  url = url.replace('http://qingmo.zohar.space','')
  let getUrl = url[0];
  let getData = url[1]
  console.log(getData,getUrl)
  // console.log(link.replace('http://qingmo.zohar.space',''))
  // const {link} = router.query
  // console.log(router.query)
  // ?link=https://www.biyuwu.cc/html/87/87161/
  try{
    const {data}=await GetBookDetail(url)
    console.log(data)
  }catch(e){
    console.log(e)
  }
  return {BookSourceData:'data'}
}
export default Booksource;