import * as React from 'react'
// import { NextContext } from 'next'
import Layout from '../../../components/Layout/Layout'
import { fetchCreator } from '../../../utils/fetch'

interface TimeProps {
  serverTime: string
}

const getServerTime = fetchCreator('http://localhost:3003/getservertime')

class Time extends React.PureComponent<TimeProps> {
  public static async getInitialProps(/* context: NextContext */) {
    const time = await getServerTime()

    return {
      serverTime: time.serverTime
    }
  }

  public componentDidMount() {

  }

  public render() {
    const { serverTime } = this.props
    return (
      <Layout>
        <p>
          {
            `Server Time: ${serverTime}`
          }
        </p>
      </Layout>
    )
  }
}

export default Time
