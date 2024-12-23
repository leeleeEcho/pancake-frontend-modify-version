import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AffiliatesProgramLayout from 'views/AffiliatesProgram/components/AffiliatesProgramLayout'
import Banner from 'views/AffiliatesProgram/components/Dashboard/Banner'
import LoginButton from 'views/AffiliatesProgram/components/Dashboard/LoginButton'
import LeaderBoardList from 'views/AffiliatesProgram/components/LeaderBoard/LeaderBoardList'
import Podium from 'views/AffiliatesProgram/components/LeaderBoard/Podium'
import useAuthAffiliate from 'views/AffiliatesProgram/hooks/useAuthAffiliate'
import useAuthAffiliateExist from 'views/AffiliatesProgram/hooks/useAuthAffiliateExist'
import useLeaderboard from 'views/AffiliatesProgram/hooks/useLeaderboard'
import { useAccount } from 'wagmi'

const LeaderBoard = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { list, isFetching } = useLeaderboard()
  const { isAffiliate } = useAuthAffiliate()
  const { isAffiliateExist } = useAuthAffiliateExist()
  const [isFirstTime, setIsFirstTime] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstTime(false), 1000)

    if ((isAffiliateExist === false && isAffiliateExist !== null) || (!isFirstTime && !account)) {
      router.push('/affiliates-program')
    }

    return () => clearTimeout(timer)
  }, [isAffiliateExist, isAffiliate, router, isFirstTime, account, setIsFirstTime])

  if (!isAffiliateExist || (!isFirstTime && !account)) {
    return null
  }

  return (
    <AffiliatesProgramLayout>
      <Banner title={t('Leaderboard')} subTitle={t('See who has invited the most friends')} />
      {!isAffiliate ? (
        <LoginButton />
      ) : (
        <>
          <Podium list={list} />
          <LeaderBoardList list={list} isFetching={isFetching} />
        </>
      )}
    </AffiliatesProgramLayout>
  )
}

LeaderBoard.chains = []

export default LeaderBoard
