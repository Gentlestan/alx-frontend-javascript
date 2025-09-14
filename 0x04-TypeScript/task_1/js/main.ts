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

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    age: 45,
    numberOfReports: 5
};
console.log(director1);
