function binarySearch(array, targetNum) {
    const middle = Math.floor(array.length / 2);
    if(array[middle] === targetNum){
        console.log('찾았다', array[middle]);
        return
    }

    if(array[middle] > targetNum){
        const leftNum = array.slice(0,middle);
        console.log('작아', array[middle])
        console.log('leftNum', leftNum)
        return binarySearch(leftNum, targetNum)
    }else {
        const rightNum = array.slice(middle);
        console.log('크네', array[middle])
        console.log('rightNum', rightNum)
        return binarySearch(rightNum, targetNum)
    }
}
let numArray = [1,3,6,20,25,100];
binarySearch(numArray, 1);