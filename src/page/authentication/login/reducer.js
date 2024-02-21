export function emailInputReducer(state, action) {
    switch (action?.type) {
        case 'change':
            return { value: action?.value };
        case 'validation':
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(state?.value)) {
                return { value: state?.value, error: 'Invalid email address' };
            }
            if (!((state?.value || '').length > 0)) {
                return { value: state?.value, error: 'Invalid or empty email address' };
            }
    }
}

export function passwordInputReducer(state, action) {
    switch (action?.type) {
        case 'change':
            return { value: action?.value };
        case 'validation':
            if (!((state?.value || '').length > 0)) {
                return {
                    value: state?.value,
                    error: 'Invalid or empty password address',
                };
            }
    }
}
