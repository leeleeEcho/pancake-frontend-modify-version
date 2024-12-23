import { GameType } from '@pancakeswap/games'
import { Box } from '@pancakeswap/uikit'
import { QuickAccess } from 'components/Game/Project/QuickAccess'
import { styled } from 'styled-components'

const StyledQuickAccessModal = styled(Box)`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.modal};
`

interface QuickAccessModalProps {
  game: GameType | undefined
}

export const QuickAccessModal: React.FC<React.PropsWithChildren<QuickAccessModalProps>> = ({ game }) => {
  if (!game) {
    return null
  }

  return (
    <StyledQuickAccessModal>
      <QuickAccess isOpen game={game} />
    </StyledQuickAccessModal>
  )
}
