// // Simulated local storage data handling for published courses

// const STORAGE_KEY = 'publishedCourses';

// export const getPublishedCourses = () => {
//   return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// };

// export const publishCourse = (course) => {
//   const courses = getPublishedCourses();
//   courses.push(course);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
// };
export const dummySummaries = [
  'Summary of Page 1: Lorem ipsum dolor sit amet.',
  'Summary of Page 2: Consectetur adipiscing elit.',
  'Summary of Page 3: Sed do eiusmod tempor incididunt.',
];


export const enrollInCourse = (courseId) => {
  let enrolled = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
  if (!enrolled.includes(courseId)) {
    enrolled.push(courseId);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));
  }
};

export const getEnrolledCourses = () => {
  return JSON.parse(localStorage.getItem('enrolledCourses')) || [];
};

export const markCourseComplete = (courseId) => {
  let completed = JSON.parse(localStorage.getItem('completedCourses')) || [];
  if (!completed.includes(courseId)) {
    completed.push(courseId);
    localStorage.setItem('completedCourses', JSON.stringify(completed));
  }
};

export const getCompletedCourses = () => {
  return JSON.parse(localStorage.getItem('completedCourses')) || [];
};

// File: src/utils/mockApi.js

// Simulated AI summaries
export const generateSummaries = (pages = 5) =>
  Array.from({ length: pages }, (_, i) => ({
    page: i + 1,
    summary: `Summary of Page ${i + 1}: Lorem ipsum dolor sit amet...`,
  }));

// Sample avatars
export const getAvatars = () => [
  { id: 1, name: 'Ava', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDQ7-BH6bZ5cbI7KzILrX5wBF-cHeLgi1xXNkWSUGVLJ-LeWqz0ml2tF5T-SKnrMaRYQ&usqp=CAU' },
  { id: 2, name: 'Leo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IS0uNY0LUyZuv30ISO5mBq_R1_gUDkMANVjUFa0e33imnUjdumY41zkl16tRFF50FFE&usqp=CAU' },
  { id: 3, name: 'Maya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4CZtqZI6xCIXvfwdlqYfrsWcx4EtjOUQDj3rQ3FavUHuQrxBGA_eUeQ8p7fFBsEcYF4&usqp=CAU' },
  { id: 4, name: 'Zane', image: 'https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?semt=ais_items_boosted&w=740' },
];

// Mock published courses (stored globally for simulation)
let publishedCourses = [];

export const publishCourse = (course) => {
  publishedCourses.push({ ...course, id: Date.now() });
};

export const getPublishedCourses = () => publishedCourses;
