const array = [36,32,19,49,23,6,26,11,40,39]

const array2 = [43,645,3331,566,35,66,12,5,774,3,2,6,7,3,7,1,3,56,9,0,6,3,6,8]

// need a current minimum, current item,
//current minimun is always the first one

//loop through array and as its progressing we're checking if any current item
//is smaller than the current minimum

//when we find a smaller one, we swap those two, which results in 
//one item being sorted in our array

//we loop to search for current minimum, as it progresses through the array,
//it updates current minimun if applicable

//once it finds the current minimum it continues to search the array
//for a smaller number. if not found current minimum gets placed after
//the last sorted item
 

function selectSort(arr){
    for (let i = 0; i < arr.length-1; i++){
        let currentMin = i;
        for(let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[currentMin]){
                currentMin = j;
            }
            if (currentMin != i){
                let temp = arr[i]
                arr[i] = arr[currentMin];
                arr[currentMin] = temp;
            }
        }
    }
    console.log(arr);
}

selectSort(array);
selectSort(array2);