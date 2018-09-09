import * as api from "@website/types/api";
import {Coin} from "@website/types/coins";
import {flow, types} from "mobx-state-tree";
import {constants} from "fs";

export const CoinStore = types
  .model('CoinStore', {
    // coins: types.optional(types.array(Coin), []),
    coins: types.optional(types.array(types.string), []),

  })
  .views(self => ({
    get coinList() {
      return self.coins
      // return 'a'
    },
  }))
  // .actions(self => ({
  //   getCoins: flow(function*() {
  //     const coins = yield api.coin.listCoins()
  //     console.log(coins)
  //     coins.data.forEach(element => {
  //       self.coins.push(element)
  //     })
  //   }),
  // })),
  .actions(self => ({
    getCoins: flow(function*() {
      const a = ['sad']
      console.log(a)
      a.forEach(element => {
        self.coins.push(element)
      })
    }),
  }))

type CoinStoreType = typeof CoinStore.Type
export interface CoinStore extends CoinStoreType {}
