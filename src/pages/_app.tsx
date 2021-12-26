import { useReducer } from 'react'
import { NextComponentType } from 'next'
import { isString } from 'util'
import App, { AppProps, AppContext, AppInitialProps } from 'next/app'

import '@styles/sass/global.scss'
import 'react-share-components/dist/react-share-components.css'

import { CtxStore } from '@components/context'

import Layout from '@components/layout'

const initialState = { bodyStyle: {} }

function reducer(state, action) {
  const { type } = action
  if (!isString(type)) return {}
  switch (action.type) {
    case 'global':
      return { ...state, ...action.payload }
    default:
      console.warn(`方法${action.type}无效`)
  }
}

const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
  ...rest
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CtxStore.Provider
      value={{
        store: state,
        dispatch,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CtxStore.Provider>
  )
}

CustomApp.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext
  const appProps = await App.getInitialProps(appContext)
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  return { ...appProps, ...pageProps }
}

export default CustomApp
