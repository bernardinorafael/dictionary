import * as SelectComponent from '@radix-ui/react-select'

import { styled } from '../../../../css/stitches.config'

export const Item = styled(SelectComponent.Item, {
  alignItems: 'center',
  br: '$md',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$md',
  height: '2rem',
  lineHeight: 0,
  px: '0.5rem',
  py: 0,

  '&[data-highlighted]': {
    outline: 'none',
    bg: '$cyan300',
  },
})
