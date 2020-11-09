import React, { forwardRef, memo } from 'react'
import styled, { CSSObject } from 'styled-components'
import {
  Box,
  BoxProps,
  BoxStyled,
  color,
  ColorProps,
  Icon,
  IconProps,
  mergeClass,
  Text,
} from '@pomona/goods-core'
import { InputStyled } from '../input/input-styled'
import { LabelStyled } from '../input/label-styled'
import { isIconButtonProps, useRect } from '../_utils'
import { DropdownInputProps, MenuComponentProps, OptionItem } from './_types'

export const ValueContainer = styled(BoxStyled)<{
  textWidth?: string
  lineClamp?: number
}>(({ textWidth, lineClamp = 1 }) => ({
  '& > span, & > p': {
    display: 'block',
    WebkitLineClamp: lineClamp,
    lineClamp,
    textOverflow: 'ellipsis',
    whiteSpace: lineClamp > 1 ? 'normal' : 'nowrap',
    overflow: 'hidden',
    maxWidth: textWidth,
    color: 'inherit',
    WebkitBoxOrient: 'vertical' as CSSObject['WebkitBoxOrient'],
  },
}))

export const DropdownInput = memo(
  forwardRef<HTMLInputElement, DropdownInputProps>(
    (
      {
        id = `${Date.now()}`,
        isMenuOpen = false,
        searchedValue = '',
        selectedLabel = '',
        selectedValue = '',
        renderOptionItem,
        onSearch,
        placeholder = '',
        clearIcon,
        onClear,
        onClearIconMouseDown,
        w = true,
        c = 'black30',
        supColor = 'black20',
        supErrorColor = 'red60',
        supRule = 'caption',
        supText = '',
        label = '',
        labelProps,
        prefix,
        prefixContainer,
        suffix,
        suffixContainer,
        className,
        isError,
        disabled,
        pb,
        pt,
        pr,
        pl,
        h,
        minH: minHProps,
        radius,
        focusProps,
        ...props
      },
      ref
    ) => {
      const minH = minHProps || (label ? '48px' : '40px')

      const {
        ref: prefixRef,
        rect: { width: prefixWidth },
      } = useRect<HTMLDivElement>()
      const paddingLeft = pl || `${prefixWidth + 12}px`

      const isClearIconShown =
        !!clearIcon && !disabled && !!(selectedLabel || searchedValue)
      const { ref: suffixRef, rect: suffixRect } = useRect<HTMLDivElement>([
        isClearIconShown,
      ])
      const paddingRight = pr || `${suffixRect.width}px`

      let renderedItemSelected: React.ReactNode = null
      if (selectedLabel && !searchedValue) {
        let child: React.ReactNode = selectedLabel
        if (typeof renderOptionItem === 'function') {
          child = renderOptionItem({
            value: selectedValue,
            label: selectedLabel,
            disabled,
          })
        }

        let top = '50%'
        let bottom = ''
        let offset = '-50%'
        if (label) {
          top = ''
          bottom = '0px'
          offset = '-20%'
        }

        renderedItemSelected = (
          <ValueContainer
            as='label'
            htmlFor={id}
            id={`${id}-dummy-input`}
            title={selectedLabel}
            posi='absolute'
            top={top}
            bottom={bottom}
            transform={`translateY(${offset})`}
            pl={paddingLeft}
            pr={paddingRight}
            w
            cursor='text'
            textWidth='100%'
            fDir='row'
            fAlign='center'
            c={disabled ? 'black20' : c}
          >
            {typeof child === 'string' || typeof child === 'number' ? (
              <Text as='span' rule='body' c='inherit'>
                {child}
              </Text>
            ) : (
              child
            )}
          </ValueContainer>
        )
      }

      return (
        <>
          <Box w={w} posi='relative'>
            <InputStyled
              id={id}
              type='text'
              value={searchedValue}
              placeholder={selectedLabel ? '' : placeholder}
              autoComplete='off'
              isLabeled={Boolean(label)}
              c={c}
              w={w}
              minH={minH}
              isError={isError}
              className={mergeClass(isError ? 'error' : '', className)}
              pb={label && selectedLabel ? 'xxxs' : pb}
              pt={label && selectedLabel ? 'm' : pt}
              pr={paddingRight}
              pl={paddingLeft}
              prefix={prefix ? 'true' : ''}
              h={h}
              disabled={disabled}
              radius={radius}
              focusProps={{
                pb: label ? 'xxxs' : pb,
                pt: label ? 'm' : pt,
                ...focusProps,
              }}
              onChange={onSearch}
              {...props}
              ref={ref}
            />
            {renderedItemSelected}
            {label && (
              <LabelStyled
                key={`${id}-label`}
                id={`${id}-label`}
                htmlFor={id}
                className={selectedLabel ? 'label-input-filled' : ''}
                isError={isError}
                left={paddingLeft}
                {...labelProps}
                style={{
                  left: typeof paddingLeft === 'string' ? paddingLeft : '',
                }}
              >
                {label}
              </LabelStyled>
            )}
          </Box>
          {prefix && (
            <Box
              posi='absolute'
              overflow='hidden'
              left='0px'
              d='flex'
              fDir='row'
              fJustify='center'
              fAlign='center'
              pl='xs'
              h={h || minH}
              {...prefixContainer}
              as='span'
              ref={prefixRef}
            >
              {isIconButtonProps(prefix) ? (
                <Icon
                  name={prefix?.icName}
                  c={prefix?.icColor}
                  rotate={prefix?.icRotate}
                  size={prefix?.icSize}
                />
              ) : (
                prefix
              )}
            </Box>
          )}
          <Box
            posi='absolute'
            right='0px'
            pr='xxs'
            fDir='row'
            fJustify='center'
            fAlign='center'
            h={h || minH}
            {...suffixContainer}
            as='span'
            ref={suffixRef}
          >
            {isClearIconShown && (
              <Box
                as='span'
                mr='xxs'
                cursor='pointer'
                onClick={onClear}
                onMouseDown={onClearIconMouseDown}
              >
                {clearIcon === true ? (
                  <Icon name='close' c='black30' size='small' />
                ) : isIconButtonProps(clearIcon) ? (
                  <Icon
                    name={clearIcon.icName}
                    c={clearIcon.icColor}
                    size={clearIcon.icSize}
                    rotate={clearIcon.icRotate}
                  />
                ) : (
                  clearIcon
                )}
              </Box>
            )}
            <BoxStyled
              as='label'
              htmlFor={id}
              cursor={disabled ? 'not-allowed' : 'pointer'}
              pointEvents={isMenuOpen ? 'none' : undefined}
              transition='transform 0.2s ease-in'
            >
              {suffix ? (
                isIconButtonProps(suffix) ? (
                  <Icon
                    name={suffix.icName}
                    c={suffix.icColor}
                    size={suffix.icSize}
                    rotate={suffix.icRotate}
                    transition='inherit'
                  />
                ) : (
                  suffix
                )
              ) : (
                <Icon
                  name='chevron'
                  c={disabled ? 'black20' : 'black30'}
                  size='normal'
                  rotate={isMenuOpen ? 'right' : 'left'}
                  transition='inherit'
                />
              )}
            </BoxStyled>
          </Box>
          {typeof supText === 'string' || typeof supText === 'number' ? (
            <Text
              c={isError ? supErrorColor : supColor}
              rule={supRule}
              my='xxxs'
              pl='xs'
              as='span'
            >
              {supText}
            </Text>
          ) : (
            supText
          )}
        </>
      )
    }
  )
)

