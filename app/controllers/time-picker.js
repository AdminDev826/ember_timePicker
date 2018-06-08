import Controller from '@ember/controller';

export default Controller.extend({
    selectedTime: "",
    actions: {
        setTimeValue(value){
            this.set('selectedTime', value);
        }
    }
});
