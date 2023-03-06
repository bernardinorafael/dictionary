import { styled, theme } from '../../css/stitches.config'

export const HomeBox = styled('div', {
  ai: 'center',
  d: 'flex',
  fd: 'column',
  gap: '2rem',
  jc: 'center',
})

export const ContentBox = styled('main', {
  height: '100%',
  minHeight: 'calc(100vh - 12rem)',
  maxWidth: 820,
  p: '1rem',
  width: '100%',

  form: {
    ai: 'center',
    d: 'flex',
    gap: '0.865rem',
    height: '3.5rem',
    m: '0 auto',
    maxWidth: 820,
  },
})

export const InputField = styled('div', {
  d: 'flex',
  fd: 'column',
  height: '100%',
  position: 'relative',
  width: '100%',

  span: {
    bottom: '-25px',
    c: '$red200',
    fontWeight: '$bold',
    position: 'absolute',
  },
})

export const Input = styled('input', {
  bg: '$gray700',
  border: 'none',
  br: '$lg',
  c: '$gray50',
  flex: 1,
  fontSize: '$lg',
  outline: 'none',
  px: '1.25rem',
  resize: 'none',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },

  '&:not(:disabled):focus': {
    bs: `0 0 0 2px ${theme.colors.cyan300}`,
  },

  variants: {
    errors: {
      true: {
        bs: `0 0 0 2px ${theme.colors.red200}`,

        '&:not(:disabled):focus': {
          bs: `0 0 0 2px ${theme.colors.red200}`,
        },
      },
    },
  },
})

export const SearchButton = styled('button', {
  aspectRatio: '1/1',
  bg: '$gray700',
  border: 'none',
  br: '$round',
  height: '3.5rem',
  lineHeight: 0,
  outline: 'none',
  transformOrigin: 'center bottom',

  '&:not(:disabled):active': {
    transform: 'scale(0.95)',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },

  '&:not(:disabled):focus': {
    bs: `0 0 0 2px ${theme.colors.cyan300}`,
  },

  svg: {
    c: '$gray100',
  },
})

export const PlayerBox = styled('div', {
  d: 'flex',
  fd: 'column',
  jc: 'space-between',
  marginTop: '1rem',
  py: '2rem',

  div: {
    ai: 'center',
    d: 'flex',
    gap: '0.5rem',
    jc: 'space-between',

    h1: {
      fontSize: '$7xl',
    },
  },

  span: {
    alignSelf: 'flex-start',
    border: `1px solid ${theme.colors.cyan300}`,
    br: '$lg',
    c: '$cyan300',
    fontSize: '$2xl',
    fontWeight: '$bold',
    marginTop: '2rem',
    p: '.5rem',
  },
})

export const MeaningsBox = styled('div', {
  d: 'flex',
  fd: 'column',
  gap: '1rem',

  div: {
    ai: 'center',
    d: 'flex',
    gap: '1rem',

    em: {
      fontSize: '$4xl',
      fontWeight: '$bold',
    },
  },
})
