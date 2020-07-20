import { NextPage } from 'next'
import { useCallback, useState, useEffect } from 'react'
import { throttle } from 'throttle-debounce'
import dynamic from 'next/dynamic'

import styles from '@styles/sass/page/home.module.scss'

import { useEventListener } from '@components/hooks'
import { getWindowWidthHeight } from '@scripts/helper'

import { scrollToFixedLocate } from '@scripts/utils'
import { DELAY_TIME } from '@scripts/constant'

const ReactShareComponents = dynamic(() => import('react-share-components'), {
  ssr: false,
})

const { header_wrapper } = styles

const intervalTime = 0.2

const RenderFontBeat: React.FC<{
  children?: string
}> = ({ children = '' }) => {
  const [splitContent, setSplitContent] = useState<string[]>([])
  useEffect(() => {
    const list = children.split('')
    setSplitContent(list)
  }, [children])
  return (
    <>
      {splitContent.map((item, index) => (
        <span
          style={{
            animationDelay: `${index * intervalTime}s`,
          }}
          className="beat"
          key={index}
        >
          {item}
        </span>
      ))}
    </>
  )
}

export const Banner: NextPage<{
  isShowBtnDown?: boolean
  isFullHeight?: boolean
  className?: string
}> = ({ isShowBtnDown, isFullHeight, className = '' }) => {
  const [height, setHeight] = useState(isFullHeight ? 0 : 400)
  const handleBannerHeight = useCallback(
    throttle(DELAY_TIME, () => {
      if (!isFullHeight) return
      const { height } = getWindowWidthHeight()
      setHeight(height)
    }),
    []
  )

  useEffect(() => {
    handleBannerHeight()
  }, [])

  useEventListener('resize', handleBannerHeight)

  return (
    <header
      style={{
        height,
      }}
      className={`${header_wrapper} ${className}`}
    >
      <div className="pos-rel tac w-h-100">
        <div className="banner pos-rel z-1 w-h-100">
          <div className="banner-content color-white">
            <h2 className="font-weight-normal">
              <RenderFontBeat>欢迎来到我的个人主页</RenderFontBeat>
            </h2>
            <div>
              <h3 className="font-weight-normal">
                <RenderFontBeat>
                  感觉不错，就分享给你的小伙伴吧 ^_^！
                </RenderFontBeat>
              </h3>
              <ReactShareComponents />
            </div>
          </div>
        </div>
        <div className="banner-background pos-abs t-0 w-h-100"></div>
        {isShowBtnDown && (
          <button
            onClick={() => scrollToFixedLocate()}
            className="btn-down pos-rel z-1"
          >
            <span></span>
          </button>
        )}
      </div>
    </header>
  )
}
