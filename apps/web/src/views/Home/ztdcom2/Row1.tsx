import cs from './Row1.module.scss'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'

export default function Row1() {
  const { address: account } = useAccount()
  const router = useRouter()

  const gotoTrade = () => {
    router.push('/')
  }
  return (
    <section className={cs.root}>
      <div className={cs.component}>
        <div className={cs.left}>
          <div className={cs.title}>An innovative decentralized exchange that makes trading more secure. </div>
          <div className={cs.tip}>
            No deal is too hard, no deal is unsafe.
            <br />
            Let you enjoy, love to use, like to use, help you achieve wealth.
          </div>
          <div className={cs.btns}>
            {!account && <ConnectWalletButton className={cs.btn}></ConnectWalletButton>}
            <div className={cs.btn} onClick={() => gotoTrade()}>
              Trade Now
            </div>
          </div>
        </div>
        <img className={cs.right} src="/ztd/home/new/phone.png" />
      </div>
    </section>
  )
}
