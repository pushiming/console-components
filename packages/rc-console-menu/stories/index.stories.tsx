import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import Secondary from './secondary'
import ControlledMenu from './controlled-menu'
import WithItemsDecalration from './with-items-declaration'
import RoutableMenu from './routable-menu'
import WithDivider from './with-divider'

storiesOf('wind-rc-console-menu', module)
  .add('Basic', () => <Basic />)
  .add('Secondary', () => <Secondary />)
  .add('ControlledMenu', () => <ControlledMenu />)
  .add('WithItemsDecalration', () => <WithItemsDecalration />)
  .add('RoutableMenu', () => <RoutableMenu />)
  .add('WithDivider', () => <WithDivider />)
