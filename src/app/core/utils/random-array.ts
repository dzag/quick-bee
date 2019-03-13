import { random } from 'lodash';

export function randomArray (arr, count = 3) {
  const randomIndex = () => random(0, arr.length - 1, false);
  const prevIndexes = [];

  const result = [];
  for (let i = 0; i < count; i++) {

    let index = randomIndex();

    while (prevIndexes.includes(index)) {
      index = randomIndex();
    }

    prevIndexes.push(index);
    result.push(arr[index]);
  }

  return result;
}
