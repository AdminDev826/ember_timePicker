import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    selectedTime: "",
    actions: {
        setTimeValue(value){
            this.set('selectedTime', value);
        }
    }
});
