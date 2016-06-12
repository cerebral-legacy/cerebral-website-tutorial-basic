import {render} from 'cerebral-view-snabbdom'
import Devtools from 'cerebral-module-devtools'

import controller from './controller'
import App from './components/App'

controller.addModules({
  devtools: Devtools()
})

render(() => App(), document.querySelector('#app'), controller)
