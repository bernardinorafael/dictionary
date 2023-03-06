import { styled } from '../../css/stitches.config'

export const SynonymsBox = styled('div', {
  ai: 'flex-start',
  alignSelf: 'flex-start',
  d: 'flex',
  fd: 'column',
  jc: 'flex-start',

  strong: {
    alignSelf: 'flex-start',
    fontSize: '$2xl',
  },

  div: {
    d: 'flex',
    flexWrap: 'wrap',
    jc: 'flex-start',
    width: '100%',
  },

  span: {
    br: '$md',
    c: '$cyan200',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: 0.6,
    textTransform: 'lowercase',
  },
})
