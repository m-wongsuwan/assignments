let employees = []
function Employee(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function () {
    console.log(`Name: ${this.name}, Job title: ${this.title}, Salary: $${this.salary}/year, Status: ${this.status}`)
}

let newEmployee = new Employee("Rita", "Coordinator", 20000)
let newEmployee1 = new Employee("Stavros", "Janitor", 10000)
newEmployee1.status = "Contract"
let newEmployee2 = new Employee("Joe", "CEO", 300000)



const newEmployee3 = {...newEmployee2}
console.log(newEmployee3)