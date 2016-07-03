import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react'

export default Cerebral({
  newItemTitle: 'newItemTitle',
  items: 'items'
})(
  (props) => {
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          props.signals.newItemTitleSubmitted()
        }}>
          <input
            type='text'
            value={props.newItemTitle}
            onChange={(event) => props.signals.newItemTitleChanged({
              title: event.target.value
            })}
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
  }
)
