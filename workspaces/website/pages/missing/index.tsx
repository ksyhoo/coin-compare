import * as Router from '@reach/router'
import {Head, Link} from '@shared/components'
import {APP_TITLE} from '@shared/config'
import {View} from '@website/pages/missing/styled'
import {Store} from '@website/types'
import {inject} from 'mobx-react'
import * as React from 'react'
import {hot} from 'react-hot-loader'

export interface Props extends Router.RouteComponentProps {
  store: Store
}

@inject('store')
@hot(module)
class Missing extends React.Component<Props> {
  private readonly title = `Not Found - ${APP_TITLE}`

  render() {
    const {t} = this.props.store

    return (
      <React.Fragment>
        <Head>
          <title>{this.title}</title>
        </Head>

        <View>
          <h1>{t`Page was not found`}</h1>
          <Link mt="sm" to="/">{t`Back to home`}</Link>
        </View>
      </React.Fragment>
    )
  }
}

export default Missing
