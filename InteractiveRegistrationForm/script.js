document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        
        if (validateForm()) {
            console.log('Form is valid. Submitting...');
            // In a real app, you would submit the form here:
            // form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        resetErrors();

        // Username validation
        if (username.value.trim().length < 5) {
            setError(username, 'Username must be at least 5 characters long.');
            isValid = false;
        }

        // Email validation
        if (!isValidEmail(email.value.trim())) {
            setError(email, 'Please enter a valid email address.');
            isValid = false;
        }
        
        // Password validation
        if (password.value.trim().length < 8) {
            setError(password, 'Password must be at least 8 characters long.');
            isValid = false;
        }
        
        // Confirm Password validation
        if (confirmPassword.value.trim() !== password.value.trim()) {
            setError(confirmPassword, 'Passwords do not match.'); 
            isValid = false;
        }

        return isValid;
    }

    function setError(inputElement, message) {
        const errorElement = document.getElementById(inputElement.id + 'Error');
        errorElement.textContent = message;
        inputElement.classList.add('invalid');
    }

    function resetErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.textContent = '');
        
        const invalidInputs = document.querySelectorAll('.invalid');
        invalidInputs.forEach(el => el.classList.remove('invalid'));
    }

    function isValidEmail(email) {
        // A simple regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});