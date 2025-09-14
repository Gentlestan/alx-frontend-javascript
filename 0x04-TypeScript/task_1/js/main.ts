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
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function that returns first letter of firstName + full lastName
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
