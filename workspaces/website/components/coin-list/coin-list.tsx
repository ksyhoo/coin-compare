import {Accordion} from '@website/components/accordion/accordion'
import {CoinDetails} from '@website/components/coin-details/coin-details'
import {CoinListStyled, Wrapper} from '@website/components/coin-list/styled'
import {CoinItem} from '@website/components/coin/coin'
import {Store} from '@website/types'
import {Coin} from '@website/types/coins'
import {computed, inject, observable, observer} from 'mobx-react'
import * as React from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

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

  // handleClick = (event) => {
  //   // alert(event.target.parentNode.firstChild.innerHTML)
  //   const coinDetails = this.props.store.coinStore.showCoinDetails(event.target.parentNode.firstChild.innerHTML)
  //   this.setState({
  //     coinDetailsOnClick: coinDetails,
  //   })
  //   console.log('store', this.props.store)
  // }

  handleClick = (e, coin: string) => {
    const coinDetails = this.props.store.coinStore.showCoinDetails(coin)
    this.setState({
      coinDetailsOnClick: coinDetails,
    })

  }
  render() {
    const coins = this.props.store.coinStore.coinList
    if (coins) {
      return (
        // <div>
        // <Accordion title='Some title' >
        // <p>coontent</p>
        // </Accordion>
        // </div>

    <Wrapper >
          {/* <CoinDetails data={this.state.coinDetailsOnClick} /> */}
          <CoinListStyled>
            {coins.map((coin, key) => {
              // return <div key={key} onClick={this.handleClick.bind(this, sym)}>
              // return <div key={key} onClick={(e) => this.handleClick(e, coin.symbol)}>
              return <div key={key}>

                {/* <CoinItem data={coin} /> */}
                <Accordion title={coin.symbol} price={coin.price_usd}>
                  <p>
                    Name: {coin.name}
                  </p>
                  <p>
                    Price BTC: {coin.price_btc}
                  </p>
                  <p>
                    Ammount: {coin.available_supply}
                  </p>
                  <p>
                    CAP: {coin.market_cap_usd}
                  </p>
                </Accordion>
              </div>
            })}
          </CoinListStyled>
        </Wrapper>
      )
    } else {
      return (
        <div>
        <Accordion/>
        </div>
      )
    }

  }
}
