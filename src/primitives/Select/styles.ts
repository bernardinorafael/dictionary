import * as Select from '@radix-ui/react-select'

import { keyframes, styled, theme } from '../../css/stitches.config'

const slideDown = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(-5px)',
  },

  '100%': {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

export const ContentBox = styled(Select.Content, {
  bg: '$gray800',
  boxShadow:
    'box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
  br: '$md',
  maxHeight: 'var(--radix-select-content-available-height)',
  overflow: 'hidden',
  p: '0.225rem',
  width: 'var(--radix-select-trigger-width)',
  zIndex: 1000,
  border: `1px solid ${theme.colors.gray700}`,

  '&[data-state=open]': {
    animation: `${slideDown} 100ms ease-in`,
  },
})

export const Trigger = styled(Select.Trigger, {
  alignItems: 'center',
  bg: 'transparent',
  border: `1px solid ${theme.colors.gray700}`,
  br: '$md',
  color: '$gray50',
  display: 'flex',
  fontSize: '$md',
  height: '2.25rem',
  justifyContent: 'space-between',
  lineHeight: 0,
  outline: 'none',
  px: '0.825rem',
  py: 0,
  userSelect: 'none',
  width: 130,

  '&:focus': {
    boxShadow: `0 0 0  2px ${theme.colors.cyan200}`,
  },

  '&:hover': {
    bg: '$gray700',
  },

  '&[data-state=open]': {
    svg: {
      transform: 'rotate(90deg)',
      transition: '100ms ease-in',
    },
  },
})

export const Viewport = styled(Select.Viewport, {
  p: '0.125rem',
})
