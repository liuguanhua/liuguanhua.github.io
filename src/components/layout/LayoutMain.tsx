import { useContext } from 'react'

import { IPageTitleProps, PageTitle } from '../common'

import { CtxStore } from '@components/context'

interface ILayoutMainProps {
  pageTitleProps?: IPageTitleProps
  className?: string
  style?: React.CSSProperties
}

export const LayoutMain: React.FunctionComponent<ILayoutMainProps> = ({
  pageTitleProps,
  children,
  className = '',
  style,
}) => {
  const { store } = useContext(CtxStore)
  const { bodyStyle } = store

  return (
    <section
      style={{
        marginBottom: -12,
        paddingBottom: 12,
        ...style,
        ...bodyStyle,
      }}
      className={`pos-rel bg-color-light-gray${
        className ? ` ${className}` : ''
      }`}
    >
      <PageTitle {...pageTitleProps} />
      <div className="layout-container">{children}</div>
    </section>
  )
}
