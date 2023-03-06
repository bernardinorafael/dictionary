import { styled, theme } from '../../css/stitches.config'

export const DefinitionBox = styled('div', {
  ai: 'start',
  border: `1px solid ${theme.colors.gray500}`,
  br: '$md',
  d: 'flex',
  fd: 'column',
  jc: 'flex-start',
  p: '1rem',

  '> div': {
    ai: 'baseline',
    d: 'flex',
    gap: '0.5rem',
    jc: 'flex-start',
    width: '100%',
  },

  '&:hover': {
    border: `1px solid ${theme.colors.gray200}`,
  },

  strong: {
    fontSize: '$lg',
  },

  span: {
    alignSelf: 'flex-start',
    c: '$gray100',
    fontSize: '$md',
    lineHeight: 0,
    paddingLeft: '2rem',
  },
})
