import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function userListReducer(state, action) {
    switch (action?.type) {
        case enumReducer.network.start:
            return { error: '', data: undefined, loading: true };
        case enumReducer.network.success:
            return { error: '', data: action?.data, loading: false };
        case enumReducer.network.failure:
            return { error: action?.error, data: undefined, loading: false };
        case enumReducer.change.data:
            return { ...state, data: action?.data };
    }
}

export function userDeleteReducer(state, action) {
    switch (action?.type) {
        case enumReducer.network.start:
            return { error: '', data: undefined, loading: true };
        case enumReducer.network.success:
            return { error: '', data: action?.data, loading: false };
        case enumReducer.network.failure:
            return { error: action?.error, data: undefined, loading: false };
    }
}
