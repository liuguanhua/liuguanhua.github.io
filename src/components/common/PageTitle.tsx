import React from 'react'

export interface IPageTitleProps {
  zhName?: React.ReactNode
  enName?: React.ReactNode
}

export const PageTitle: React.FC<IPageTitleProps> = ({ zhName, enName }) => {
  return (
    <div className="tac">
      <style jsx>
        {`
          div {
            padding: 2% 0;
          }
          h1::after {
            position: absolute;
            bottom: -18px;
            left: 0;
            content: '';
            display: inline-block;
            width: 100%;
            border-bottom: 1px dotted var(--color-default-gray);
          }
          h2 {
            text-transform: capitalize;
          }
        `}
      </style>
      <h1 className="pos-rel font-weight-normal inline-block">{zhName}</h1>
      <h2 className="font-weight-normal font-family-niconne font-size-xl">
        {enName}
      </h2>
    </div>
  )
}
