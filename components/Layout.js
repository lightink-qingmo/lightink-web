import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

import '../static/base.less'

// export default ({ children, title = 'test' }) => (
//   <div>
//     <Head>
//       <title>{ title }</title>
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//     </Head>
//     <Header />
//     <div className="container">
//     { children }
//     </div>
//     <Footer />
//   </div>
// )


class Layout extends React.Component {
  render(){
    const {children, title} = this.props
    console.log(title,'title')
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        <div className="container">
          { children }
        </div>
        <Footer />
      </div>
    )
  }
}
export default Layout