function countTruthy(arr) {
    let count = 0;
for(let i = 0; i<arr.length; i++){
    if(typeof(arr[i])==='number' && arr[i] >0){
        count++
    }
}
 return count
}
module.exports = countTruthy