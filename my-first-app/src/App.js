import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Display extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            firstNumber: 0,
            secondNumber: 0,
            operator: '',
            end:false,
            inputexpression:''
        }
        this.clear = this.clear.bind(this);
        this.pressDigit = this.pressDigit.bind(this);
        this.pressOperator = this.pressOperator.bind(this);
        this.evaluate = this.evaluate.bind(this);

    }

    componentWillUpdate(nextProps, nextState){
        if((this.state.operator === '+' || this.state.operator === '-'|| this.state.operator === '*'|| this.state.operator === '/')  && nextState.secondNumber !== 0 && this.state.operator !== '=') {
           // this.setState({input: this.state.firstNumber + this.state.secondNumber, operator: ''});
            switch (this.state.operator) {
                case '+':
                    this.setState({input: this.state.firstNumber + this.state.secondNumber,operator:'',firstNumber:''});
                    break;
                case '-':
                    this.setState({input: this.state.firstNumber - this.state.secondNumber});
                    break;
                case '*':
                    this.setState({input:this.state.firstNumber * this.state.secondNumber,operator:''});
                    break;
                case '/':
                    this.setState({input:this.state.firstNumber / this.state.secondNumber,operator:''});
                    break;
                case '=':
                    this.setState({inputexpression:this.state.input,operator:'',firstNumber:'',secondNumber:''});
                    break;
                default:
                    console.log('Sorry, we are out of ' + this.state.operator + '.');
            }
        }
            else if(this.state.operator === '='){
                this.setState({operator:'',firstNumber:'',secondNumber:''});
            }

            console.log("Is there anything else you'd like?");
        }


    clear = function () {
        this.setState({
            input:'',
            firstNumber:0,
            secondNumber:0,
            operator:''

        });
    };

    pressDigit = function (val) {
        if(this.state.firstNumber!==0){
            this.setState({
                secondNumber:val
            });
        }
        if(this.state.firstNumber==0){
            this.setState({
                input:val,
                firstNumber:val
            });
        }

    }

    pressOperator = function (currentOperator) {
        this.setState({firstNumber: parseInt(this.state.input), input: '', operator: currentOperator});
    }

    evaluate = function () {
        this.setState({
            secondNumber: parseInt(this.state.input)
        })
    }

    render(){
        return(
            <div className="calculator">
                <div className="inputExpression" >
                    <div>{this.state.firstNumber}{this.state.operator}{this.state.secondNumber}</div>
                </div>
                <div className="keyholder">
                    <div className="calculator-row">
                        <button className="button" onClick={() => this.pressDigit(1)}>1</button>
                        <button className="button" onClick={() => this.pressDigit(2)}>2</button>
                        <button className="button" onClick={() => this.pressDigit(3)}>3</button>
                        <button className="button" onClick={() => this.pressDigit(4)}>4</button>
                        <button className="button" onClick={() => this.pressDigit(5)}>5</button>
                        <button className="button" onClick={() => this.pressDigit(6)}>6</button>
                        <button className="button" onClick={() => this.pressDigit(7)}>7</button>
                        <button className="button" onClick={() => this.pressDigit(8)}>8</button>
                        <button className="button" onClick={() => this.pressDigit(7)}>9</button>
                        <button className="button" onClick={() => this.pressDigit(0)}>0</button>
                        <button className="button" onClick={() => this.pressOperator('+')}> + </button>
                        <button className="button" onClick={() => this.pressOperator('-')}> - </button>
                        <button className="button" onClick={() => this.pressOperator('/')}> / </button>
                        <button className="button" onClick={() => this.pressOperator('*')}> * </button>
                        <button className="button" onClick={() => this.evaluate() }> = </button>
                        <button className="button" onClick={() => this.clear()}> clear </button>

                    </div>
                </div>
            </div>
        );
    }

}
