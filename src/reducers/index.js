import { ADD_REMINDER } from '../constants';

// helper func for reminder func
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
};

// reducer
const reminders = (state = [], action) => {
  let reminders = null; // proxy for state right now
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; // spread old state into new array & add another element
      console.log('reminders as state', reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;