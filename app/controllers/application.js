import Controller from '@ember/controller';

export default Controller.extend({
	salaryNet: "",
	salaryGross: "",
	onSalaryChange: Ember.observer('salaryNet', function(){
		let salaryNet = this.get('salaryNet');

	}),
	init(){
		this._super(...arguments);
		Ember.run.scheduleOnce('afterRender', this, () => {
	    	$('input.net').focus();
		});
	},
	calculateTaxes(salaryGross){
		salaryGross = parseInt(salaryGross);
		let pensionTaxMonth = salaryGross * 0.22;
		let medicalTaxMonth = salaryGross * 0.051;
		let socialTaxMonth = salaryGross * 0.029;
		let ndflTaxMonth = salaryGross * 0.13;
		let totalTaxesMonth = pensionTaxMonth + medicalTaxMonth + socialTaxMonth + ndflTaxMonth;

		this.set('pensionTaxMonth', this.formatTaxString(pensionTaxMonth));
		this.set('medicalTaxMonth', this.formatTaxString(medicalTaxMonth));
		this.set('socialTaxMonth', this.formatTaxString(socialTaxMonth));
		this.set('ndflTaxMonth', this.formatTaxString(ndflTaxMonth));
		this.set('totalTaxesMonth', this.formatTaxString(totalTaxesMonth));

		this.set('pensionTaxYear', this.formatTaxString(pensionTaxMonth*12));
		this.set('medicalTaxYear', this.formatTaxString(medicalTaxMonth*12));
		this.set('socialTaxYear', this.formatTaxString(socialTaxMonth*12));
		this.set('ndflTaxYear', this.formatTaxString(ndflTaxMonth*12));
		this.set('totalTaxesYear', this.formatTaxString(totalTaxesMonth*12));

		let FOT = salaryGross + pensionTaxMonth + medicalTaxMonth + socialTaxMonth;
		this.set('FOT', this.formatTaxString(FOT));
	},
	clearOutput(){
		this.set('pensionTaxMonth', '');
		this.set('medicalTaxMonth', '');
		this.set('socialTaxMonth', '');
		this.set('ndflTaxMonth', '');
		this.set('totalTaxesMonth', '');

		this.set('pensionTaxYear', '');
		this.set('medicalTaxYear', '');
		this.set('socialTaxYear', '');
		this.set('ndflTaxYear', '');
		this.set('totalTaxesYear', '');

		this.set('FOT', '');
	},
	formatTaxString(value){
		return Math.floor(value) + ' руб.';
	},
	actions:{
		netSalaryChanged(){
			this.set('salaryGross', '');
			this.clearOutput();

			let salaryNet = this.get('salaryNet');
			if(salaryNet>1000){
				let salaryGross = salaryNet /0.87;
				this.set('salaryGross', Math.floor(salaryGross));
				this.calculateTaxes(salaryGross);
			}
		},
		grossSalaryChanged(){
			this.set('salaryNet', '');
			this.clearOutput();

			let salaryGross = this.get('salaryGross');
			if(salaryGross>1000){
				let salaryNet = salaryGross * 0.87;
				this.set('salaryNet', Math.floor(salaryNet));
				this.calculateTaxes(salaryGross);
			}
		},
		filterInput(value, e){
			if(e.key.length==1 && (!$.isNumeric(e.key) || value.length==6)){
				e.preventDefault();
			}
		}
	}
});
