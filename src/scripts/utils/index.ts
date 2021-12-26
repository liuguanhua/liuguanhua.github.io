import store from 'store'
import { isObject, isArray } from 'util'
import { Random } from 'mockjs'

import { getWindowWidthHeight } from '../helper'
import { DEFAULT_PAGE_SIZE, PARAMS_ERROR } from '../constant'

require('@root/config')

export const globalSelf: Window | NodeJS.Global = (() =>
  typeof window !== 'undefined' ? window : global)()

/**
 * 生成一定长度的数组
 * @param {number} [num=0]
 */
export const generateNumList = (num: number = 0) => [...Array(num).keys()]

/**
 * 滚动到具体位置
 * @param {number} [scrollHeight=getWindowWidthHeight().height]
 */
export const scrollToFixedLocate = (
  scrollHeight: number = getWindowWidthHeight().height
) => {
  window.scrollTo({
    top: scrollHeight,
    behavior: 'smooth',
  })
}

export const isValidArray = (data?: any): boolean =>
  isArray(data) && Boolean(data.length)

export const getStorage = (
  key: string,
  isDefaultEmptyObject: boolean = true
) => {
  const storeData = IS_CLIENT ? store.get(key) : {}
  return storeData || (isDefaultEmptyObject ? {} : void 0)
}

export const setStorage = <T>(
  key: string,
  value: T,
  isReassign: boolean = false
) => {
  if (isObject(value)) {
    value['timestamp'] = +new Date()
    if (!isReassign) {
      const oldStoreData = getStorage(key)
      value = {
        ...oldStoreData,
        ...value,
      }
    }
  }
  store.set(key, value)
}

type TFindDataIndexProps<T> = T extends object
  ? {
      data?: T[]
      target?: any
      key: keyof T
    }
  : {
      data?: any[]
      target?: any
      key?: undefined
    }

/**
 * 查找集合索引
 * @template T
 * @param {TFindDataIndexProps<T>} {
 *   data = [],
 *   target,
 *   key,
 * }
 */
export const findDataIndex = <T>({
  data = [],
  target,
  key,
}: TFindDataIndexProps<T>) =>
  data.findIndex((item) => Object.is(isObject(item) ? item[key] : item, target))

/**
 * 获取样式
 * @param {*} ele
 * @returns {CSSStyleDeclaration}
 */
export const getStyle = (ele): CSSStyleDeclaration => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null)
  }
  return ele.currentStyle
}

interface IDoPaginationOptionProps {
  query?: { pageIndex?: number; pageSize?: number }
  data?: any[]
}
/**
 * 对数据进行分页
 * @param {*} [query={}]
 * @param {*} [data=[]]
 * @returns
 */
export const willDataDoPagination = ({
  query = {},
  data = [],
}: IDoPaginationOptionProps = {}) => {
  const { pageIndex: pIndex = 1, pageSize: pSize = DEFAULT_PAGE_SIZE } = query
  const pageIndex = Math.floor(pIndex)
  const pageSize = Math.floor(pSize)
  const totalCount = data.length
  data = isArray(data) ? data : []
  try {
    if (isNaN(pageIndex) || isNaN(pageSize)) {
      throw new Error(PARAMS_ERROR)
    }
  } catch (error) {
    return {
      data: [],
      totalCount,
      pageTotal: 0,
      pageSize: DEFAULT_PAGE_SIZE,
      pageIndex: 1,
      hasPrevPage: false,
      hasNextPage: false,
      error,
    }
  }
  let limitData: any[] = []
  const totalPage = Math.ceil(totalCount / pageSize)
  const hasNextPage = pageIndex < totalPage
  if (hasNextPage || Object.is(pageIndex, totalPage)) {
    const sliceIndex = (pageIndex - 1) * pageSize
    limitData = data.slice(sliceIndex, pageSize * pageIndex)
  }
  const hasLength = Boolean(totalCount)
  return {
    data: limitData,
    totalCount,
    pageTotal: totalPage,
    pageSize: pageSize,
    pageIndex: pageIndex,
    hasPrevPage: hasLength && pageIndex > 1,
    hasNextPage: hasLength && hasNextPage,
  }
}

export const paginationAfterData = (options: IDoPaginationOptionProps) => {
  return new Promise<any>((resolve, reject) => {
    const info = willDataDoPagination(options)
    return info.error ? reject(info.error) : resolve(info)
  })
}

export const createImage = (
  option: {
    width?: number
    height?: number
    bgColor?: string
    text?: string
  } = {}
) => {
  const {
    width = 100,
    height = 200,
    bgColor = Random.color(),
    text = Random.word(1),
  } = option
  return Random.image(`${width}x${height}`, bgColor, '#fff', text)
}
