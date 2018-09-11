import Syncano from '@syncano/client'
import {Store} from '@website/types'
import * as api from '@website/types/api'
import {Coin} from '@website/types/coins'
import {CoinStore} from '@website/types/coins-store'
import {inject, observer} from 'mobx-react'
import * as React from 'react'
import * as Router from 'react-router-dom'

// interface Props extends Router.RouteComponentProps<{}> {
//   store: Store
// }

@inject('store')
@observer
export class Test extends React.Component<{
  store?: Store;
  data: Coin;
}> {
  async componentDidMount() {
    await this.props.store.coinStore.getCoins()
    // const coins = this.props.store.coinStore

    // console.log('coins', coins)

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
    const coins = this.props.store.coinStore.coinList
    console.log('coins in view', coins)

    if (coins) {
      return (
        <div>
          <p>sa coiny </p>
          <ul>
            {coins.map((coinName, key) => {
              return <li key={key}>{coinName.name}</li>

            })}

          </ul>
        </div>
      )
    }

    return (
      <div>
        nie ma coinow
    </div>
    )
  }
}
