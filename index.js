let initArray = [2, 4, 12, 3];

console.log(findMinAndRemove(initArray));

function findMinAndRemove(array){

  var min = array[0];
  var minIndex = 0;

  for(let i = 0; i < array.length; i++)
  {
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    };
  }

  return min;

  // if index is less that next index, remove and set as min
}

function insertionSort(array){

}
