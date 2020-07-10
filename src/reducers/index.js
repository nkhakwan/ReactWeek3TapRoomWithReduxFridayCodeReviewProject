import * as a from './addKeg';
const { combineReducers } = require("redux");



const rootReducer = combineReducers({
  macroKegList : a.macroKegList,
  detailItem : a.detailItem,
  formVisibleOnPage : a.formVisibleOnPage
}
)

export default rootReducer;