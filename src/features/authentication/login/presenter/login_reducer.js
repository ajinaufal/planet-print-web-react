import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function usernameReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
      return { ...state, data: action?.value };
    case enumReducer.change.error:
      return { ...state, error: action?.error };
    case enumReducer.reset:
      return { data: '', error: '' };
  }
}
