// import React, {Component} from 'react'
import {inject} from 'mobx-react'
import * as React from 'react'
import {Store} from '@website/types'
import {Coin} from '@website/types/coins'

// @inject('store')
export class CoinDetails extends React.Component<{
  data: Coin;

}> {
  render() {
    console.log(this.props.data)

    return (
      <div>
        {this.props.data.id} Pr : {this.props.data.price_usd}
        <br />
      </div>
    )
  }
}
