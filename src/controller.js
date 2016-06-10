import Controller from 'cerebral'
import model from './model'

import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemSubmitted from './signals/newItemSubmitted'

const controller = Controller(model)

controller.addSignals({
  newItemTitleChanged: {
    chain: newItemTitleChanged,
    immediate: true
  },
  newItemSubmitted
})

export default controller