interface OptionBoxProps
  extends OptionItem,
    Pick<
      MenuComponentProps,
      'renderOptionItem' | 'selected' | 'focused' | 'onSelect' | 'onItemHover'
    > {
  cSelected?: IconProps['c']
  bgFocused?: BoxProps['bg']
}

type MouseEventHandler = ((e: React.MouseEvent) => void) | undefined

export const OptionBox = memo<OptionBoxProps>(
  ({
    cSelected = 'blue50',
    bgFocused: bgFocusedProps = 'blue10',
    renderOptionItem,
    value,
    label,
    disabled,
    selected,
    focused,
    onSelect,
    onItemHover,
  }) => {
    const isSelected = value === selected
    const isFocused = value === focused
    const text = label || value

    let cursor: BoxProps['cursor'] = 'pointer'
    let c: BoxProps['c'] = 'black30'
    let bgFocused = bgFocusedProps
    let onClick: MouseEventHandler = onSelect
    let onMouseOver: MouseEventHandler = onItemHover
    if (isSelected) {
      cursor = 'default'
      c = cSelected
      bgFocused = ''
    } else if (disabled) {
      cursor = 'not-allowed'
      c = 'black20'
      bgFocused = ''
      onClick = undefined
      onMouseOver = undefined
    }

    let rendered: React.ReactNode = text
    if (typeof renderOptionItem === 'function') {
      rendered = renderOptionItem({ value, disabled, label: text })
    }

    return (
      <ValueContainer
        data-value={value}
        data-disabled={disabled}
        data-selected={isSelected}
        title={text}
        onClick={onClick}
        onMouseOver={onMouseOver}
        w
        minH='32px'
        posi='relative'
        radius='m'
        fDir='row'
        fAlign='center'
        px='xxs'
        my='xxxs'
        cursor={cursor}
        bg={isFocused ? bgFocused : undefined}
        textWidth='calc(100% - 32px)'
        c={c}
      >
        {typeof rendered === 'string' || typeof rendered === 'number' ? (
          <Text as='span' rule='body' c='inherit'>
            {rendered}
          </Text>
        ) : (
          rendered
        )}
        {isSelected && (
          <Box posi='absolute' right='-4px'>
            <Icon name='checked' c={cSelected} />
          </Box>
        )}
      </ValueContainer>
    )
  }
)

interface MenuBoxProps {
  cScrollBar?: ColorProps['c']
  bgScrollBar?: ColorProps['bg']
}

export const MenuBox = styled(BoxStyled)<MenuBoxProps>(
  ({ cScrollBar = 'blue50', bgScrollBar = 'white20', theme }) => {
    const { color: c, backgroundColor: bg } =
      color({ theme, c: cScrollBar, bg: bgScrollBar }) || {}

    return {
      scrollbarColor: `${c} ${bg}`,
      scrollbarWidth: 'thin',
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: bg,
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        height: '32px',
        backgroundColor: c,
        borderRadius: '4px',
      },
    }
  }
)
