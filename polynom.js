//Вычисление слагаемых полинома вида P(x)=y+x^1+x^2+...+x^n
function squared(initialNumber, variable) {
    let squaredNumber = 1;
    let result = 0;
    while(squaredNumber * variable <= initialNumber) {
        squaredNumber = squaredNumber * variable;
        result = squaredNumber;
    }
    return result;
}
/**
 * 
 * @param {number} initialNumber, сумма одночленов
 * @param {number} variable, переменная x
 * @returns {Array}, массив одночленов в порядке убывания
 */
module.exports.parseSum = function(initialNumber, variable) {
    try {
        if((Number.isInteger(initialNumber) && initialNumber > 0) && (Number.isInteger(variable) && variable > 0)) {
            console.log(initialNumber);
            let lowestSquare = squared(initialNumber, variable);
            let finalDigitSet = [];
            finalDigitSet.push(lowestSquare);
            initialNumber = initialNumber - lowestSquare;
            console.log(initialNumber);
            while(initialNumber > 0) {
                console.log(initialNumber);
                lowestSquare = squared(initialNumber, variable);
                let newDigit = lowestSquare;
                if(newDigit > 0) {
                    finalDigitSet.push(newDigit)
                };
                initialNumber = initialNumber - lowestSquare;
                if(newDigit == 0) {
                    finalDigitSet.push(initialNumber);
                    initialNumber = 0;
                }
            }
            return finalDigitSet;
        } else {
            throw new Error('initialNumber and variable must be a positive integers');
        }
    } catch(error) {
        return error.message;
    }
}