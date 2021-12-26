import React, { Dispatch } from 'react'

export const CtxStore = React.createContext<{
  store: Dictionary
  dispatch: Dispatch<any>
}>({
  store: {},
  dispatch: () => {},
})
