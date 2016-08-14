import Inferno from 'inferno'
import {connect} from 'cerebral-view-inferno'

export default connect({
  newItemTitle: 'newItemTitle',
  items: 'items'
}, {
  newItemTitleSubmitted: 'newItemTitleSubmitted',
  newItemTitleChanged: 'newItemTitleChanged'
},
  function App (props) {
    const onFormSubmit = event => {
      event.preventDefault()
      props.newItemTitleSubmitted()
    }

    const onInputChange = event => {
      props.newItemTitleChanged({
        title: event.target.value
      })
    }

    return (
      <div>
        <p>Type text and hit enter</p>
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            value={props.newItemTitle}
            onInput={onInputChange}
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
