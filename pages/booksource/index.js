import Link from 'next/link'
// import Layout from '../'
import Layout from '../../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useRouter,withRouter} from 'next/router';
import React, { useState } from 'react';

import {BookSourceDescription} from '../../api/api'
const Booksource=({BookSourceData})=>{
  // 声明一个叫 "count" 的 state 变量
  const router = useRouter()
  console.log(router.query)
  const [count, setCount] = useState(0);
  return (
    <Layout title={'书源仓库'}>
      {JSON.stringify(BookSourceData)}
    </Layout>  
  );
}
Booksource.getInitialProps=async({ req,query})=> {
  const {data}=await BookSourceDescription(query.id)
  console.log(data)
  return {BookSourceData:data}
}
export default Booksource;