import {Item, Wrapper} from '@website/components/coin/styled'
import {Coin} from '@website/types/coins'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {computed, inject, observable, observer} from 'mobx-react'

interface Props {
  data: Coin
  item: Object
}
@observer
export class CoinItem extends Component<Props> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const data = this.props
    // console.log(this.props)

    return (
      <Wrapper>
        <Item>
          {data.data.symbol}
        </Item>
        <Item>
          {data.data.name}
        </Item>
        <Item>
          {data.data.rank}
        </Item>
        <Item>
          {data.data.available_supply}
        </Item>
        <Item>
          {data.data.price_usd}
        </Item>
        <Item>
          {data.data.price_btc}
        </Item>

      </Wrapper>
    )
  }
}

export default CoinItem
