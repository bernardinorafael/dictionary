import { keyframes, styled } from '../../css/stitches.config'

const rotateSpinner = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

export const LoaderBox = styled('div', {
  ai: 'center',
  d: 'flex',
  jc: 'center',
  minHeight: '50vh',

  svg: {
    animation: `${rotateSpinner} 800ms linear infinite`,
  },
})
