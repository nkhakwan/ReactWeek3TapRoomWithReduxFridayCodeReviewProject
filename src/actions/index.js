export const actionFormTgl =()=> ({
  type: 'FORM_TGL'
});

export const actionFormFalse = () =>({
    type: 'FORM_FALSE'
  });


  export const actionDetailFalse =()=> ({
    type: 'DETAIL_FALSE'
  });
  
  export const actionDetailTrue = () =>({
      type: 'DETAIL_TRUE'
    });
    
export const actionAdd = (newKeg)=> {
    const { id, name, brand, img, price, content, quantity } = newKeg;
    return {
      type: 'ADD_KEG',
      id : id,
      name : name,
      brand : brand,
      img : img,
      price : price,
      content: content,
      quantity: quantity
    }
  }

  

  export const actionDecQty = (id) => {
    return{
      type: 'DEC_QTY',
      id : id
    }
  }

  export const actionDetail = (macroKegList, id) => {
    return {
      type: 'DETAIL',
      id : id,
      macroKegList : macroKegList

    }
  }