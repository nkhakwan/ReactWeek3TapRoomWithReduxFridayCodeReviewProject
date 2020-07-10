import * as a  from '../../reducers/addKeg';

describe("formVisibleReducer", () => {


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

//////////////////////////



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
});