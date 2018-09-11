import {types} from 'mobx-state-tree'

export const Coin = types
  .model('Coin', {
    id: types.string,
    name: types.string,
    symbol: types.string,
    rank: types.string,
    price_usd: types.string,
    price_btc: types.string,
    // h24_volume_usd: types.string,
    market_cap_usd: types.string,
    available_supply: types.string,
    // total_supply: types.string,
    // max_supply: types.string,
    percent_change_1h: types.string,
    percent_change_24h: types.string,
    percent_change_7d: types.string,
    last_updated: types.string,
  })
  // .model('MockCoin', {
  //   name: 'test coin',

  // })
  .views(self => ({
    // get url() {
    //   return {
    //     single: `/article/${self.id}`,
    //   }
    // },
  }))
  .actions(self => ({

  }))

type CoinType = typeof Coin.Type
export interface Coin extends CoinType {}
