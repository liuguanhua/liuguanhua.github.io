import React, { useState, useEffect, useRef, useContext } from 'react'
import classNames from 'classnames'
import Lazyload from 'react-lazyload'
import { StickyContainer, Sticky } from '@components/react-sticky'
import InfiniteScroll from 'react-infinite-scroller'

import styles from '@styles/sass/page/works.module.scss'

import {
  findDataIndex,
  getStyle,
  paginationAfterData,
  isValidArray,
} from '@scripts/utils'
import { DEFAULT_PAGE_SIZE } from '@scripts/constant'
import { worksInfo } from '@store/mock'

import { CtxStore } from '../components/context'

import { Banner, SvgIcon, Loading } from '@components/common'
import { LayoutMain } from '@components/layout'

import { ReactComponent as SvgPaperPlane } from '@fonts/svg/merge/paper-plane.svg'

const { works_wrapper, works_list } = styles

const worksKeys = Object.keys(worksInfo)
const DEFAULT_ACTIVE_KEY = worksKeys[0]

const tabHeadInfo: {
  num: number
  title: string
  key: string
  isHot?: boolean
}[] = worksKeys.map((key) => {
  const { data, ...rest } = worksInfo[key]
  return {
    key,
    num: data.length,
    ...rest,
  }
})

const TabsWorksHead: React.FC<{
  onSwitchTab?: (key: string) => void
  style?: React.CSSProperties
}> = ({ onSwitchTab, style }) => {
  const { store } = useContext(CtxStore)
  const { bodyStyle } = store
  const elTabs = useRef<HTMLDivElement>(null)
  const [activeKey, setActiveKey] = useState(DEFAULT_ACTIVE_KEY)
  const [activeInfo, setActiveInfo] = useState({
    width: 0,
    offsetX: 0,
  })

  const { width, offsetX } = activeInfo

  const onSelected = (key) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      setActiveKey(key)
      const { offsetWidth, offsetLeft } = e.currentTarget
      setActiveInfo((v) => ({
        ...v,
        width: offsetWidth,
        offsetX: offsetLeft,
      }))
      onSwitchTab && onSwitchTab(key)
    }
  }

  const initialTabsActive = () => {
    const { current } = elTabs
    const index = findDataIndex({
      data: tabHeadInfo,
      key: 'key',
      target: activeKey,
    })
    if (Object.is(index, -1)) return
    const node = current?.querySelectorAll('a')[index]
    node?.click()
  }

  useEffect(initialTabsActive, [])

  return (
    <Sticky>
      {({ style, isSticky }) => {
        return (
          <div
            style={{
              ...style,
              ...(isSticky && {
                boxShadow: 'rgb(0, 0, 0,.24) 0px 0px 4px',
                ...bodyStyle,
              }),
            }}
            className="tac tabs-wrapper z-1"
          >
            <div ref={elTabs} className="inline-block pos-rel font-size-sm">
              {tabHeadInfo.map(({ title, num, key, isHot }) => (
                <a
                  key={key}
                  href="#"
                  onClick={onSelected(key)}
                  className={classNames('m-l-r-xl p-b-xxs', {
                    'color-primary active': Object.is(activeKey, key),
                  })}
                >
                  {title} ({' '}
                  <span className="font-family-georgia font-size-xxl">
                    {num}
                    {isHot && (
                      <span className="hot pos-rel">
                        <em
                          style={{
                            top: 4,
                          }}
                        />
                      </span>
                    )}
                  </span>{' '}
                  )
                </a>
              ))}
              <div
                style={{
                  width: width,
                  transform: `translateX(${offsetX}px)`,
                  transition: '.5s',
                }}
                className="tabs-active"
              ></div>
            </div>
          </div>
        )
      }}
    </Sticky>
  )
}

type TOnEventFunc = (event: React.MouseEvent) => void
type TOnMouseEventFunc = (e: React.MouseEvent, isTop?: boolean) => void

const WorkItem: React.FC<{
  item?: Dictionary
  onVisitContent?: TOnEventFunc
  onMouseIn?: TOnMouseEventFunc
  onMouseOut?: TOnMouseEventFunc
}> = ({ item = {}, onVisitContent, onMouseIn, onMouseOut }) => {
  const {
    category,
    desc,
    qrcodeImg,
    title,
    searchKeyword,
    visible,
    links,
  } = item

  const visitLinksProps = {
    href: links || '#',
    title,
    ...(links
      ? {
          target: '_blank',
        }
      : {
          onClick: onVisitContent,
        }),
  }

  return (
    <figure className="item">
      <a className="block" {...visitLinksProps}>
        <Lazyload
          once
          throttle={200}
          height={400}
          placeholder={
            <img
              // className="w-h-100" //勿设置
              src={`/static/placeholder-pic.png`}
              alt=""
            />
          }
        >
          <img
            className="photo"
            src={require('@images/' + item.imgSrc)}
            alt={title}
          />
        </Lazyload>
        <div
          className="mouse-move-layer t-0"
          onMouseEnter={(e) => onMouseIn && onMouseIn(e, true)}
          onMouseLeave={(e) => onMouseOut && onMouseOut(e, true)}
        />
        <div
          className="mouse-move-layer b-0"
          onMouseEnter={onMouseIn}
          onMouseLeave={onMouseOut}
        />
      </a>
      <figcaption className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div layout-align="space-between center">
          <span className="category">{category}</span>
          <a className="color-primary bdb-line-primary" {...visitLinksProps}>
            <span className="vam">访问链接</span>
            <SvgIcon className="m-l-xs" component={SvgPaperPlane} />
          </a>
        </div>
      </figcaption>
      {(qrcodeImg || searchKeyword) && (
        <div
          style={{
            display: visible ? 'block' : 'none',
          }}
          className="mask-root pos-abs t-0 w-h-100"
        >
          <div onClick={onVisitContent} className="mask-layer w-h-100" />
          {qrcodeImg ? (
            <img
              className="pos-abs tblr-0 m-auto"
              src={require(`@images/${qrcodeImg}`)}
              alt=""
            />
          ) : (
            <div className="app-dec pos-abs color-white font-size-md">
              进入微信APP-{'>'}点击发现-{'>'}选择小程序搜-{'>'}索 "
              <span className="color-primary"> {searchKeyword} </span>" 访问
            </div>
          )}
        </div>
      )}
    </figure>
  )
}

