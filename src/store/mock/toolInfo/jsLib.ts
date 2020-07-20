import { IToolItemProps } from '@scripts/types'
import { createImage } from '@scripts/utils'

export default [
  {
    name: 'unfetch',
    src: createImage({ text: 'unfetch' }),
    url: 'https://github.com/developit/unfetch',
  },
  {
    name: 'request',
    src: createImage({ text: 'request' }),
    url: 'https://github.com/request/request',
  },
  {
    name: 'compressorjs',
    src: createImage({ text: 'compressorjs' }),
    url: 'https://github.com/fengyuanchen/compressorjs',
  },
  {
    name: 'react-lazyload',
    src: createImage({ text: 'react-lazyload' }),
    url: 'https://github.com/twobin/react-lazyload',
  },
  {
    name: 'react-infinite-scroller',
    src: createImage({ text: 'react-infinite-scroller' }),
    url: 'https://github.com/danbovey/react-infinite-scroller',
  },
  {
    name: 'react-placeholder',
    src: createImage({ text: 'react-placeholder' }),
    url: 'https://github.com/buildo/react-placeholder',
  },
  {
    name: 'react-beautiful-dnd',
    src: createImage({ text: 'react-beautiful-dnd' }),
    url: 'https://github.com/atlassian/react-beautiful-dnd',
  },
] as IToolItemProps[]
