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
interface PrintTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Function using parameter destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

