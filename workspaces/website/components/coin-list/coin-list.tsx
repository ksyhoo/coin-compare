import {CoinDetails} from '@website/components/coin-details/coin-details'
import {CoinListStyled, Wrapper} from '@website/components/coin-list/styled'
import {CoinItem} from '@website/components/coin/coin'
import {Store} from '@website/types'
import {Coin} from '@website/types/coins'
import {computed, inject, observable, observer} from 'mobx-react'
import * as React from 'react'

@inject('store')
@observer
export class CoinList extends React.Component<{
  store?: Store;
  data: Coin;
  coinDetailsOnClick: {};
}> {
  constructor(props: any) {
    super(props)
    this.state = {
      coinDetailsOnClick: {},
    }
  }

  async componentDidMount() {
    await this.props.store.coinStore.getCoins()
    // setInterval(async () => await this.props.store.coinStore.getCoins(), 5000)
  }
  componentWillUnmount() {
    clearInterval()
  }

  handleClick = (event) => {
    // alert(event.target.parentNode.firstChild.innerHTML)
    const coinDetails = this.props.store.coinStore.showCoinDetails(event.target.parentNode.firstChild.innerHTML)
    this.setState({
      coinDetailsOnClick: coinDetails,
    })
  }

  render() {
    const coins = this.props.store.coinStore.coinList
    if (coins) {
      return (
        <Wrapper >
          <CoinDetails data={this.state.coinDetailsOnClick} />
          <CoinListStyled>
            {coins.map((coin, key) => {
              return <div key={key} onClick={this.handleClick}>
                <CoinItem data={coin} />
              </div>
            })}
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
