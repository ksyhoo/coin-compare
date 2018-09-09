import Syncano from '@syncano/client'
import { Store } from '@website/types'
import * as api from '@website/types/api'
import { Coin } from '@website/types/coins'
import { CoinStore } from '@website/types/coins-store'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import * as Router from 'react-router-dom'

// interface Props extends Router.RouteComponentProps<{}> {
//   store: Store
// }

@inject('store')
@observer
export class Test extends React.Component<{
  store?: Store
  data: Coin
}> {
  // export class Test extends React.Component<Props>  {
  //   constructor(props: any) {
  //     super(props)
  //     this.state = {
  //     }
  //   }

  async componentDidMount() {
    await this.props.store.coinStore.getCoins().then(data => {
      // console.log('data' data)
    }
    )
  }
  // componentDidMount() {
  //   const s = new Syncano('delicate-snowflake-6675')

  //   s.get('coinmarketcap/ticker/').then(data => {
  //     this.setState({
  //       result: data,
  //     })
  //   })
  // }

  render() {
    // const article = this.props.store.coinStore.coins[Target][0].value.id
    const article = this.props.store.coinStore.coins
    console.log('article', article)

    return (
      <div>
        {{ article[0] }}
        asd
      </div>
    )
  }
}
