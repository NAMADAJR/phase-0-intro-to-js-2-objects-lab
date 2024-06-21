// Write your solution in this file!
let employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    salary: 50000
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const clone = { ...employee };
    delete clone[key];
    return clone;
  }
  
  // Destructive delete (modifies the original object)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
