import * as api from '@website/types/api'
import {Coin} from '@website/types/coins'
import {flow, types} from 'mobx-state-tree'

// tslint:disable-next-line:one-variable-per-declaration
export const CoinStore = types
  .model('CoinStore', {
    coins: types.optional(types.array(Coin), []),
    // coins: types.optional(types.array(types.string), []),

  })
  .views(self => ({
    get coinList() {
      // return self.coins.find(item => item === 'Bitcon')
      return self.coins.map((data) => {
        return data
      })
    },
  }))
  .actions(self => ({
    getCoins: flow(function* () {
      const coins = yield api.coin.listCoins()
      coins.data.forEach(element => {
        self.coins.push(element)
      })
    }),
  }))
// .actions(self => ({
//   getCoins: flow(function* () {
//     const testDaMobx = ['sad']
//     console.log(testDaMobx)
//     testDaMobx.forEach(element => {
//       self.coins.push(element)
//     })
//   }),
// }))

type CoinStoreType = typeof CoinStore.Type
export interface CoinStore extends CoinStoreType {}
