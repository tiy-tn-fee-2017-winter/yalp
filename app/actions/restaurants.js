import resource from '../resources/restaurant';

const { actionCreators } = resource;

export const { create, findAll, findOne, update, destroy } = actionCreators;
