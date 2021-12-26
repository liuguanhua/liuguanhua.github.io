export const SMALL_SCREEN_WIDTH = 769

/**
 * 获取窗体可视宽高
 * @returns
 */

export const getWindowWidthHeight = () => {
  const docEle = document.documentElement
  const docBody = document.body
  return {
    width: window.innerWidth || docEle.clientWidth || docBody.clientWidth,
    height: window.innerHeight || docEle.clientHeight || docBody.clientHeight,
  }
}

export const isSmallScreen = () =>
  getWindowWidthHeight().width < SMALL_SCREEN_WIDTH
