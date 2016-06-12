import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'
import Devtools from 'cerebral-module-devtools'

import controller from './controller'
import App from './components/App'

controller.addModules({
  devtools: Devtools()
})

render((
  <Container controller={controller}>
    <App />
  </Container>
), document.querySelector('#app'))
