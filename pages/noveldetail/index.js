// import Link from 'next/link'
// import Layout from '../'

import Layout from '../../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useRouter,withRouter} from 'next/router';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


import {BookSourceDescription,GetBookDetail} from '../../api/api'

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const Booksource=({cover,summary,catalogs})=>{
  // 声明一个叫 "count" 的 state 变量
  const router = useRouter()
  const {link} = router.query
  // console.log(router.query)

  const [count, setCount] = useState(0);
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <Layout title={'书源仓库'}>
      {/* {JSON.stringify(catalogs)} */}
        {
          catalogs.map((item,index)=>
            <Link 
              component="button"
              onClick={()=>{
                router.push(`/bookdetail?chapterName=${item.chapterName}&url=${item.chapterlink}`)
              }}
              key={index} className={classes.link}>
              {item.chapterName}
            </Link>
          )
        }
    </Layout>  
  );
}
Booksource.getInitialProps=async({ req,query})=> {
  // const router = useRouter()
  let {url} = query
  console.log(query,'link-----')
  // url = url.replace('http://qingmo.zohar.space','').split('?')
  url = url.replace('http://qingmo.zohar.space','')
  // let getUrl = url[0];
  // let getData = url[1]
  // console.log(getData,getUrl)

  // const {link} = router.query
  // console.log(router.query)
  // ?link=https://www.biyuwu.cc/html/87/87161/
  const {data}=await GetBookDetail(`${encodeURI(url)}`)
  console.log(data)
  return data;
}
export default withRouter(Booksource);