const array = [34,52,61,52,21,10,35,90,23]

const array2 = [23,6,8,5,3,45,78,7,4,0,3,1,6,4,2]

const array3 = [5,4,3,8,1,7]

const arrayLost = [42,8,16,4,15,23]


// We will compare items consecutively and if they are out of place we'll swap

//The highest number will bubble its way to the right with each iteration

//we will be grabbing two items and trying to find the biggest number in array that will eventually bubble all the way to the right

function bubbleSort(arr){
    for (let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr.length -1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}

bubbleSort(array);
bubbleSort(array2);
bubbleSort(array3);
bubbleSort(arrayLost);