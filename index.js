let array = [2, 4, 12, 3, 1];

console.log(findMinAndRemove(array));

function findMinAndRemove(array){
  var min = array[0];

  for(let i = 0; i < array.length; i++)
  {
    if(array[i] < min)
    {
      min = array[i];
    };
  };
  return min;
}

function insertionSort(array){

}
