import {CoinListStyled, Wrapper} from '@website/components/coin-list/styled'
import {CoinItem} from '@website/components/coin/coin'
import {Store} from '@website/types'
import {Coin} from '@website/types/coins'
import {computed, inject, observer, observable} from 'mobx-react'
import * as React from 'react'

@inject('store')
@observer
export class CoinList extends React.Component<{
  store?: Store;
  data: Coin;
}> {
  // constructor(props: any) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  async componentDidMount() {
    await this.props.store.coinStore.getCoins()
    // await setInterval(() => this.props.store.coinStore.getCoins(), 500)

  }
  componentWillUnmount() {
    clearInterval()
  }
  // @computed get data() {
  //   return this.props.store.coinStore.getCoins()
  // }

  handleClick = (event) => {
    console.log(event.target.parentNode)
    alert(event.target.parentNode.firstChild.innerHTML)
  }

  render() {
    const coins = this.props.store.coinStore.coinList
    console.log(coins)
    if (coins) {
      return (
        <Wrapper >
          <CoinListStyled>
            <p>sa coiny </p>
            {/* <ul> */}
            {coins.map((coin, key) => {
              // return <li key={key}>{coin.name}</li>
              return <div key={key} onClick={this.handleClick}>
                <CoinItem data={coin} />
              </div>
            })}
            {/* </ul> */}
          </CoinListStyled>
        </Wrapper>
      )
    } else {
      return (
        <div>
          nie ma coinow
        </div>
      )
    }
  }
}
