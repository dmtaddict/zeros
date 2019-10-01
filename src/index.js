module.exports = function zeros(expression) {
    let numbers= expression.split('*');
    let result2 = 0;
    let result5 = 0;
    numbers.forEach(function(number){
        if(number.indexOf('!!') < 0)  {//если просто факториал
            for (let i=1; i<=number;i++){
                if(i%2===0) {
                    result2++;
                }
                if(i%5===0) {
                    result5++;
                }
                if(i%25===0){
                    result5++;
                }
            }
        }
        else if(number.indexOf('!!')>0&&number.slice(0, number.indexOf('!!'))%2===0 ) {//если двойной факториал и четное
            for (let i=2; i<=number;i+=2){
                if(i%2===0) {
                    result2++;
                }
                if(i%5===0) {
                    result5++;
                }
                if(i%25===0){
                    result5++;
                }
            }
        }
        else {//если двойной факториал и нечетное
            for (let i=1; i<=number;i+=2){

                if(i%5===0) {
                    result5++;
                }
                if(i%25===0){
                    result5++;
                }
            }
        }

    });
    return (result2<=result5)?result2:result5;
};

