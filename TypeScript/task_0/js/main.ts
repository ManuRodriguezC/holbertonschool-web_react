interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'Manu',
    lastName: 'Rodriguez',
    age: 28,
    location: 'Bogotá'
};

const student2: Student = {
    firstName: 'Manu',
    lastName: 'Rodriguez',
    age: 28,
    location: 'Bogotá'
};

const studentsList: Student[] = [student1, student2];

const myTable = document.createElement('table')

studentsList.forEach(student => {
    const row = document.createElement('tr')

    const nameCol = document.createElement('td')
    const nameText = document.createTextNode(student.firstName)
    nameCol.appendChild(nameText)

    const locationCol = document.createElement('td')
    const locationText = document.createTextNode(student.location)
    locationCol.appendChild(locationText)

    row.appendChild(nameCol)
    row.appendChild(locationCol)

    myTable.appendChild(row)
})

document.body.appendChild(myTable)
