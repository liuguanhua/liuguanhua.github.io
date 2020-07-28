import Head from 'next/head'
import { globalSelf } from '@scripts/utils'

const { name, publicPath } = globalSelf.g_config

export interface INextHeadProps {
  title?: string
}

const NextHead: React.FC<INextHeadProps> = ({ title = name }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta
        name="keywords"
        content="刘关化,web前端,前端工程师,简历,web前端个人简历,前端开发,前端简历,前端博客,热前端,设计,FE,github,求职,liuguanhua.github.io,liuguanhua"
      />
      <meta
        name="description"
        content="多年的前端开发经验,奋斗在前端路上的一个技术人员"
      />
      <meta name="author" content="刘关化,前端,简历" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        href={`${publicPath}static/css/bootstrap-grid.min.css`}
        rel="stylesheet"
      ></link>
      {/* <script src={`${publicPath}config.js?${BUILD_ID}`}></script> */}
    </Head>
  )
}

export default NextHead
