const addContact = () => {
    let cName = document.querySelector('#name').ariaValueMax.toLocaleUpperCase;
    let cNumber = document.querySelector('#number').ariaValueMax;
    let displaycontact = document.querySelector('#display_contact');


if (cName === '' || cNumber === '' ) {
    displayContact.innerHTML = 'Please enter information!';
    displayContact.style.color = 'red';
} else{
    sessionStorage.setItem(cName, cNumber);
    displayContact.innerHTML = '';
    displayContact.style.color = 'green';
  }

  setTimeout(() => {
    displayContact.innerHTML = '';
  }, 5000);
};