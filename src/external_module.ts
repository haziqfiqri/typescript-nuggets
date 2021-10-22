export class Calculator { 
    public firstNum: number
    public secondNum: number

    constructor (firstNum: number, secondNum: number) { 
        this.firstNum = firstNum
        this.secondNum = secondNum
    }

    public Addition = () => { 
        return this.firstNum + this.secondNum
    }
}