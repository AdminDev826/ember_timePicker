import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    old_value: "",
    didInsertElement(){
        $('#onselectTime').timepicker();
    },
    actions: {
        setTimeValue(value){
            if(this.old_value != value){
                this.setTime(value);
                this.old_value = value;
            }
        }
    }
});
