import * as a  from '../../reducers/addKeg';
import * as b from '../../actions/actionTypes';

let action;
const addKeg = {
  name : "Taqila",
  brand : "Insane",
  img : "Don't have one",
  price: 300,  
  content:  5,
  quantity:120, 
  id: 9
};

describe("formVisibleReducer", () => {

///////////////////// Testing formVisibleOnPage reducer ////////////////
////////////////////////////////////////////////////////////////////////

  test('Should toggle form visibility state to true', () => {
    expect(a.formVisibleOnPage( false, { type: 'FORM_TGL' })).toEqual(true);
  });

  test('Should toggle form visibility state to false', () => {
    expect(a.formVisibleOnPage( true, { type: 'FORM_TGL' })).toEqual(false);
  });

  test('Should make form visibility state to false', () => {
    expect(a.formVisibleOnPage(true, { type: 'FORM_FALSE' })).toEqual(false);
  });

  test('Should keep form visibility state to false', () => {
    expect(a.formVisibleOnPage(false, { type: 'FORM_FALSE' })).toEqual(false);
  });


///////////////////// Testing detail reducer ////////////////
////////////////////////////////////////////////////////////////////////


  test('Should keep detail false', () => {
    expect(a.detail( false, { type: 'DETAIL_FALSE' })).toEqual(false);
  });

  test('Should make detail false', () => {
    expect(a.detail( true, { type: 'DETAIL_FALSE' })).toEqual(false);
  });

  test('Should keep detail true', () => {
    expect(a.detail(true, { type: 'DETAIL_TRUE' })).toEqual(true);
  });

  test('Should make detail true', () => {
    expect(a.detail(false, { type: 'DETAIL_TRUE' })).toEqual(true);
  });

///////////////////// Testing macroKegList reducer ////////////////
/////////////////////////////////////////////////////////////



test('Should successfully add new Product to macroKegList', () => {
  const { name, brand, img, price, content, quantity, id } = addKeg;
  action = {
  type: b.ADD_KEG,
  name : name,
  brand : brand,
  img : img,
  price: price,  
  content: content,
  quantity: quantity, 
  id: id
  };

  expect(a.macroKegList({}, action)).toEqual({
    9: {
    name : name,
    brand : brand,
    img : img,
    price: price,  
    content:  content,
    quantity: quantity, 
    id: id
    }
  });
});












});