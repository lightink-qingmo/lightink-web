import Link from 'next/link'
// import Layout from '../'
import { useRouter } from 'next/router';

import Layout from '../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';


import {withRouter} from 'next/router'
import {BookSource} from '../api/api'

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