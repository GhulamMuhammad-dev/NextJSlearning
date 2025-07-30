// lib/db.ts

export type Department = {
  id: string;
  name: string;
  head: string;
};

export type Course = {
  id: string;
  title: string;
  code: string;
  departmentId: string;
  credits: number;
  professorId: string;
};

export type Professor = {
  id: string;
  name: string;
  email: string;
  departmentId: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[]; // course IDs
  departmentId: string;
};

export const departments: Department[] = [
  { id: 'cs', name: 'Computer Science', head: 'Dr. Ayesha Riaz' },
  { id: 'it', name: 'Information Technology', head: 'Dr. Zeeshan Malik' },
];

export const professors: Professor[] = [
  { id: 'prof1', name: 'Dr. Ayesha Riaz', email: 'ayesha@university.edu', departmentId: 'cs' },
  { id: 'prof2', name: 'Dr. Zeeshan Malik', email: 'zeeshan@university.edu', departmentId: 'it' },
  { id: 'prof3', name: 'Dr. Ahmed Khan', email: 'ahmed@university.edu', departmentId: 'cs' },
];

export const courses: Course[] = [
  {
    id: 'cs101',
    title: 'Introduction to Programming',
    code: 'CS101',
    departmentId: 'cs',
    credits: 3,
    professorId: 'prof3',
  },
  {
    id: 'cs201',
    title: 'Data Structures and Algorithms',
    code: 'CS201',
    departmentId: 'cs',
    credits: 4,
    professorId: 'prof1',
  },
  {
    id: 'it101',
    title: 'Computer Networks',
    code: 'IT101',
    departmentId: 'it',
    credits: 3,
    professorId: 'prof2',
  },
];

export const students: Student[] = [
  {
    id: 'stu1',
    name: 'Ali Hassan',
    email: 'ali.hassan@student.university.edu',
    enrolledCourses: ['cs101', 'cs201'],
    departmentId: 'cs',
  },
  {
    id: 'stu2',
    name: 'Fatima Zahra',
    email: 'fatima.zahra@student.university.edu',
    enrolledCourses: ['cs101', 'it101'],
    departmentId: 'cs',
  },
  {
    id: 'stu3',
    name: 'Usman Tariq',
    email: 'usman.tariq@student.university.edu',
    enrolledCourses: ['it101'],
    departmentId: 'it',
  },
];
