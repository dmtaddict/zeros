module.exports = function zeros(expression) {
    let numbers= expression.match(/\d+/g).map(Number);
    let result2 = 0;
    let result5 = 0;
    let j = 0;
    numbers.forEach(function(number){
        if(expression.charAt(expression.indexOf(number, j)+number.toString().length+1)!=='!'||
            expression.length === expression.indexOf(number, j)+number.toString().length + 1) {//если просто факториал
            let dec2 = number;
            while (dec2 >= 2){
                dec2 = Math.floor(dec2/2);
                result2 += dec2;
            }
            let dec5 = number;
            while (dec5 >= 5){
                dec5 = Math.floor(dec5/5);
                result5 += dec5;
            }
        }
        else if(expression.charAt(expression.indexOf(number, j)+number.toString().length+1) ==='!'&&
            (number % 2) === 0) {//если двойной факториал и четное
            let dec2 = number;
            while (dec2 >= 2){
                dec2 = Math.floor(dec2/2);
                result2 += dec2;
            }
            let dec5 = number/2;
            while (dec5 >= 5){
                dec5 = Math.floor(dec5/5);
                result5 += dec5;
            }
        }
        else if(expression.charAt(expression.indexOf(number, j)+number.toString().length+1) ==='!'&&
            (number % 2) !== 0){//если двойной факториал и нечетное
            let resultn1 = 0;
            let resultn2 = 0;
            let decn1 = number;
            while (decn1 >= 5){
                decn1 = Math.floor(decn1/5);
                resultn1+=decn1;
            }
            let decn2 = (number - 1)/2;
            while (decn2 >= 5){
                decn2 = Math.floor(decn2/5);
                resultn2+=decn2;
            }
            result5 = result5 + (resultn1 - resultn2);
        }
        j++;
        while(expression.charAt(j) !=='*'){
            if (expression.length <= j) {
                break;
            }
            j++;
        }
    });
     return (result2<=result5)?result2:result5;

};

