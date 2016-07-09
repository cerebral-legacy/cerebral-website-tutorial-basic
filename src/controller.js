import {Controller} from 'cerebral'
import model from './model'
import Devtools from 'cerebral-module-devtools'

import updateItemTitle from './chains/updateItemTitle'
import addNewItem from './chains/addNewItem'

const controller = Controller(model)

controller.addSignals({
  newItemTitleChanged: {
    chain: updateItemTitle,
    immediate: true
  },
  newItemTitleSubmitted: addNewItem
})

controller.addModules({
  devtools: Devtools()
})

export default controller
