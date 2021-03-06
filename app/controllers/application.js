import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service(),
  actions:{
    logout() {
      this.get('user').invalidate();
    },
    login() {
      this.get('user').validate();
    }
  }
});
