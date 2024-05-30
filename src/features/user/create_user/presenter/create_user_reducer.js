import enumReducer from '../../../../core/utils/enums/enum_change_reducer';
import { regexEnum } from '../../../../core/utils/enums/regex_enum';

export function roleListReducer(state, action) {
    switch (action?.type) {
        case enumReducer.network.start:
            return { error: '', data: undefined, loading: true };
        case enumReducer.network.success:
            return { error: '', data: action?.data, loading: false };
        case enumReducer.network.failure:
            return { error: action?.error, data: undefined, loading: false };
    }
}

export function createUserReducer(state, action) {
    switch (action?.type) {
        case enumReducer.network.start:
            return { error: '', data: undefined, loading: true };
        case enumReducer.network.success:
            return { error: '', data: action?.data, loading: false };
        case enumReducer.network.failure:
            return { error: action?.error, data: undefined, loading: false };
    }
}

export function usernameReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            return { data: action?.data };
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function emailReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            if (action?.data) {
                if (regexEnum.email.test(action?.data)) {
                    return { data: action?.data };
                } else {
                    return { data: action?.data, error: 'Please enter the appropriate email' };
                }
            } else {
                return { data: action?.data, error: 'Email is required' };
            }
        case enumReducer.reset:
            return { data: undefined, error: '' };
    }
}

export function firstNameReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            return { data: action?.data };
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function lastNameReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            return { data: action?.data };
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function passwordReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            if (action?.data) {
                if ((action?.data || '').length < 6) {
                    return {
                        data: action?.data,
                        error: 'Password must be at least 6 characters long',
                    };
                }
                return { data: action?.data };
            } else {
                return { data: action?.data, error: 'Password is required' };
            }
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function confirmPasswordReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            if (action?.data == action?.password) {
                return { data: action?.data };
            }
            return {
                data: action?.data,
                error: 'Confirm the password must be the same as the password',
            };
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function phoneNumberReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            if ((action?.data || '').length > 0) {
                if (regexEnum.phone_number.test(action?.data)) {
                    return { data: action?.data };
                } else {
                    return { data: action?.data, error: 'Phone number is not valid' };
                }
            }
            return { data: action?.data };
        case enumReducer.reset:
            return { data: undefined };
    }
}

export function roleReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            return { data: action?.data };
        case enumReducer.reset:
            return { data: '' };
    }
}

export function statusReducer(state, action) {
    switch (action?.type) {
        case enumReducer.change.data:
            return { data: !state?.data };
        case enumReducer.reset:
            return { data: false };
    }
}
