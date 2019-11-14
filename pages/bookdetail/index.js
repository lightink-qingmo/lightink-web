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
import Paper from '@material-ui/core/Paper';


import {BookSourceDescription,GetBookDetail} from '../../api/api'

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const Booksource=({data,chapterName})=>{
  // 声明一个叫 "count" 的 state 变量
  const router = useRouter()
  const {link} = router.query
  // console.log(router.query)

  const [count, setCount] = useState(0);
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <Layout title={'书源仓库'}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {chapterName}
        </Typography>
        <Typography component="p" >
          <div dangerouslySetInnerHTML={{__html:data.text}}>
          </div>
        </Typography>
      </Paper>
    </Layout>  
  );
}
Booksource.getInitialProps=async({ req,query})=> {
  // const router = useRouter()
  let {url,chapterName} = query
  // url = url.replace('http://qingmo.zohar.space','').split('?')
  url = url.replace('http://qingmo.zohar.space','')
  const {data}=await GetBookDetail(`${encodeURI(url)}`)
  console.log(data)
  return {data,chapterName};
}
export default withRouter(Booksource);