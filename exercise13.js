let originalData = [1, 2, 3, { label: 'shared object' }];

// slice() creates a shallow copy of the array.
// Be aware that nested objects/arrays are still shared by reference.
let clonedData = originalData.slice();

console.log('Original:', originalData);
console.log('Clone:', clonedData);
console.log('Different array objects:', originalData !== clonedData);
console.log('Nested object still shared:', originalData[3] === clonedData[3]);
