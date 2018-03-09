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

  render () {
    console.log('this.props', this.props);
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