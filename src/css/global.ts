import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    m: 0,
    p: 0,
    boxSizing: 'border-box',
  },

  body: {
    bg: '$gray900',
    c: '$gray50',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button, select': {
    fontWeight: '$regular',
    fontFamily: '$serif',
    fontSize: '$xs',
  },

  a: {
    textDecoration: 'none',
    c: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },

  '::selection': {
    bg: '$cyan600',
  },

  '::-webkit-scrollbar': {
    bg: '$gray380',
    width: '0.625rem',
  },

  '::-webkit-scrollbar-thumb': {
    bg: '$gray400',
    br: '$lg',
  },
})
