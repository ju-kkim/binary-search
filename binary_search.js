function binarySearch(array, targetNum) {
    const middle = array.length / 2;
    if(array[middle] === targetNum){
        console.log('찾았다', array[middle]);
        return
    }

    if(array[middle] > targetNum){
        const leftNum = array.slice(0,middle);
        console.log('작아', array[middle])
        console.log('leftNum', leftNum)
        return binarySearch(leftNum, targetNum)
    }
}
let numArray = [1,3,6,20,25,100];
binarySearch(numArray, 1);