// Simulated local storage data handling for published courses

const STORAGE_KEY = 'publishedCourses';

export const getPublishedCourses = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const publishCourse = (course) => {
  const courses = getPublishedCourses();
  courses.push(course);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
};

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
