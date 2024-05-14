import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function emailReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
      return { ...state, data: action?.value, error: '' };
    case enumReducer.change.error:
      return { ...state, error: action?.error };
    case enumReducer.reset:
      return { data: '', error: '' };
  }
}

export function passwordReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
      return { ...state, data: action?.value, error: '' };
    case enumReducer.change.error:
      return { ...state, error: action?.error };
    case enumReducer.reset:
      return { data: '', error: '' };
  }
}

export function adornmentPasswordReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
      return { data: !state?.data, type: !state?.data ? 'password' : 'text' };
    case enumReducer.reset:
      return { data: false, type: 'text' };
  }
}

export function errorServer(state, action) {}
