let min = 6;
let minLength = 5;
let email, password, passwordNew, passwordOld;
let adminLog = 'admin@gmail.com';
let adminPass = 'AdminPass';
let userLog = 'user@gmail.com';
let userPass = 'UserPass';
let changePass;
email = prompt('Enter an email: ', '');
if (email === null || email === '') {
    alert('Canceled.');
} else if (email.length < min) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email !== userLog && email !== adminLog) {
    alert('I don’t know you');
} else {
    password = prompt('Enter a password: ', '');
    if (password === null || password === '') {
        alert('Canceled.');
    } else if (password !== userPass && password !== adminPass) {
        alert('Wrong password.');
    } else {
        if (email === userLog && password === userPass) {
            changePass = confirm('Do you want to change your password?', '');
            if (changePass === false) {
                alert('You have failed the change.');
            } else {
                passwordOld = prompt('Enter an old password: ', '');
                if (passwordOld === null || passwordOld === '') {
                    alert('Canceled.');
                } else if (passwordOld !== userPass) {
                    alert('Wrong password.');
                } else {
                    passwordNew = prompt('Enter new password: ', '');
                    if (passwordNew.length < minLength) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        let passwordNewRepeat = prompt('Enter new password again: ', '');
                        if (passwordNewRepeat === passwordNew) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }
            }
        } else if (email === adminLog && password === adminPass) {
            changePass = confirm('Do you want to change your password?', '');
            if (changePass === false) {
                alert('You have failed the change.');
            } else {
                passwordOld = prompt('Enter an old password: ', '');
                if (passwordOld === null || passwordOld === '') {
                    alert('Canceled.');
                } else if (passwordOld !== adminPass) {
                    alert('Wrong password.');
                } else {
                    passwordNew = prompt('Enter new password: ', '');
                    if (passwordNew.length < minLength) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        let passwordNewRepeat = prompt('Enter new password again: ', '');
                        if (passwordNewRepeat === passwordNew) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }
            }
        }
    }
}
