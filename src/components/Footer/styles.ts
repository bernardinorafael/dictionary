import { styled, theme } from '../../css/stitches.config'

export const FooterBox = styled('footer', {
  borderTop: `1px solid ${theme.colors.gray400}`,
  px: '1rem',
  py: '0.5rem',
  userSelect: 'none',
  width: '100%',
})

export const ContentBox = styled('div', {
  ai: 'center',
  d: 'flex',
  jc: 'center',
  m: '0 auto',
  maxWidth: 1440,
  p: '1rem',
  width: '100%',

  strong: {
    borderBottom: '1px solid transparent',
    c: '$gray100',
    d: 'flex',
    fontFamily: '$mono',
    fontSize: '$md',
    gap: '0.225rem',
  },

  a: {
    ai: 'center',
    borderBottom: '1px solid transparent',
    d: 'flex',
    gap: '0.225rem',
    jc: 'center',
    paddingBottom: '0.125rem',

    '&:hover': {
      borderBottom: `1px solid ${theme.colors.gray400}`,
    },
  },
})
