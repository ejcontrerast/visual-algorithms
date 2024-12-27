export const bubbleSort = (array: number[], onUpdate: (arr: number[]) => void, delay: number = 500) => {
    const arr = [...array]; // Create a copy
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                onUpdate([...arr]); // Notify the component to re-render
                // Delay using a promise for async/await
                const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
                sleep(delay);
            }
        }
    }
};