export default function updateStudentGradByCity(
    students,
    city,
    newGrads,
){
    const filterStudents = students.filter(
        (student) => student.location === city,
    );

    conts gradeStudents = filterStudents.map(
        (student) => {
            for (const gradeInfo of newGrades) {
                if (student.id === gradeInfo.student.Id) {
                    student.grade = gradeInfo.grade;
                }
            }
            if (student.grade === undefined) {
                student.grade = 'N/A';
            }
            return student;
        },
    );
    return gradeStudents;
}
