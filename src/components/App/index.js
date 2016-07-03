import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react'

export default Cerebral({
  newItemTitle: 'newItemTitle',
  items: 'items'
})(function App(props) {

  function onTitleSubmit(event) {
    event.preventDefault()
    props.signals.newItemTitleSubmitted()
  }

  function onTitleChange(event) {
    props.signals.newItemTitleChanged({
      title: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={onTitleSubmit}>
        <input
          type="text"
          value={props.newItemTitle}
          onChange={onTitleChange}
        />
      </form>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})
