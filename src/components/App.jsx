import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions'; // this is passed in to props

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder () {
    this.props.addReminder(this.state.text);
  }

  renderReminders () {
    const {reminders} = this.props;
    
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render () {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input 
              className="form-control"
              placeholder="I have to..."
              onChange={(e) => this.setState({text: e.target.value})}
            />
          </div>
          
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        { this.renderReminders() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }; // must return an object
}

export default connect(mapStateToProps, { addReminder })(App); // 2nd arg connect addReminder action to App which dispatches to reducer when there's a change