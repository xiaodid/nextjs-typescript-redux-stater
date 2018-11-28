import * as React from 'react'
import Layout from '../src/components/Layout/Layout'
import DuckImage from '../static/images/home/Duck.jpg'

const Home: React.FunctionComponent = () => (
  <Layout>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </Layout>
)

export default Home
