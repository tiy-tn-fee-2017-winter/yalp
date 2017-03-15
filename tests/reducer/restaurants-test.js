import restaurants from '../../app/reducer/restaurants';

module('reducerrestaurants', () => {
  test('RESTAURANTS@FIND_ALL_COMPLETE: with no items', (assert) => {
    const oldState = [];
    const action = { type: 'RESTAURANTS@FIND_ALL_COMPLETE', data: [{ id: 1, name: 'Hot Diggity Dog' }] };
    const expectedState = [{ id: 1, name: 'Hot Diggity Dog' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@FIND_ALL_COMPLETE: with new items', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@FIND_ALL_COMPLETE', data: [{ id: 1, name: 'Hot Diggity Dog' }] };
    const expectedState = [{ id: 1, name: 'Hot Diggity Dog' }, { id: 2, name: 'Brew Works' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@FIND_ALL_COMPLETE: with duplicate ids', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@FIND_ALL_COMPLETE', data: [{ id: 2, name: 'Hot Diggity Dog' }] };
    const expectedState = [{ id: 2, name: 'Hot Diggity Dog' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@FIND_ONE_COMPLETE: with new id', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@FIND_ONE_COMPLETE', data: { id: 1, name: 'Hot Diggity Dog' } };
    const expectedState = [{ id: 1, name: 'Hot Diggity Dog' }, { id: 2, name: 'Brew Works' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@FIND_ONE_COMPLETE: with duplicate ids', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@FIND_ONE_COMPLETE', data: { id: 2, name: 'Hot Diggity Dog' } };
    const expectedState = [{ id: 2, name: 'Hot Diggity Dog' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@CREATE_COMPLETE: with duplicate ids', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@CREATE_COMPLETE', data: { id: 2, name: 'Hot Diggity Dog' } };
    const expectedState = [{ id: 2, name: 'Hot Diggity Dog' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@UPDATE_COMPLETE', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@UPDATE_COMPLETE', data: { id: 2, name: 'Hot Diggity Dog' } };
    const expectedState = [{ id: 2, name: 'Hot Diggity Dog' }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@DESTROY_COMPLETE', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works' }];
    const action = { type: 'RESTAURANTS@DESTROY_COMPLETE', id: 2 };
    const expectedState = [];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });

  test('RESTAURANTS@ADD_REVIEW_COMPLETE: with no reviews', (assert) => {
    const oldState = [{ id: 2, name: 'Brew Works', reviews: [] }];
    const action = { type: 'RESTAURANTS@ADD_REVIEW_COMPLETE', restaurantId: 2, data: { description: 'GREAT!!!' } };
    const expectedState = [{ id: 2, name: 'Brew Works', reviews: [{ description: 'GREAT!!!' }] }];

    assert.deepEqual(restaurants(oldState, action), expectedState);
  });
});
