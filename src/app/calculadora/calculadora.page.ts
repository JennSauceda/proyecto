import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  constructor(private redireccionamiento: RedireccionamientoService) {}
  
  nav(ruta:string){
    this.redireccionamiento.navegar(ruta);
  }


  ngOnInit() {}

  currentNumber: string = '0';
  firstOperand: number = 0;
  operator: string = '';
  waitingForSecondNumber: boolean = false;


  // Función para añadir dígitos
  appendNumber(number: string) {
    if (this.waitingForSecondNumber) {
      this.currentNumber = number;
      this.waitingForSecondNumber = false;
    } else {
      this.currentNumber == '0'
        ? (this.currentNumber = number)
        : (this.currentNumber += number);
    }
  }

  // Función para añadir punto decimal
  appendDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  // Función para seleccionar operador
  selectOperator(operator: string) {
    if (this.firstOperand == 0) {
      this.firstOperand = parseFloat(this.currentNumber);
      this.currentNumber += operator;
    } else if (this.operator) {
      const result = this.performCalculation();
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitingForSecondNumber = true;
  }

  // Función para realizar el cálculo
  performCalculation() {
    switch (this.operator) {
      case '+':
        return this.firstOperand + parseFloat(this.currentNumber);
      case '-':
        return this.firstOperand - parseFloat(this.currentNumber);
      case '*':
        return this.firstOperand * parseFloat(this.currentNumber);
      case '/':
        return this.firstOperand / parseFloat(this.currentNumber);
      default:
        return parseFloat(this.currentNumber);
    }
  }

  // Función para borrar
  clear() {
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator ='';
    this.waitingForSecondNumber = false;
  }

  // Función para calcular resultado
  calculate() {
    if (this.operator && !this.waitingForSecondNumber) {
      this.currentNumber = String(this.performCalculation());
      this.operator = '';
      this.firstOperand = 0;
    }
  }
}
