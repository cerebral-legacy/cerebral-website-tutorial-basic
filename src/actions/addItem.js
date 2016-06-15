// This action grabs the current "newItemTitle"
// from the state store and pushes it into the
// "items" array
function addItem({state}) {
  state.push('items', state.get('newItemTitle'))
}

export default addItem
