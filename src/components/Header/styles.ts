import { styled, theme } from '../../css/stitches.config'

export const HeaderBox = styled('header', {
  borderBottom: `1px solid ${theme.colors.gray400}`,
  px: '1rem',
  py: '0.5rem',
  userSelect: 'none',
  width: '100%',

  strong: {
    ai: 'center',
    br: '$md',
    c: '$gray100',
    d: 'flex',
    fontFamily: '$mono',
    fontSize: '1rem',
    fontWeight: '$regular',
    gap: '0.225rem',
  },

  div: {
    ai: 'center',
    d: 'flex',
    gap: '1rem',
  },
})

export const ContentBox = styled('div', {
  ai: 'center',
  d: 'flex',
  jc: 'space-between',
  m: '0 auto',
  maxWidth: 1440,
  width: '100%',
})
