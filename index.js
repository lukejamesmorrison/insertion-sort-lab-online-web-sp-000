let array = [2, 4, 12, 3, 1];

console.log(insertionSort(array));

function findMinAndRemove(array){
  var min = array[0];
  var minIndex = 0;

  for(let i = 0; i < array.length; i++)
  {
    if(array[i] < min)
    {
      min = array[i];
      minIndex = i;
    };
  };
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  var sorted = [];

  while(unsorted.length > 0)
  {
    sorted.push(findMinAndRemove(array));
  };

  return sorted;
}
