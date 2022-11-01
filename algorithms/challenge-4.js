function calculateGrade(marks) {
    let F = 1 >= 49;
    let E = 50 >= 59;
    let D = 60 >= 69;
    let C = 70 >= 79;
    let B = 80 >= 89;
    let A = 90 >= 100;

    
    if(marks / marks.length <= 49){
        return F;
    }else if(marks / marks.length <= 59 ){
        return E;
    }else if(marks / marks.length <= 69 ){
        return D;
    }else if(marks / marks.length <= 79 ){
        return C;
    }else if(marks / marks.length <= 89){
        return B;
    }else if(marks / marks.length <= 100){
        return A;
    }
 
 }
  module.exports =calculateGrade
