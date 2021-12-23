function getTotalX(a, b) {
    let ints = b[0] - a[1];
    let init = a[1];
    let nFactors = 0;

    for (let i = 1; i <= ints+1; i++) {

        if ((init%a[0] == 0) && (init%a[1] == 0)) {
            
            for (let j = 0; j < b.length; j++) {

                if (b[j]%init != 0) {
                    break;
                }

                if (j==b.length-1) {
                    nFactors++;
                }                
            }
        }
        init++;
    }


    return nFactors;
}


console.log(getTotalX([2,4], [16,32, 96]));



