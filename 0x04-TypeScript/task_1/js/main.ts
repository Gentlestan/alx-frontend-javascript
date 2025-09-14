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

const teacher2: Teacher = {
    firstName: "Ikechukwu",
    lastName: "Oraka",
    fullTimeEmployee: false,
    location: "Lagos",
    age: 28
};
