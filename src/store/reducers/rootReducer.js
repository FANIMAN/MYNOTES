
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import {
    firebaseReducer,
} from "react-redux-firebase";
import noteReducer from './noteReducer'
const rootReducer = combineReducers({
    note: noteReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});
export default rootReducer;
