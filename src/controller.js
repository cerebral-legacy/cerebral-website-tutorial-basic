import Controller from 'cerebral';
import Model from 'cerebral-model-immutable';

const model = Model({
  items: [],
  newItemTitle: ''
});

const controller = Controller(model);

export default controller;
