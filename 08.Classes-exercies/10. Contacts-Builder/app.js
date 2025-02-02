class Contact {
  firstName;
  lastName;
  phone;
  email;
  _online = false;

  static createContact(firstName, lastName, phone, email, isOnline) {
    return `<div class="title ${
      isOnline ? 'online' : ''
    }">${firstName} ${lastName}<button>&#8505;</button></div>
        <div class="info ">
          <span>&phone; ${phone}</span>
          <span>&#9993; ${email}</span>
        </div>`;
  }

  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
  get online() {
    return this._online;
  }
  set online(value) {
    this._online = value;
    if (this.article) {
      this.article.querySelector('div.title').classList.toggle('online', this._online);
    }
  }
  render(id) {
    //! create element;
    const contact = Contact.createContact(
      this.firstName,
      this.lastName,
      this.phone,
      this.email,
      this._online
    );
    this.article = document.createElement('article');
    this.article.innerHTML = contact;
    // ! set display to none
    const divInfo = this.article.querySelector('div.info');
    divInfo.style.display = 'none';
    // ! add event listener to each button
    this.article
      .querySelector('button')
      .addEventListener(
        'click',
        () => (divInfo.style.display = divInfo.style.display !== 'none' ? 'none' : 'block')
      );
    // ! append article
    document.getElementById(id).appendChild(this.article);
  }
}

let contacts = [
  new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
  new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
  new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
];

contacts.forEach((c) => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);
setTimeout(() => (contacts[2].online = true), 2000);
setTimeout(() => (contacts[2].online = false), 3000);
