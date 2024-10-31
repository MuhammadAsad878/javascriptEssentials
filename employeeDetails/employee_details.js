// const employees = [
//   { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
//   { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
//   { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },

//   //... More employee records can be added here
// ];

const employees = [
  { id: 1, name: "Asad", age: 23, department: "CS", salary: 90000 },
  { id: 4, name: "Alice Smith", age: 18, department: "IT", salary: 50000 },
  { id: 3, name: "Bob", age: 40, department: "AI", salary: 20000 },
  { id: 4, name: "Johnson", age: 32, department: "SE", salary: 40000 },
  { id: 5, name: "Rob Van", age: 27, department: "HR", salary: 45000 },
  { id: 6, name: "Kane", age: 57, department: "HR", salary: 4000 },
];

const empDetails = document.getElementById("employeesDetails");

function displayEmployees() {
  let empList = employees
    .map(
      (emp) =>
        `<p class="empList"> # <u>${emp.id}</u>  <u>${emp.name}</u> : ${emp.age} : ${emp.department} : ${emp.salary} </p> `
    )
    .join("");
  empDetails.innerHTML = "<hr>" + empList;
}

function calculateTotalSalaries() {
  let totalSalary =  employees.reduce((total,employee) =>  total + employee.salary,0);
  empDetails.innerHTML = `<p class="empSalary"> Total Salaries of employees is = ${totalSalary}$ </p>`;
}

function displayHREmployees() {
  let hrEmployees = employees.filter((emp) => emp.department === "HR");
  let empList = "";
  hrEmployees.forEach((emp) => {
    empList += `<p class="empList hr">#<u>${emp.id}</u> - Employee name = <u>${emp.name}</u> - Age = ${emp.age} - Department = ${emp.department} with Salary ${emp.salary} </p>`;
  });
  empDetails.innerHTML = "<hr>" + empList;
}

function findEmployeeById(Id) {
  let emp = employees.find((employee) => employee.id === Id);
  if(emp){
    let empInfo = `<hr> <p class="empList">#<u>${emp.id}</u> - Employee name = <u>${emp.name}</u> - Age = ${emp.age} - Department = ${emp.department} with Salary ${emp.salary} </p>`;
    empDetails.innerHTML = empInfo;
  }else{
    empDetails.innerHTML = '<p class="empList"> No User Found with this id "</p>';
  }
  



}
