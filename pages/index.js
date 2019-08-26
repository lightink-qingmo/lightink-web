import Link from 'next/link'
// import Layout from '../'
import { useRouter } from 'next/router';

import Layout from '../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import {withRouter} from 'next/router'
import {BookSource} from '../api/api'
import Styles from './index.less'

class Index extends React.Component {
  componentDidMount(){
  }
  static async getInitialProps() {
    const {data}=await BookSource()
    return {BookSourceArray:data} 
  }
   render(){
     const {BookSourceArray} = this.props
     return (
      <Layout title={'青墨小说📚'}>
        <TextField
          id="standard-search"
          label="搜索"
          type="search"
          className={Styles.textField}
          margin="normal"
        />
        <button className={Styles.SearchBtn}>test</button>
        <ul>
          {
            BookSourceArray&&BookSourceArray.map((item,index)=>{
              return(
                <li key={index}>
                  <Link href={`/booksource/${item.code}`} >
                    <a>{item.author}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Layout>  
     )
   }
}
export default Index