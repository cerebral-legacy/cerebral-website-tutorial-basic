import {connect, h} from 'cerebral-view-snabbdom'

export default connect({
  newItemTitle: 'newItemTitle',
  items: 'items'
})(function App(props) {

  function onFormSubmit(event) {
    event.preventDefault()
    props.signals.newItemTitleSubmitted()
  }

  function onInputChange(event) {
    props.signals.newItemTitleChanged({
      title: event.target.value
    })
  }

  return h('div', [
    h('form', {
      on: {
        submit: onFormSubmit
      }
    }, [
      h('input', {
        props: {
          type: 'text',
          value: props.newItemTitle
        },
        on: {
          input: onInputChange
        }
      })
    ]),
    h('ul', props.items.map((item, index) => h('li', {
      key: index
    }, item)))
  ])
})
