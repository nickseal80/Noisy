import validator from '../validation';

document.addEventListener('DOMContentLoaded', async () => {
    try {

        /**
         * @property {Object} data
         * @property {string} data.loginRequiredMessage
         * @property {string} data.passwordRequiredMessage
         */
        const { data } = await window.axios.get(route('auth.get.sign-in_data'));

        const emailFormField = document.querySelector('.form-field.email-field');
        const passFormField = document.querySelector('.form-field.password-field');

        if (emailFormField && passFormField) {
            const emailField = emailFormField.querySelector('input');
            const emailFieldErrors = emailFormField.querySelector('.form-field-errors');

            emailField.addEventListener('input', (evt) => {
                if (validator.isEmpty(evt.target.value)) {
                    emailFieldErrors.innerHTML = data.loginRequiredMessage;
                } else {
                    emailFieldErrors.innerHTML = '';
                }
            });

            const passField = passFormField.querySelector('input');
            const passFieldErrors = passFormField.querySelector('.form-field-errors');

            passField.addEventListener('input', (evt) => {
                if (validator.isEmpty(evt.target.value)) {
                    passFieldErrors.innerHTML = data.passwordRequiredMessage;
                } else {
                    passFieldErrors.innerHTML = '';
                }
            });
        }
    } catch (err) {
        // TODO: error alert
        console.error(err);
    }

})
