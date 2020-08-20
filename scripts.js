function checkFields(e){
    let email = document.getElementById('email');
    let country = document.getElementById('country');
    let zipcode = document.getElementById('zipcode');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('password-confirmation');
    let errorField = document.getElementById('error-message');
    const validateEmail = (email)  => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    if (email.value == ''|| !validateEmail(email.value)) {
        errorField.innerHTML = 'Please enter a valid Email.';
        e.preventDefault();
        return false; 
    }

    if (country.value.trim() == '') {
        errorField.innerHTML = 'Please enter a Country.';
        e.preventDefault();
        return false; 
    }

    if (zipcode.value.trim() == '' || isNaN(zipcode.value.trim()) || zipcode.value.trim().length < 5) {
        errorField.innerHTML = 'Please enter a valid zipcode.';
        e.preventDefault();
        return false; 
    }

    if (password.value.trim() == '') {
        errorField.innerHTML = 'Please enter a password.';
        e.preventDefault();
        return false; 
    } else if (password.value.trim().length < 5) {
        errorField.innerHTML = 'Please enter a password with more than 5 characters.';
        e.preventDefault();
        return false; 
    }
    
    if (passwordConfirm.value == '' || passwordConfirm.value !== password.value) {
        errorField.innerHTML = 'Please confirm your password.';
        e.preventDefault();
        return false; 
    }
    alert('high five!')
}
document.getElementById('submit').addEventListener('click', checkFields);