import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import {
  initialPasswordState,
  PasswordField,
  PasswordFields,
  PasswordState,
  PasswordInputState,
} from '../../lib/types';

export enum ActionTypes {
  UPDATE_STATE = 'UPDATE_STATE',
  CLEAR = 'CLEAR',
  ERROR = 'ERROR',
  EDIT = 'EDIT',
}

type PasswordActions =
  | { type: ActionTypes.UPDATE_STATE; field: PasswordField; payload: string }
  | { type: ActionTypes.CLEAR }
  | { type: ActionTypes.ERROR; payload: string }
  | { type: ActionTypes.EDIT; payload: PasswordInputState };

const PasswordReducer = (state: PasswordState, action: PasswordActions): PasswordState => {
  switch (action.type) {
    case ActionTypes.UPDATE_STATE:
      console.log(action);
      if (!action.field) return state;
      if (action.field === PasswordFields.password)
        return {
          ...state,
          [PasswordFields.password]: action.payload,
          [PasswordFields.suggestion]: '',
        };
      return {
        ...state,
        [action.field]: action.payload,
      };

    case ActionTypes.ERROR:
      return {
        ...initialPasswordState,
        [PasswordFields.error]: action.payload,
      };
    case ActionTypes.EDIT:
      return {
        ...initialPasswordState,
        ...action.payload,
        editing: action.payload.name,
      };
    default:
      return initialPasswordState;
  }
};

type PasswordContextProps = {
  state: PasswordState;
  dispatch: (value: PasswordActions) => void;
};

export const PasswordContext = createContext<PasswordContextProps>({
  state: initialPasswordState,
  dispatch: () => null,
});

const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(PasswordReducer, initialPasswordState);

  const store = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return <PasswordContext.Provider value={store}>{children}</PasswordContext.Provider>;
};

const usePassword = () => {
  return useContext(PasswordContext);
};

export { usePassword, PasswordProvider };
