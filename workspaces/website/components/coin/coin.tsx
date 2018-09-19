import {Item, Wrapper} from '@website/components/coin/styled'
import {Coin} from '@website/types/coins'
import {computed, inject, observable, observer} from 'mobx-react'
import React, {Component} from 'react'

interface Props {
  data: Coin
}
@observer
export class CoinItem extends Component<Props> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const data = this.props
    // console.log(this.props.data)

    return (
      <Wrapper>
        <Item>{data.data.rank}</Item>
        <Item>{data.data.symbol}</Item>
        <Item>{data.data.name}</Item>
        {/* <Item>{data.data.available_supply}</Item>
        <Item>{data.data.price_usd}</Item>
        <Item>{data.data.price_btc}</Item> */}
      </Wrapper>

    )
  }
}

export default CoinItem
