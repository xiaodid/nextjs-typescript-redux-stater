import * as React from 'react'
import Layout from '../../../../src/components/Layout/Layout'

export interface CounterProps {
  counter: number
  increment: any
  doubleAsync: any
}

class Counter extends React.Component<CounterProps> {
  public increment = () => {
    this.props.increment({
      counter: 1,
    })
  }

  public doubleAsync = () => {
    this.props.doubleAsync({
      time: 2,
    })
  }

  public render() {
    const { counter } = this.props

    return (
      <Layout>
        <div style={{ margin: '0 auto' }} >
          <h2>Counter: {counter}</h2>
          <button className='btn btn-primary' onClick={this.increment}>
            Increment
          </button>
          {' '}
          <button className='btn btn-secondary' onClick={this.doubleAsync}>
            Double (Async)
          </button>
        </div>
      </Layout>
    )
  }
}

export default Counter
