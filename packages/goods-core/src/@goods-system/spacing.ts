import { Property as CSS } from 'csstype'
import {
  system,
  compose,
  ThemeType,
  SpacingName,
  Config,
  ResponsiveValue,
} from '@styled-system/core'

import { spacingConstants } from '../spacing'

export interface MarginProps<Theme extends ThemeType = ThemeType> {
  /**
   *  **Margin**
   *
   * The **margin** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
   * */
  m?: ResponsiveValue<SpacingName<Theme> | CSS.Margin, Theme>
  /**
   *  **Margin Top**
   *
   * The **margin-top** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
   * */
  mt?: ResponsiveValue<SpacingName<Theme> | CSS.MarginTop, Theme>
  /**
   *  **Margin Right**
   *
   * The **margin-right** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   * */
  mr?: ResponsiveValue<SpacingName<Theme> | CSS.MarginRight, Theme>
  /**
   *  **Margin Bottom**
   *
   * The **margin-bottom** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * */
  mb?: ResponsiveValue<SpacingName<Theme> | CSS.MarginBottom, Theme>
  /**
   *  **Margin Left**
   *
   * The **margin-left** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
   * */
  ml?: ResponsiveValue<SpacingName<Theme> | CSS.MarginLeft, Theme>
  /**
   *  **Margin Right** and **Margin Left**
   *
   * The **margin-right** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * The **margin-left** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [Margin right's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   *
   * [Margin left's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
   * */
  mx?: ResponsiveValue<SpacingName<Theme> | CSS.Margin, Theme>
  /**
   *  **Margin Top** and **Margin Bottom**
   *
   * The **margin-top** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * The **margin-bottom** CSS property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area) on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * Can use raw margin css value or a spacing key defined in `theme.space`
   *
   * [Margin top's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
   *
   * [Margin bottom's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * */
  my?: ResponsiveValue<SpacingName<Theme> | CSS.Margin, Theme>
}

export interface PaddingProps<Theme extends ThemeType = ThemeType> {
  /**
   *  **Padding**
   *
   * The **padding** CSS shorthand property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on all four sides of an element at once.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * */
  p?: ResponsiveValue<SpacingName<Theme> | CSS.Padding, Theme>
  /**
   *  **Padding Top**
   *
   * The **padding-top** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the top of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
   * */
  pt?: ResponsiveValue<SpacingName<Theme> | CSS.PaddingTop, Theme>
  /**
   *  **Padding Right**
   *
   * The **padding-right** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the right of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   * */
  pr?: ResponsiveValue<SpacingName<Theme> | CSS.PaddingRight, Theme>
  /**
   *  **Padding Bottom**
   *
   * The **padding-bottom** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the bottom of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
   * */
  pb?: ResponsiveValue<SpacingName<Theme> | CSS.PaddingBottom, Theme>
  /**
   *  **Padding Left**
   *
   * The **padding-left** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the left of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
   * */
  pl?: ResponsiveValue<SpacingName<Theme> | CSS.PaddingLeft, Theme>
  /**
   *  **Padding Right** and **Padding Left**
   *
   * The **padding-right** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the right of an element.
   *
   * The **padding-left** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the left of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [Padding right's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   *
   * [Padding left's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
   * */
  px?: ResponsiveValue<SpacingName<Theme> | CSS.Padding, Theme>
  /**
   *  **Padding Top** and **Padding Bottom**
   *
   * The **padding-top** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the top of an element.
   *
   * The **padding-bottom** CSS property sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the bottom of an element.
   *
   * Can use raw padding css value or a spacing key defined in `theme.space`
   *
   * [Padding top's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
   *
   * [Padding bottom's MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
   * */
  py?: ResponsiveValue<SpacingName<Theme> | CSS.Padding, Theme>
}

export interface SpacingProps<Theme extends ThemeType = ThemeType>
  extends MarginProps<Theme>,
    PaddingProps<Theme> {}

const configMargin: Config<MarginProps> = {
  m: { property: 'margin', scale: 'space', defaultScale: spacingConstants },
  mt: { property: 'marginTop', scale: 'space', defaultScale: spacingConstants },
  mr: {
    property: 'marginRight',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  mx: {
    properties: ['marginRight', 'marginLeft'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
}

const configPadding: Config<PaddingProps> = {
  p: { property: 'padding', scale: 'space', defaultScale: spacingConstants },
  pt: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pr: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pb: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pl: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  px: {
    properties: ['paddingRight', 'paddingLeft'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
}

export const margin = system<MarginProps>(configMargin)
export const padding = system<PaddingProps>(configPadding)

export const spacing = compose<SpacingProps>(margin, padding)
