import Ember from 'ember';
import DS from 'ember-data';
import computedStrict from './computedStrict';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  temperatureInC: DS.attr('number'),

  fullName: computedStrict('firstName', 'middleInitial', 'lastName',
    function(firstName, middleInitial, lastName){
      // Combine name parts to create fullName
      return firstName() + ' ' middleInitial() + '. ' + lastName();
  }),

  temperatureInF: computedStrict('temperatureInC', function('temperatureInC'){
    return temperatureInC() * 1.8 + 32;
  })
});
