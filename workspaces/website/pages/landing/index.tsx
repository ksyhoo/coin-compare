import * as Router from '@reach/router'
import {Head, Link, List} from '@shared/components'
import {APP_TITLE} from '@shared/config'
import {CoinList} from '@website/components/coin-list/coin-list'
import {View} from '@website/pages/landing/styled'
import {Store} from '@website/types'
import {inject, observer} from 'mobx-react'
import * as React from 'react'
import {hot} from 'react-hot-loader'

interface Props extends Router.RouteComponentProps<{}> {
  store: Store
}

@hot(module)
@inject('store')
@observer
class Landing extends React.Component<Props> {
  private readonly title = APP_TITLE

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{this.title}</title>
        </Head>
        <View>
          <CoinList/>
        </View>
      </React.Fragment>
    )
  }
}

export default Landing
