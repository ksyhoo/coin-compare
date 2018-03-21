import {Modal} from '@shared/components'
import * as React from 'react'
import {Profile} from './profile'

export const Modals = () => (
  <React.Fragment>
    <Modal name="profile" title="My profile" component={Profile} />
  </React.Fragment>
)