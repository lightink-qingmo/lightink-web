import Link from 'next/link'
// import Layout from '../'
import Layout from '../components/Layout.js'
import {withRouter} from 'next/router'
import {A_mainPage} from '../api/api'

class Index extends React.Component {
  componentDidMount(){
  }
  static async getInitialProps() {
    const {data}=await A_mainPage()
    return  {InitTestData:data}
  }
   render(){
     const {InitTestData} = this.props
     return (
      <Layout title={123}>
        <ul>
          <li>
            <Link href='/blog?id=first' as='/blog/first'>
              <a>{JSON.stringify(InitTestData)}</a>
            </Link>
          </li>
          <li>
            <Link href='/blog?id=second' as='/blog/second'>
              <a>My second blog post111</a>
            </Link>
          </li>
          <li>
            <Link href='/blog?id=last' as='/blog/last'>
              <a>My last blog post222</a>
            </Link>
          </li>
        </ul>
      </Layout>  
     )
   }
}
export default Index