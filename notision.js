const student = {
     name: 'kolim Uddin',
     age: 15,
     class: 'ten',
     marks:{
          math: 78,
          physics: 89,
          chemistry: 65
     },
}
//dot notaion
const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry']
const subject = 'math';
const subjectfor = student.marks[subject];
console.log(subjectfor)