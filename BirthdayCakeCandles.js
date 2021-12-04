function birthdayCakeCandles(candles) {
    
    let contMax = 0;
    let tempMax = 0;

    candles.forEach(element =>{
        if (element > tempMax) {
            tempMax = element;
            contMax = 1;
        }else if(element == tempMax){
            contMax++;
        }
    })

    return contMax;

}


console.log(birthdayCakeCandles([3, 2, 1, 3, 7, 7]));
