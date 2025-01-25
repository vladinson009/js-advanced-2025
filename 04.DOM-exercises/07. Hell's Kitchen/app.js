function solve() {
  //Add Event Listener
  document.querySelector('#btnSend').addEventListener('click', onClick);
  //get references on initialization, not on each click
  const BestRestaurantOutput = document.querySelector('#bestRestaurant p');
  const WorkersOutput = document.querySelector('#workers p');
  const textarea = document.querySelector('textarea');

  //our result
  const restaurants = {};
  const bestOne = {
    bestAvgSalary: Number.MIN_SAFE_INTEGER,
    bestRestaurant: '',
  };
  //function called on click event
  function onClick() {
    //parse input from JSON string to Array
    const inputData = JSON.parse(textarea.value);

    //manipulate input data to make the right format and fill the result
    for (let data of inputData) {
      const [restaurant, employeesData] = data.split(' - ');
      const employees = employeesData.split(', ');
      // if restaurant does not exist in result -> create an empty object
      if (restaurants[restaurant] == undefined) {
        restaurants[restaurant] = {};
      }
      //manipulate data to make the right format and fill the result
      for (let employee of employees) {
        let [employeeName, salary] = employee.split(' ');
        salary = Number(salary);
        //how we set nested data in our Object?
        // example for underneath code -> restaurants['Pepe Pizza']['George'] = 1500
        // this will create prop in restaurants{ "Pepe Pizza": {"George": 1500} }
        restaurants[restaurant][employeeName] = salary;
      }
    }
    //iterate our result Object to find best avg salary & set best restaurant name
    for (let [restaurantName, data] of Object.entries(restaurants)) {
      const salaries = Object.values(data);
      const bestAvg = salaries.reduce((acc, el) => el + acc, 0) / salaries.length;

      if (bestAvg > bestOne.bestAvgSalary) {
        bestOne.bestAvgSalary = bestAvg;
        bestOne.bestRestaurant = restaurantName;
      }
    }
    //sort employees from best restaurant by salary and return sorted tuples [[name, salary],[name, salary]]
    const sortedEmployeesBySalary = Object.entries(restaurants[bestOne.bestRestaurant]).sort(
      (a, b) => b[1] - a[1]
    );
    //format output data for each employee
    const formattedEmployees = sortedEmployeesBySalary.map(
      (el) => `Name: ${el[0]} With Salary: ${el[1]}`
    );
    const bestSalary = sortedEmployeesBySalary[0][1];

    //set textContent to our output DOM elements
    BestRestaurantOutput.textContent = `Name: ${
      bestOne.bestRestaurant
    } Average Salary: ${bestOne.bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    WorkersOutput.textContent = formattedEmployees.join(' ');
  }
}
