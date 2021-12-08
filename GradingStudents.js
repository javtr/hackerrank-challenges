function gradingStudents(grades) {
    
    let arrayRet = [];

    for (let i = 0; i < grades.length; i++) {
        
        if (grades[i] < 38 || (grades[i] % 5) == 0) {
            arrayRet[i] = grades[i];
        }else{
            if ((grades[i] % 5) > 2) {
                arrayRet[i] = grades[i] + (5 - (grades[i] % 5));
            }else{
                arrayRet[i] = grades[i];
            }
        }
        
    }

    return arrayRet;

}


console.log(gradingStudents([73,67,38,33]));

