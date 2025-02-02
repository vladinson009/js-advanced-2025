class Company {
  departments = {};
  addEmployee(name, salary, position, department) {
    for (const each of arguments) {
      if (!each) {
        throw new Error('Invalid input!');
      }
    }
    if (Number(salary) < 0) {
      throw new Error('Invalid input!');
    }
    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {};
    }
    this.departments[department][name] = { salary, position };
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    const result = [];
    const best = {
      department: '',
      avgSalary: 0,
      employees: [],
    };
    for (const each in this.departments) {
      const currentDepartment = Object.values(this.departments[each]);
      const currentAvg =
        currentDepartment.reduce((acc, b) => acc + b.salary, 0) / currentDepartment.length;
      if (best.avgSalary < currentAvg) {
        best.department = each;
        best.avgSalary = currentAvg;
        best.employees = Object.entries(this.departments[each]);
      }
    }
    result.push(
      `Best Department is: ${best.department}`,
      `Average salary: ${best.avgSalary.toFixed(2)}`
    );
    best.employees.sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
    for (const [key, value] of best.employees) {
      result.push(`${key} ${value.salary} ${value.position}`);
    }
    return result.join('\n');
  }
}
let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
