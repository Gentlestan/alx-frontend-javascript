interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Use the exact class names the checker expects
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ❗ DO NOT CHANGE THIS FUNCTION
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// ✅ New functions for the next task

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Example calls
console.log(executeWork(createEmployee(200)));   // "Getting to work"
console.log(executeWork(createEmployee(1000)));  // "Getting to director tasks"

// String literal type allowing only "Math" or "History"
type Subjects = "Math" | "History";

// Function with parameter typed exactly as the checker expects
export function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}


// ✅ Example usage:
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
