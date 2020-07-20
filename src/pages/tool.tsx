import React, { useState } from 'react'
import classNames from 'classnames'
import SlideToggle from 'react-slide-toggle'
import eases from 'eases'
import LazyLoad from 'react-lazyload'

import { IToolItemProps } from '@scripts/types'

import styles from '@styles/sass/page/tool.module.scss'

import { toolInfo } from '@store/mock'

import { LayoutMain } from '@components/layout'
import { Banner, LoadBackgroundImage } from '@components/common'

const { toolbox } = styles

const ToolList: React.FC<{
  data?: IToolItemProps[]
  calssName?: string
  style?: React.CSSProperties
}> = ({ data = [], calssName = '', style }) => {
  return (
    <div
      style={{
        padding: '0 15px',
        ...style,
      }}
      className={`row${calssName ? ` ${calssName}` : ''}`}
    >
      {data.map(({ name, url, src }) => {
        return (
          <div key={name} className="tac tool-item col-4 col-lg-3 col-xl-2">
            <a
              className="block"
              href={url || '#'}
              {...(!url && { onClick: (e) => e.preventDefault() })}
              target="_blank"
              title={name}
            >
              <dl className="bg-color-white p-tblr-md">
                <dt>
                  <LazyLoad
                    placeholder={
                      <img src="https://dummyimage.com/64x64/eee/eee" />
                    }
                  >
                    <LoadBackgroundImage src={src} />
                  </LazyLoad>
                </dt>
                <dd className="ellipsis color-dark-gray">{name}</dd>
              </dl>
            </a>
          </div>
        )
      })}
    </div>
  )
}

interface IToolProps {}

const Tool: React.FC<IToolProps> = () => {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return toolInfo.map(({ id }) => id)
  })
  const onToogleCollapse = (itemId) => {
    const newOpenIds = openIds.includes(itemId)
      ? openIds.filter((id) => !Object.is(itemId, id))
      : [...openIds, itemId]
    setOpenIds(newOpenIds)
  }
  return (
    <>
      <Banner />
      <LayoutMain
        pageTitleProps={{
          zhName: '推荐工具集',
          enName: 'Recommended toolset',
        }}
        className={toolbox}
      >
        <ul className="p-b-xl">
          {toolInfo.map(({ title, id, list }) => {
            const isOpen = openIds.includes(id)
            return (
              <li key={title}>
                <SlideToggle
                  duration={700}
                  // collapsed
                  interpolateOnReverse
                  easeCollapse={eases['bounceOut']}
                  easeExpand={eases['bounceOut']}
                  render={({ toggle, toggleState, setCollapsibleElement }) => {
                    return (
                      <>
                        <h3
                          className="bg-color-primary color-white cursign r-m-p"
                          onClick={() => {
                            toggle()
                            onToogleCollapse(id)
                          }}
                        >
                          <button
                            className={classNames(
                              `bg-color-transparent m-r-md caret-right vam`,
                              {
                                active: isOpen,
                              }
                            )}
                          ></button>
                          {title}
                        </h3>
                        <div ref={setCollapsibleElement}>
                          <ToolList data={list} />
                        </div>
                      </>
                    )
                  }}
                />
              </li>
            )
          })}
        </ul>
      </LayoutMain>
      <style jsx>{`
        h3 {
          padding: 10px 20px;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}

export default Tool
