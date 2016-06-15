import Controller from 'cerebral'
import model from './model'
import Devtools from 'cerebral-module-devtools'

import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemTitleSubmitted from './signals/newItemTitleSubmitted'

const controller = Controller(model)

controller.addSignals({
  newItemTitleChanged: {
    chain: newItemTitleChanged,
    immediate: true
  },
  newItemTitleSubmitted
})

controller.addModules({
  devtools: Devtools()
})

export default controller
