import { styled } from '../../css/stitches.config'

export const ErrorsComponentBox = styled('div', {
  ai: 'center',
  c: '$gray200',
  d: 'flex',
  fd: 'column',
  gap: '1rem',
  jc: 'center',
  minHeight: 'calc(100vh - 25rem)',

  strong: {
    c: '$gray100',
    fontSize: '$6xl',
    textAlign: 'center',
  },

  svg: {
    c: '$red200',
  },

  div: {
    d: 'flex',
    fd: 'column',
  },

  span: {
    fontSize: '$lg',
  },
})
