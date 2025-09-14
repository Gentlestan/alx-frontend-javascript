interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Frank",
    lastName: "Uyi",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Abuja",
    age: 30
};

console.log(teacher1);

interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Director = {
    firstName: "Nneka",
    lastName: "Chimdalu",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "lagos",
    age: 45,
    numberOfReports: 5
};
console.log(director1);

// Interface describing the function signature
// Interface for the function
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Function using parameter destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

// Interface that describes the constructor’s signature
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface that describes the public shape of the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// The class itself
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a fixed string
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns only the first name
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentClassInterface = new StudentClass("Ada", "Lovelace");
console.log(student.displayName());   // "Ada"
console.log(student.workOnHomework()); // "Currently working"
