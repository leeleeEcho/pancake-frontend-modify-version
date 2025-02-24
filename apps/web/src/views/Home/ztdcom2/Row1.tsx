import cs from './Row1.module.scss'
import ConnectWalletButton from 'components/ConnectWalletButton'

export default function Row1() {
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
            <ConnectWalletButton className={cs.btn}></ConnectWalletButton>
            <div className={cs.btn}>Trade Now</div>
          </div>
        </div>
        <img className={cs.right} src="/ztd/home/new/phone.png" />
      </div>
    </section>
  )
}
