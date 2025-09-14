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

class DirectorClass implements DirectorInterface {
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

class TeacherClass implements TeacherInterface {
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



function createEmployee(salary: number | string): DirectorClass | TeacherClass {
  // If salary is a number and less than 500, return Teacher
  if (typeof salary === 'number' && salary < 500) {
    return new TeacherClass();
  }
  // Otherwise, return Director
  return new DirectorClass();
}

// Example usage
console.log(createEmployee(200));   
console.log(createEmployee(1000));  
console.log(createEmployee('$500')); 