const TabsWorksContent: React.FC<{
  activeKey?: string
}> = ({ activeKey = '' }) => {
  const [info, setInfo] = useState<Dictionary>({
    data: [],
    hasNextPage: true,
    loading: true,
  })
  const { data, hasNextPage, loading } = info

  const onVisitContent = (item) => {
    return (e) => {
      setInfo((v) => ({
        ...v,
        data: data.map((v) => ({
          ...v,
          ...(Object.is(v.imgSrc, item.imgSrc) && {
            visible: !v.visible,
          }),
        })),
      }))
      e.preventDefault()
    }
  }

  const onMouseIn: TOnMouseEventFunc = (e, isTop) => {
    const currentDom = e.currentTarget
    const parentDom = currentDom.parentNode
    const domImg = parentDom?.querySelector<HTMLImageElement>('.photo')
    if (!domImg) return
    // const { clientY } = e
    // const { top, height } = currentDom.getBoundingClientRect()
    // const halfHeight = height / 2
    // const isTop = halfHeight > clientY - top //移入位置
    const marginTopVal = parseFloat(getStyle(domImg).marginTop)
    const hiddenHeight =
      (domImg.getBoundingClientRect().height || 0) -
      parseInt(getStyle(parentDom).maxHeight) //计算隐藏的高度

    const moveTime = 150 //值越大、移动越快，反之
    const moveSpeed = hiddenHeight / moveTime
    const restMovDistance =
      (isTop ? -marginTopVal : hiddenHeight + marginTopVal) * moveSpeed //移动的距离
    const time = (restMovDistance / hiddenHeight).toFixed(2) //剩余距离需要移动的时间

    domImg.style.cssText = `margin-top:${
      isTop ? 0 : -hiddenHeight
    }px;transition:margin-top ${time}s linear;`
  }

  const onMouseOut: TOnMouseEventFunc = (e) => {
    const currentDom = e.currentTarget
    const domImg = currentDom.parentNode?.querySelector<HTMLImageElement>(
      '.photo'
    )
    if (!domImg) return
    const marginTopVal = getStyle(domImg).marginTop
    domImg.style.cssText = `margin-top:${marginTopVal};`
  }

  const fetchData = (pageIndex: number = 1) => {
    const result = worksInfo[activeKey]
    if (!result) return
    paginationAfterData({
      query: {
        pageIndex,
      },
      data: result.data,
    })
      .then((res) => {
        const { data: list } = res
        const isFirstPage = Object.is(pageIndex, 1)
        setInfo((v) => ({
          ...v,
          ...res,
          data: isFirstPage ? list : [...data, ...list],
        }))
      })
      .catch(() => {
        setInfo((v) => ({
          ...v,
          hasNextPage: false,
        }))
      })
      .finally(() => {
        setInfo((v) => ({
          ...v,
          loading: false,
        }))
      })
  }

  useEffect(() => {
    setInfo((v) => ({ ...v, hasNextPage: true, loading: true }))
    fetchData()
  }, [activeKey])

  const loadFunc = (page) => {
    if (!hasNextPage) return
    fetchData(page)
  }

  return (
    <div className={works_list}>
      {loading ? (
        <Loading className="tac p-b-xxl" />
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={hasNextPage}
          loader={<Loading key="0" className="tac p-b-xxl" />}
        >
          {data.map((item) => {
            const { imgSrc } = item
            return (
              <WorkItem
                key={imgSrc}
                onVisitContent={onVisitContent(item)}
                onMouseIn={onMouseIn}
                onMouseOut={onMouseOut}
                item={item}
              />
            )
          })}
          {!hasNextPage &&
            isValidArray(data) &&
            data.length >= DEFAULT_PAGE_SIZE && (
              <div className="tac p-b-xxl">没有更多了⊙﹏⊙</div>
            )}
        </InfiniteScroll>
      )}
    </div>
  )
}

interface IWorksProps {}

const Works: React.FC<IWorksProps> = () => {
  const [activeKey, setActiveKey] = useState('')

  return (
    <section className={works_wrapper}>
      <Banner />
      <LayoutMain
        pageTitleProps={{
          zhName: (
            <>
              <span className="font-family-georgia">30</span>余个作品
            </>
          ),
          enName: 'more than 30 works',
        }}
      >
        <StickyContainer>
          <TabsWorksHead onSwitchTab={(key) => setActiveKey(key)} />
          {activeKey && <TabsWorksContent activeKey={activeKey} />}
        </StickyContainer>
      </LayoutMain>
    </section>
  )
}

export default Works
