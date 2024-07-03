export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Cairn',
    lastName: 'Douglas',
    age: 49,
    location: 'Egypt'
};

const student2: Student = {
    firstName: 'Sam',
    lastName: 'Witwicky',
    age: 34,
    location: 'Christchurch',
};

const studentsList: Array<Student> = [
    student1,
    student2.
];


export const renderTable = (studentsList: Array<Student>): void => {
    //table tag created
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);

    //insert the headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

    for (const student of studentsList) {
        const studentRow = document.createElement('tr')
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
      }

      document.body.insertAdjacentElement('beforeend', table);

}

renderTable(studentsList);
