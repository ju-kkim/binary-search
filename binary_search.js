function binarySearch(array, targetNum) {
    const middle = array.length / 2;
    if(array[middle] === targetNum){
        console.log('찾았다', array[middle]);
        return
    }
}
let numArray = [1,3,6,20,25,100];
binarySearch(numArray, 20);