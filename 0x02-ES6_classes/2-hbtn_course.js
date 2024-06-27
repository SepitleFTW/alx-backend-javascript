class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * @param {String} name
     */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = length;
  }

  get length() {
    return this.length;
  }

  /**
     * @param {Array} students
     */
  set students(students) {
    if (students instanceof Array) {
      this.students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get students() {
    return this.students;
  }
}

export default HolbertonCourse;
