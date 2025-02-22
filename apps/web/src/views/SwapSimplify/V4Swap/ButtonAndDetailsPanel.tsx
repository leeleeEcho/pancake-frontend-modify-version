import { SwapUIV2 } from '@pancakeswap/widgets-internal'
import { useState } from 'react'
import { styled } from 'styled-components'

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  /* background-color: ${({ theme }) => theme.colors.card}; */
  /* border: 1px solid ${({ theme }) => theme.colors.cardBorder}; */
`
interface ButtonAndDetailsPanelProps {
  shouldRenderDetails?: boolean

  swapCommitButton: React.ReactNode
  pricingAndSlippage: React.ReactNode
  tradeDetails: React.ReactNode
  mevSlot?: React.ReactNode

  gasTokenSelector?: React.ReactNode
}

export const ButtonAndDetailsPanel: React.FC<ButtonAndDetailsPanelProps> = ({
  shouldRenderDetails,
  swapCommitButton,
  pricingAndSlippage,
  tradeDetails,
  mevSlot,
  gasTokenSelector,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <PanelWrapper>
      {swapCommitButton}
      {gasTokenSelector}
      {shouldRenderDetails && (
        <SwapUIV2.Collapse
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          title={pricingAndSlippage}
          content={tradeDetails}
        />
      )}
      {!isOpen && mevSlot}
    </PanelWrapper>
  )
}
