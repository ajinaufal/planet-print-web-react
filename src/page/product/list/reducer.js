export function fetchProductListReducer(state, action) {
    switch (action?.type) {
        case 'start':
            return { loading: true, data: [] };
        case 'success':
            return { loading: false, data: action?.data };
        case 'failed':
            return { loading: false, error: action?.error, data: state?.data };
        default:
            break;
    }
}
