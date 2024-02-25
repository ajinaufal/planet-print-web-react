export function nameInputReducer(state, action) {
    switch (action?.type) {
        case 'change':
            return { value: action?.value };
        default:
            return { ...state };
    }
}

export function emailInputReducer(state, action) {
    switch (action?.type) {
        case 'change':
            return { value: action?.value };
        case 'validation':
            // eslint-disable-next-line
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(state?.value)) {
                return { value: state?.value, error: 'Invalid email address' };
            }
            if (!((state?.value || '').length > 0)) {
                return { value: state?.value, error: 'Invalid or empty email address' };
            }
            return { value: state?.value };
        default:
            return { ...state };
    }
}

export function phoneInputReducer(state, action) {
    switch (action?.type) {
        case 'change':
            const emailRegex = /(?<!\.)\d+(?!\.)/g;
            if (!emailRegex.test(action?.value)) {
                return { value: action?.value, error: 'Invalid email address' };
            }
            return { value: action?.value };
        default:
            return { ...state };
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
            return { value: state?.value };
        default:
            return { ...state };
    }
}

export function fetchRegisterReducer(state, action) {
    switch (action?.type) {
        case 'start':
            return { loading: true, data: [] };
        case 'success':
            return { loading: false, data: action?.data };
        case 'failed':
            return { loading: false, error: action?.error };
        default:
            break;
    }
}
