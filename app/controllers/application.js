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
	},
	formatTaxString(value){
		return Math.floor(value) + ' руб.';
	},
	actions:{
		netSalaryChanged(){
			let salaryNet = this.get('salaryNet');
			if(salaryNet.trim()==''){
				this.set('salaryGross', '');
			}else if(salaryNet>1000){
				let salaryGross = salaryNet /0.87;
				this.set('salaryGross', Math.floor(salaryGross));
				this.calculateTaxes(salaryGross);
			}
		},
		grossSalaryChanged(){
			let salaryGross = this.get('salaryGross');
			if(salaryGross.trim()==''){
				this.set('salaryNet', '');
			}else if(salaryGross>1000){
				let salaryNet = salaryGross * 0.87;
				this.set('salaryNet', Math.floor(salaryNet));
				this.calculateTaxes(salaryGross);
			}
		}
	}
});
