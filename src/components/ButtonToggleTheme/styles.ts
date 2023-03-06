import { styled, theme } from '../../css/stitches.config'

export const Button = styled('button', {
  border: `1px solid ${theme.colors.gray700}`,
  outline: 'none',
  height: '2.25rem',
  aspectRatio: '1 / 1',
  br: '$lg',
  lineHeight: 0,
  bg: 'transparent',
  transformOrigin: 'center bottom',

  svg: {
    c: '$gray100',
  },

  '&:not(:disabled):active': {
    transform: 'scale(0.9)',
  },

  '&:focus': {
    bs: `0 0 0 2px ${theme.colors.cyan200}`,
  },

  '&:hover': {
    bg: '$gray700',
  },
})
