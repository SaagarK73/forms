const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

const firstNameError = document.querySelector('.firstName');
const lastNameError = document.querySelector('.lastName');
const emailError = document.querySelector('.email');
const phoneError = document.querySelector('.phone');
const passwordError = document.querySelector('.password');
const confirmPasswordError = document.querySelector('.confirmPassword');

firstName.addEventListener('input', function() {
    const regex = new RegExp("^[^0-9]+$");
    const ifMatches = regex.test(firstName.value);
    if(!ifMatches) {
        firstNameError.textContent = 'There should be no numbers in name';
    }else {
        firstNameError.textContent = '';
    };
});

lastName.addEventListener('input', function() {
    const regex = new RegExp("^[^0-9]+$");
    const ifMatches = regex.test(lastName.value);
    if(!ifMatches) {
        lastNameError.textContent = 'There should be no numbers in name';
    }else {
        lastNameError.textContent = '';
    };
});

email.addEventListener('input', function () {
    const regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    const ifMatches = regex.test(email.value);
    if(!ifMatches) {
        emailError.textContent = 'Enter a valid email';
    }else {
        emailError.textContent = '';
    };
})

phone.addEventListener('input', function() {
    const regex = new RegExp("[0-9]{10}");
    const ifMatches = regex.test(phone.value);
    if(!ifMatches) {
        phoneError.textContent = 'Phone number should be 10 digits';
    }else {
        phoneError.textContent = '';
    };
})

password.addEventListener('input', function() {
    const regex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$');
    const ifMatches = regex.test(password.value);
    console.log(password.value);
    if(!ifMatches) {
        passwordError.textContent = 'Password should contain min. one capital letter, one symbol & one number';
    }else {
        passwordError.textContent = '';
    };
});

confirmPassword.addEventListener('input', function() {
    if(password.value === confirmPassword.value) {
        confirmPasswordError.textContent = '';
    }else {
        confirmPasswordError.textContent = 'Passwords do not match';
    }
});


