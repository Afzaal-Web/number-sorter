const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
  updateUI(bubbleSort(inputValues));
 
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
}

// bubble sort
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // sorting started 
      if (array[j] < array[j + 1]) {
          console.log(array, array[j], array[j + 1]);
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
//  2,3,4,5,1
// 5,4,3,2,1
  return array;
}

sortButton.addEventListener("click", sortInputArray);