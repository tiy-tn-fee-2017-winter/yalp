import createResource from 'redux-thunk-rest';

export default createResource('user', {
  url: 'http://localhost:3333/users',
});
