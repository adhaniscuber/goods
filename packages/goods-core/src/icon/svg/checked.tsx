import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconChecked = memo<SvgIconProps>(({ c }) => {
  return (
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-340.000000, -2300.000000)' fillRule='nonzero'>
        <g transform='translate(24.000000, 2082.000000)'>
          <g transform='translate(12.000000, 162.000000)'>
            <g transform='translate(0.000000, 48.000000)'>
              <g transform='translate(304.000000, 8.000000)'>
                <rect
                  fillOpacity='0'
                  fill='#FFFFFF'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                />
                <Path
                  d='M17.645,9.34 L11.275,15.705 C11.2096154,15.7798655 11.1248359,15.8352318 11.03,15.865 C10.949877,15.8957022 10.8656104,15.9142408 10.78,15.92 C10.7355464,15.9299174 10.6894536,15.9299174 10.645,15.92 C10.6152113,15.9250352 10.5847887,15.9250352 10.555,15.92 C10.5319352,15.9250065 10.5080648,15.9250065 10.485,15.92 C10.4430933,15.9040654 10.4028918,15.8839646 10.365,15.86 C10.3352139,15.8445376 10.308184,15.8242651 10.285,15.8 L10.285,15.8 L10.235,15.76 L6.45,12.59 C6.12026327,12.3399428 6.05537529,11.8700643 6.305,11.54 L6.345,11.49 L6.385,11.44 C6.6593995,11.1736988 7.09020711,11.1564665 7.385,11.4 L10.11,13.69 C10.1454637,13.7270093 10.1858407,13.7589745 10.23,13.785 C10.526407,13.9794718 10.9184975,13.9398457 11.17,13.69 L16.57,8.295 C16.8622341,8.0058602 17.3327659,8.0058602 17.625,8.295 L17.625,8.295 C17.9106679,8.5816734 17.9194895,9.04260588 17.645,9.34 Z'
                  svgFill={c}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  )
})

IconChecked.displayName = 'IconChecked'
export default IconChecked
