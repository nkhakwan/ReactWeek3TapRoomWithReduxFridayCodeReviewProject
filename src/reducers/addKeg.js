export const macroKegList =  (state = {}, action) => {
  
  const { name, brand, img, price, content, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name : name,
          brand : brand,
          img : img,
          price: price,  
          content: content, 
          quantity:quantity, 
          id: id
        }
      });
    case 'DEC_QTY':
      const decreasedOneObject = { ...state };
      decreasedOneObject[id].quantity =  decreasedOneObject[id].quantity - 1;
      return decreasedOneObject;
    default:
      return state;
  }
}

export const detailItem = (state = {}, action) => {
  const { macroKegList, id } = action;
  switch (action.type) {
    case 'DETAIL':
    if (macroKegList[id] != null){
      return macroKegList[id];
    } else{
      return state;
    }
    default:
      return state 
  }
}

export const formVisibleOnPage = (state = false, action) => {
  switch (action.type) {
    case 'FORM_TGL':
      return !state;
    case 'FORM_FALSE':
      return state = false;
    default:
      return state 
  }
}

export const detail = (state = false, action) => {
  switch (action.type) {
    case 'DETAIL_FALSE':
      return state = false;
    case 'DETAIL_TRUE':
      return state = true;
    default:
      return state 
  }
}
