import React from 'react'
import Layout from '../components/Layout.js'
import {withRouter} from 'next/router'

// const Content = withRouter((props)=>{
//     <div>
//         <h1>
//             {props.router.query.title}
//         </h1>
//     </div>
// })
export default () => (
    <Layout title='Contact us'>
        <div>
            <h1>My  blog post</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </Layout>
)