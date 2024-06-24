export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }

  export function taskLast() {
    return ' is okay';
  }

  export function taskNext() {
    let combination = 'But sometimes let';
    combination += taskLast();

    return combination;
  }
