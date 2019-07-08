import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withScreenshot } from 'storybook-chrome-screenshot'
import withReadme from 'storybook-readme/with-readme'
import { Provider, Tab, Tabs, Txt } from '..'
import Readme from './README/Tabs.md'

storiesOf('Next/Tabs', module)
  .addDecorator(withReadme(Readme))
  .addDecorator(withScreenshot())
  .add('Standard', () => {
    return (
      <Provider>
        <Tabs p={3}>
          <Tab title='Tab 1'>
            <Txt>Here is tab #1</Txt>
          </Tab>
          <Tab title='Tab 2'>
            <Txt>Here is tab #2</Txt>
          </Tab>
        </Tabs>
      </Provider>
    )
  })
