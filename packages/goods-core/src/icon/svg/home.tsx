import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconHome = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fillOpacity='0' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M29.333 15.667c0 .552-.447 1-1 1h-2.666c-.553 0-1 .447-1 1v6.666c0 .553-.448 1-1 1h-4c-.553 0-1-.447-1-1V21c0-.552-.448-1-1-1h-3.334c-.552 0-1 .448-1 1v3.333c0 .553-.447 1-1 1h-4c-.552 0-1-.447-1-1v-6.666c0-.553-.447-1-1-1H3.667c-.397-.016-.747-.266-.892-.636-.144-.37-.056-.79.225-1.071L15.327 4.293c.39-.39 1.023-.39 1.413 0L29.073 14.96c.176.193.269.446.26.707z'
      />
      <Path
        as='rect'
        width='14'
        height='1.333'
        x='9'
        y='28.667'
        svgFill={c}
        rx='.667'
      />
    </g>
  )
})

IconHome.displayName = 'IconHome'
export default IconHome