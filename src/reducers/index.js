import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

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
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; // spread old state into new array & add another element
      console.log('reminders as state', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
};

export default reminders;