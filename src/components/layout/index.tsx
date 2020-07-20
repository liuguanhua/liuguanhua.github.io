import { useContext } from 'react'

import { CtxStore } from '@components/context'

import Footer from './Footer'
import NextHead, { INextHeadProps } from './NextHead'
import Sidebar from './Sidebar'

interface ILayoutProps extends INextHeadProps {}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { store } = useContext(CtxStore)
  const { bodyStyle } = store

  return (
    <main style={bodyStyle} className="pos-rel min-h-100 main-container">
      <NextHead />
      <Sidebar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout

export * from './LayoutMain'
