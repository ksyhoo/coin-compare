import { FormStore } from '@shared/types/form-store'
import { LangStore } from '@shared/types/lang-store'
import { UserStore } from '@shared/types/user-store'
import { CoinStore } from '@website/types/coins-store'
import { Modal } from '@website/types/modal'
import { types } from 'mobx-state-tree'
import { hot } from 'react-hot-loader'

export const Store = hot(module)(types
  .model('Store', {
    modal: types.optional(Modal, {}),
    langStore: types.optional(LangStore, {}),
    userStore: types.optional(UserStore, {}),
    formStore: types.optional(FormStore, {}),
    coinStore: types.optional(CoinStore, {}),
  }))
  .views(self => ({
    get t() {
      return self.langStore.t
    },
  }))

type StoreType = typeof Store.Type
export interface Store extends StoreType { }
