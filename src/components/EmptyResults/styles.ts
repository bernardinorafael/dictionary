import { styled } from '../../css/stitches.config'

export const EmptyResultsBox = styled('div', {
  ai: 'center',
  d: 'flex',
  fd: 'column',
  minHeight: 'calc(100vh - 18rem)',
  jc: 'center',
  c: '$gray200',
  gap: '1rem',

  strong: {
    fontSize: '$5xl',
    textAlign: 'center',
  },
})
