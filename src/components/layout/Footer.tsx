import { useEffect, useCallback, useState, useContext } from 'react'
import { throttle } from 'throttle-debounce'

import styles from '@styles/sass/frame/layout.module.scss'

import { CtxStore } from '@components/context'

import { SvgIcon } from '@components/common'

import { ReactComponent as SvgHome } from '@fonts/svg/side-operate/home.svg'
import { ReactComponent as SvgQrCode } from '@fonts/svg/side-operate/qrcode.svg'
import { ReactComponent as SvgAngleUp } from '@fonts/svg/side-operate/angle-up.svg'
import { scrollToFixedLocate } from '@scripts/utils'
import { DELAY_TIME } from '@scripts/constant'

import { useEventListener } from '../hooks'

const { side_fixed_operate, footer } = styles
const DEFAULT_SCROLL_HEIGHT = 150
const currentYear = new Date().getFullYear()

const SideOperate: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const handleScrollHeight = useCallback(
    throttle(DELAY_TIME, () => {
      const elHtml = document.querySelector('html')
      const scrollTop = elHtml!.scrollTop
      if (scrollTop > DEFAULT_SCROLL_HEIGHT) {
        return !visible && setVisible(true)
      }
      visible && setVisible(false)
    }),
    [visible]
  )

  useEffect(() => {
    handleScrollHeight()
  }, [])

  useEventListener('scroll', handleScrollHeight)

  return (
    <div className={`pos-fix z-2 ${side_fixed_operate}`}>
      <ul className="r-m-p">
        <li>
          <a href="/" title="返回首页">
            <span className="operate-icon">
              <SvgIcon size="large" component={SvgHome} />
            </span>
            <span className="operate-text">返回首页</span>
          </a>
        </li>
        <li title="扫一扫">
          <span className="operate-icon">
            <SvgIcon size="large" component={SvgQrCode} />
          </span>
          <span className="qr-code font-size-xs operate-text">
            <img className="vam" src={require('@images/qrcode.png')} />
            <em>手机或iPad浏览</em>
          </span>
        </li>
        <li
          onClick={() => {
            scrollToFixedLocate(0)
          }}
          title="返回顶部"
          style={{
            display: visible ? 'table' : 'none',
          }}
        >
          <span className="operate-icon">
            <SvgIcon size="large" component={SvgAngleUp} />
          </span>
          <span className="operate-text">返回顶部</span>
        </li>
      </ul>
    </div>
  )
}

const Footer: React.FC = () => {
  const { store } = useContext(CtxStore)
  const { bodyStyle } = store

  return (
    <>
      <footer
        style={{ padding: '8px 0', ...bodyStyle }}
        className={`w-100 l-b-0 tac bg-color-white pos-abs ${footer}`}
      >
        <h4
          style={{
            margin: 0,
          }}
          className="font-weight-normal"
        >
          ©<span>2016-{currentYear}</span>{' '}
          <a href="http://lgh930.com" target="_blank">
            lgh930.com
          </a>{' '}
          版权所有{' '}
          <a href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备2020101870号
          </a>
        </h4>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502006448"
        >
          <img
            style={{
              verticalAlign: 'top',
            }}
            src={require('@images/icon-record.png')}
          />
          粤公网安备 44030502006448号
        </a>
      </footer>
      <SideOperate />
    </>
  )
}

export default Footer
