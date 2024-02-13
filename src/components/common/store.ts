// store.js
import { createStore } from 'redux';

export type RootState = {
  isRunning: boolean;
  recordedTimes: number[]; // Assuming recordedTimes is an array of numbers
  count: number;
  data: string;
  startTime: Date | null; // Define startTime as Date or null
  text: string[];
};

const initialState: RootState = {
  count: 0,
  data: "",
  isRunning: false,
  recordedTimes: [],
  startTime: null, // Initialize startTime to null
  text:[]
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // ... rest of the cases
    case  'ADDTODO':
      return {
     ...state,        
     text: [action.payload,...state.text]
    };
     case 'REMOVETODO':
      return {
     ...state,
        text: state.text.filter(todo => todo!== action.payload)
      };
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'START_STOPWATCH':
      return {
        ...state,
        isRunning: true,
        startTime: new Date(), // Initialize startTime when starting the stopwatch
      };
    case 'END_STOPWATCH':
      if (!state.startTime) {
        // Handle case where startTime is not initialized
        return state;
      }
      const endTime = new Date();
      return {
        ...state,
        isRunning: false,
        recordedTimes: [...state.recordedTimes, endTime.getTime() - state.startTime.getTime()],
        startTime: null, // Reset startTime after stopping the stopwatch
      };
      case 'UPDATE_ELAPSED_TIME':
        if (state.isRunning && state.startTime) {
          // Update elapsed time while running
          const elapsedMilliseconds = Date.now() - state.startTime.getTime();
          return {
            ...state,
            recordedTimes1: state.recordedTimes.slice(0, -1).concat(elapsedMilliseconds),
          };
        }
        return state;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
