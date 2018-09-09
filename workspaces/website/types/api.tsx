import { syncano, syncanoKshTry } from '@shared/utils/syncano'
import { Coin } from './coins'

export const coin = {
  listCoins: ():
    Promise<Coin[]> =>
    syncanoKshTry('coinmarketcap/ticker'),
}
