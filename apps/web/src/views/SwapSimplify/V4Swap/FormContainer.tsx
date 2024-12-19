import { Column } from '@pancakeswap/uikit'
import { memo, PropsWithChildren } from 'react'

import { SwapUIV2 } from '@pancakeswap/widgets-internal'

export const FormContainer = memo(function FormContainer({ children }: PropsWithChildren) {
  return (
    <SwapUIV2.InputPanelWrapper id="swap-page">
      <Column gap="sm">{children}</Column>
    </SwapUIV2.InputPanelWrapper>
  )
})
