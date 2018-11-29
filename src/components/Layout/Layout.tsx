import * as React from 'react'
import Link from 'next/link'
import './Layout.scss'


const Layout: React.FunctionComponent = ({ children }) => (
  <div className='container text-center'>
    <h1>Next.js Typescript Redux Starter Kit</h1>
    <Link href='/'>
      <a>Home</a>
    </Link>
    {' · '}
    <Link href='/counter'>
      <a>Counter</a>
    </Link>
    {' · '}
    <Link href='/time'>
      <a>Time</a>
    </Link>
    <div className="layout__viewport">
      {children}
    </div>
  </div>
)

export default Layout
