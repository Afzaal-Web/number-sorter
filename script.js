const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
  updateUI(inputValues.sort());

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


/* This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array
 with the first element. Then it inspects the next element and swaps it backward into the sorted array until
  it is in a sorted position, and so on */

// Insertion Sort builds a sorted section by inserting each element
// Insertion Sort starts from the second element, assuming the first is already sorted.
// into its correct position among the already sorted elements.
// It shifts larger values right to make space for the new element.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
return array;
}



sortButton.addEventListener("click", sortInputArray);