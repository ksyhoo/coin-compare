import * as api from '@website/types/api'
import { Coin } from '@website/types/coins'
import { flow, types } from 'mobx-state-tree'
import { constants } from 'fs';

export const CoinStore = types
  .model('CoinStore', {
    coins: types.optional(types.array(Coin), []),

    // coins: types.optional(types.array(null), []),

  })

  // view
  .views(self => ({
    getCoins: flow(function* () {
      const coins = yield api.coin.listCoins()
      console.log(coins)
      // self.coins.replace(coins.data)
      coins.data.forEach(element => {
        self.coins.push(element)
      })
      console.log(self.coins)
    }),
  }))

type CoinStoreType = typeof CoinStore.Type
export interface CoinStore extends CoinStoreType { }
