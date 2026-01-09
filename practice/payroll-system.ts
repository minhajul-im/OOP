/**
Background: A payroll system calculates salaries for different employee types. A general Employee class calculates salary based on hours worked, while ContractEmployee (a derived class) might have a different payment calculation, like a fixed contract rate. The payroll system processes all employee types and expects consistent results. In the future we might need more salary calculation logic.

Question: How would you design the Employee and ContractEmployee classes to ensure the payroll system handles both without needing special conditions?
 */

interface IEmployee {
  username: string;
  password: string;
  getInfo(): string;
}

abstract class Employee implements IEmployee {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  getInfo(): string {
    return `Username: ${this.username}, Password: ${this.password}`;
  }
}

interface IHasSalary {
  getSalary(): number;
}

class GeneralEmployee extends Employee implements IHasSalary {
  private hours: number = 0;
  constructor(username: string, password: string) {
    super(username, password);
  }

  getSalary(): number {
    return 0;
  }

  setHours(num: number) {
    this.hours = this.hours + num;
  }

  getTotalHours(): number {
    return this.hours;
  }
}

class ContractEmployee extends Employee implements IHasSalary {
  constructor(username: string, password: string) {
    super(username, password);
  }
  getSalary(): number {
    return 0;
  }
}

class PayrollSystem {
  private employees: (IEmployee & IHasSalary)[] = [];
  addEmployee(employee: IEmployee & IHasSalary) {
    this.employees.push(employee);
  }

  processPayroll() {
    this.employees.forEach((e) => {
      console.log(e.getInfo());
    });
  }

  giveSalary() {
    this.employees.forEach((e) => {
      console.log(e.getSalary());
    });
  }
}

const payroll = new PayrollSystem();
const general = new GeneralEmployee("general", "general");
const contract = new ContractEmployee("contract", "contract");
payroll.addEmployee(general);
payroll.addEmployee(contract);
payroll.processPayroll();
payroll.giveSalary();
