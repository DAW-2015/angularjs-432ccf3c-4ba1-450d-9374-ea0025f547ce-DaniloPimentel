var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFarenheit = function(celsius){
  	answer = (parseInt(celsius)*9/5)+32;
	if (isNaN(answer)){
		return 0;
	} else{
		return answer;
	}
  }

});

app.controller('ImpostoController', function(){

	this.salario = 100;

	this.calculaImposto = function(salario){

		if(salario < 2000) {
			return (salario/100) * 10;
		} else if(salario >= 2000 && salario <= 3500){
			return (salario/100) * 20;
		}

		return (salario/100) * 30;

	}

});
