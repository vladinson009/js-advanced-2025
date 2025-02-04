function personAndTeacher() {
  class Person {
    name;
    email;

    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }
  return {
    Person,
    Teacher,
  };
}
const instance = personAndTeacher();
const teach = new instance.Teacher('q', 'dq', 'de');
console.log(teach);
