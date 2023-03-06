import { styled } from "../../css/stitches.config";
import * as Separator from '@radix-ui/react-separator'

export const SeparatorRoot = styled(Separator.Root, {
	bg: '$gray400',

	'&[data-orientation=horizontal]': {
		height: 1,
		width: '100%',
	},

	'&[data-orientation=vertical]': {
		width: 1,
		height: '100%',
	}
})