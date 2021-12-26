import { IToolItemProps } from '@scripts/types'

import chromeExtension from './chromeExtension'
import iterm2 from './iterm2'
import mac from './mac'
import jsLib from './jsLib'

const generateUid = () => Math.random().toString(32).slice(2, 8)

export const toolInfo: {
  id: string
  title: string
  list: IToolItemProps[]
}[] = [
  {
    title: 'Chrome扩展（需备梯子）',
    list: chromeExtension,
  },
  {
    title: 'iterm2（终端利器）',
    list: iterm2,
  },
  {
    title: 'Mac软件',
    list: mac,
  },
  {
    title: 'js库',
    list: jsLib,
  },
].map((item) => ({
  id: generateUid(),
  ...item,
}))
