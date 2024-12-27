export async function bubbleSort(
    array: number[],
    updateVisual: (arr: number[]) => void,
    delay: number
  ) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          updateVisual([...array]); // Update visualization
          await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay
        }
      }
    }
    return array;
  }
  