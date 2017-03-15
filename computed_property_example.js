import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  temperatureInC: DS.attr('number'),

  fullName: Ember.computed('firstName', 'lastName', function(){
    // Combine name parts to create fullName
    let firstName = this.get('firstName');
    let lastName = this.get('lastName');

    return firstName + ' ' + lastName;
  }),

  temperatureInF: Ember.computed('temperatureInC', function(){
    return this.get('temperatureInC') * 1.8 + 32;
  })
});
