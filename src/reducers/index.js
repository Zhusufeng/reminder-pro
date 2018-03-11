import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

// helper func for adding reminder
const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
};

// helper func for deleting reminder
const removeById = (state = [], id) => {
  // return all reminders that aren't deleted
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

// reducer
const reminders = (state = [], action) => {
  let reminders = null; // proxy for state right now
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; // spread old state into new array & add another element
      console.log('reminders as state', reminders);
      bake_cookie('reminders', reminders); // add/update reminder cookie in browser
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders); // update reminder cookie in browser
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;