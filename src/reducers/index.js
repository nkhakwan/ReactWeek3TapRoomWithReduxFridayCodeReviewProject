import * as a from './addKeg';
const { combineReducers } = require("redux");



const rootReducer = combineReducers({
  macroKegList : a.macroKegList,
  detailItem : a.detailItem
}
)

export default rootReducer;