// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a property non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a property destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
 