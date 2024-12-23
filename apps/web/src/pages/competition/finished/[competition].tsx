import { useRouter } from 'next/router'
import { useMemo } from 'react'
import SubMenu from '../../../views/TradingCompetition/components/SubMenu'
import EasterCompetition from '../../../views/TradingCompetition/EasterCompetition'
import FanTokenCompetition from '../../../views/TradingCompetition/FanTokenCompetition'
import MoboxCompetition from '../../../views/TradingCompetition/MoboxCompetition'

const CompetitionPage = () => {
  const router = useRouter()
  const { competition: competitionId } = router.query

  const competitionPage = useMemo(() => {
    if (competitionId === 'easter') {
      return <EasterCompetition />
    }

    if (competitionId === 'mobox') {
      return <MoboxCompetition />
    }

    if (competitionId === 'fantoken') {
      return <FanTokenCompetition />
    }

    return null
  }, [competitionId])

  return (
    <>
      <SubMenu />
      {competitionPage}
    </>
  )
}

export default CompetitionPage
