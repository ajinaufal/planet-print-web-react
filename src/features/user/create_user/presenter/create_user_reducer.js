import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

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
      return { data: action?.data };
    case enumReducer.reset:
      return { data: undefined };
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
      return { data: action?.data };
    case enumReducer.reset:
      return { data: undefined };
  }
}

export function confirmPasswordReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
      return { data: action?.data };
    case enumReducer.reset:
      return { data: undefined };
  }
}

export function phoneNumberReducer(state, action) {
  switch (action?.type) {
    case enumReducer.change.data:
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
