import Link from 'next/link'
// import Layout from '../'
import Layout from '../components/Layout.js'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useRouter,withRouter} from 'next/router';
import {BookSourceDescription} from '../../api/api'

export default class extends React.Component{
  componentDidMount() {
    const { router } = this.props;
    // router.prefetch('/dynamic');
    console.log(router)
  }

  static async getInitialProps() {
    const {data}=await BookSource()
    return {BookSourceArray:data} 
    // return {}
  }
   render(){
     const {BookSourceArray} = this.props
    console.log(this)

     console.log(BookSourceArray)
     return (
      <Layout title={'书源仓库'}>
        
      </Layout>  
     )
   }
}