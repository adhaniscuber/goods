import React, { useState, useCallback, useMemo, ChangeEvent, FC } from 'react'
import { Box } from '../basics/div'
import { Text } from '../typography'
import {
  GoodsDocs,
  Section,
  Point,
  Input,
  ImageBox,
} from '../utils/storybook.docs'
import { Icon } from '.'
import { IconName, iconName } from './_types'

const IconDesignImg = require('../../assets/stories/icon-design.png')
const IconSizingImg = require('../../assets/stories/icon-sizing.png')

const iconNames = Object.keys(iconName) as IconName[]

const usageRule = [
  {
    label: 'Visual Area',
    values: 'Visualisation for the differences between the types',
  },
  {
    label: 'Type',
    values: 'As a names for the size usage',
  },
  {
    label: 'Pixel Size',
    values: 'Real size of the icon',
  },
  {
    label: 'Scale',
    values: 'Scale usage for the responsiveness',
  },
]

const excludedProps = [
  'onChange',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress',
  'onFocus',
  'onBlur',
]

const IconDocs: FC = () => {
  const [searchKey, setSearchKey] = useState('')

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchKey(value)
  }, [])

  const icons = useMemo<IconName[]>(() => {
    if (!searchKey) return iconNames
    const normalizedSearchKey = searchKey.replace(/\s|-|_/g, '')
    const searchRegexp = new RegExp(normalizedSearchKey, 'i')
    return iconNames.filter(name => {
      return searchRegexp.test(name)
    })
  }, [searchKey])

  return (
    <GoodsDocs
      designDesc={`
        Icon will be used as a simple yet iconic visual representation of an action function,
        or a feature.
      `}
      excludedProps={excludedProps}
    >
      <ImageBox imageSrc={IconDesignImg} alt='Icon Design' mt='l' mb='xl' />
      <Section title='I. Usage' noChildTab>
        <Box mb='s'>
          <Text rule='body'>Here are some terms to standarized our terms</Text>
        </Box>
        {usageRule.map((item, key) => (
          <Point
            key={key}
            title={item.label}
            description={item.values}
            bullet
          />
        ))}
        <Box
          bg='white30'
          w='100%'
          minH='48px'
          radius='4px'
          fJustify='center'
          py='xs'
          px='s'
          bW='1px'
          bS='solid'
          bC='black20'
          mt='s'
          mb='l'
        >
          <Text rule='body'>
            Icon Format is SVG but until we set React Native SVG settings, it
            needs PNG (1x, 1,5x, 2x, 4x Scale)
          </Text>
        </Box>
        <ImageBox imageSrc={IconSizingImg} alt='Icon Sizing' my='l' />
      </Section>
      <Section title='II. Icon List' noChildTab>
        <Box w mb='l'>
          <Input
            id='search-icon'
            name='search-icon'
            placeholder='Search Icon'
            autoComplete='off'
            value={searchKey}
            onChange={onSearch}
          />
        </Box>
        <Box
          d='grid'
          w
          gTempCol={{
            xs: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(6, 1fr)',
          }}
        >
          {icons.map(name => (
            <Box
              key={name}
              w='120px'
              h='120px'
              fAlign='center'
              fJustify='center'
            >
              <Icon name={name} mb='m' />
              <Text rule='body'>{name}</Text>
            </Box>
          ))}
        </Box>
      </Section>
    </GoodsDocs>
  )
}

export default IconDocs
