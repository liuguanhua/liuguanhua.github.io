declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>

  const src: string
  export default src
}

declare interface Window {
  g_config: any
  changyan: any
}

declare namespace NodeJS {
  interface Global {
    g_config: any
  }
}

interface Dictionary<T = any> {
  [index: string]: T
}

type DictionaryArray<T = any> = Dictionary<T>[]

declare const BUILD_ID: string

declare const IS_CLIENT: string
