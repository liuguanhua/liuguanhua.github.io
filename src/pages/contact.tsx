import React from 'react'

import { Banner, Modal, SvgIcon } from '@components/common'
import { useIsVisible } from '@components/hooks'
import { LayoutMain } from '@components/layout'

import { ReactComponent as SvgEmail } from '@fonts/svg/contact/email.svg'
import { ReactComponent as SvgMoblie } from '@fonts/svg/contact/moblie.svg'
import { ReactComponent as SvgWeChat } from '@fonts/svg/contact/wechat.svg'

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const { isShow, showContent, hideContent } = useIsVisible()
  return (
    <>
      <Banner />
      <LayoutMain
        pageTitleProps={{
          zhName: '吐槽、想法、建议，欢迎交流',
          enName: 'tucao, ideas, suggestions, welcome to exchange',
        }}
      >
        <ul className="row">
          <li className="col-6 col-lg-4">
            <a href="tel://13751073203">
              <SvgIcon component={SvgMoblie} />
              <span>137-5107-3203</span>
            </a>
          </li>
          <li onClick={showContent} className="col-6 col-lg-4 cursign">
            <SvgIcon component={SvgWeChat} />
            <span>微信</span>
          </li>
          <li className="col-6 col-lg-4">
            <a href="mailto:lghayy@foxmail.com">
              <SvgIcon component={SvgEmail} />
              <span>lghayy@foxmail.com</span>
            </a>
          </li>
        </ul>
        <Modal
          wrapClassName="tac"
          onClose={hideContent}
          visible={isShow}
          style={{
            display: 'inline-block',
          }}
        >
          <img className="vam" src={require(`@images/wx-qrcode.png`)} alt="" />
        </Modal>
        {/* <div id="SOHUCS"></div>
        <script
          charSet="utf-8"
          type="text/javascript"
          src="//cy-cdn.kuaizhan.com/upload/changyan.js"
        ></script>
        <script type="text/javascript">
          {IS_CLIENT &&
            window.changyan.api.config({
              appid: 'cyuXSRhNO',
              conf: 'prod_df1e4dc305ccfba8450955314e211ab5',
            })}
        </script> */}
      </LayoutMain>
      <style jsx>{`
        li {
          margin-bottom: 2%;
        }
        span {
          vertical-align: middle;
          margin-left: var(--space-sm);
        }
      `}</style>
    </>
  )
}

export default Contact
