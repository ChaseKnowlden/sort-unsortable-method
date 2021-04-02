const data = [
    {
        name: 'John',
        title: 'Developer',
    },
    {
        name: 'Meg',
        title: 'CEO',
    },
    {
        name: 'Ken',
        title: 'Designer',
    },
    {
        name: 'Will',
        title: 'Developer',
    }
];

const sortedData = data.sort(employee => {
    if (employee.title === "Developer") {
        return -1
    } else {
        return 1
    }
})