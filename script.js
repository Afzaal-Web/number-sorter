const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
  updateUI(selectionSort(inputValues));

}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
}

// Bubble Sort repeatedly compares and swaps adjacent elements.
// In ascending order, the largest values "bubble up" to the end in each pass.
// In descending order, the smallest values "bubble up" to the end in each pass.
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

  return array;
}

/*  Selection sort works by finding the smallest value in the array, then swapping 
 it with the first value in the array.Then, it finds the next smallest value in the array, 
 and swaps it with the second value in the array.It continues iterating through the array until
  it is completely sorted. */

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(`Comparing ${array[j]} and ${array[minIndex]}`);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Only swap if needed
    if (minIndex !== i) {
      console.log(`Swapping ${array[i]} and ${array[minIndex]}`);
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    } else {
      console.log(`No swap needed for index ${i} (${array[i]})`);
    }

    console.log(`After pass ${i + 1}:`, array);
    console.log('----------------------');
  }

  return array;
};


sortButton.addEventListener("click", sortInputArray);