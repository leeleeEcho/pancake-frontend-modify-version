import cs from './Row3Card.module.scss'

interface Props {
  url: string
  title: string
  tip: string
}
export default function Row3Card(props: Props) {
  return (
    <div className={cs.rootCard}>
      <img src={props.url} />
      <div className={cs.title}>{props.title}</div>
      <div className={cs.tip}>{props.tip}</div>
    </div>
  )
}
