import { styled, theme } from '../../css/stitches.config'

export const Button = styled('button', {
  ai: 'center',
  bg: 'transparent',
  border: `1px solid ${theme.colors.gray700}`,
  br: '$round',
  bs: '0 0 0 1px #fe58fe2a, -15px 0 30px -15px #fe660015, 0 0 30px -15px #ff1cac4b, 15px 0 30px -15px #6f52ff1b',
  c: '$gray50',
  d: 'flex',
  fontSize: '$2xl',
  fontWeight: '$bold',
  gap: '0.5rem',
  height: '3.5rem',
  jc: 'center',
  outline: 'none',
  px: '2rem',

  '&:not(:disabled):active': {
    transform: 'scale(0.93)',
  },

  '&:hover': {
    bs: '0 0 0 2px #fe58fe1a, -15px 0 30px -15px #fe660085, 0 0 30px -15px #ff1cac9b, 15px 0 30px -15px #6f52ffbb',
  },
})
