import { useTranslation } from '@pancakeswap/localization'
import { useModal } from '@pancakeswap/uikit'
import DisclaimerModal from 'components/DisclaimerModal'
import { memo, useCallback, useEffect } from 'react'
import { useUserPredictionAcceptedRisk } from 'state/user/hooks'

function RiskDisclaimer() {
  const [hasAcceptedRisk, setHasAcceptedRisk] = useUserPredictionAcceptedRisk()
  const { t } = useTranslation()

  const handleSuccess = useCallback(() => {
    setHasAcceptedRisk(true)
  }, [setHasAcceptedRisk])

  const [onPresentRiskDisclaimer, onDismiss] = useModal(
    <DisclaimerModal
      id="predictions-risk-disclaimer"
      header={t('This Product is in beta.')}
      subtitle={t('Once you enter a position, you cannot cancel or adjust it.')}
      checks={[
        {
          key: 'responsibility-checkbox',
          content: t(
            'I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.',
          ),
        },
        {
          key: 'beta-checkbox',
          content: t('I understand that this product is still in beta. I am participating at my own risk'),
        },
      ]}
      onSuccess={handleSuccess}
    />,
    false,
  )

  useEffect(() => {
    if (!hasAcceptedRisk) {
      onPresentRiskDisclaimer()
    }

    return onDismiss
  }, [onDismiss, onPresentRiskDisclaimer, hasAcceptedRisk])

  return null
}

export default memo(RiskDisclaimer)
