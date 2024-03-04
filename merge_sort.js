
const array1 = [23,75,12,68,20,13,60,12,22]
const array2 = [234,654,275,96,245,127,235]
const array3 = [21,76,89,34,40,69,32]



function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr,  ...rightArr]

}

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
