import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'
<<<<<<< HEAD
import Devtools from 'cerebral-module-devtools'
=======
>>>>>>> master

import controller from './controller'
import App from './components/App'

<<<<<<< HEAD
controller.addModules({
  devtools: Devtools()
})

=======
>>>>>>> master
render((
  <Container controller={controller}>
    <App />
  </Container>
), document.querySelector('#app'))
