export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployeee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any
}

const teacher3: Teacher = {
    firstName: 'Manu',
    lastName: 'Castro',
    fullTimeEmployeee: true,
    yearsOfExperience: 2,
    location: 'Bogotá',
    contact: true
}

console.log(teacher3)
