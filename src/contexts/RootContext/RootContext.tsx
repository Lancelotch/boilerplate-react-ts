import React, { Fragment, useContext, useReducer } from "react";

enum ActionType {
  SignIn = "signIn",
  SignOut = "signOut"
}

interface IProps {
  children: any;
}

interface IState {
  isAuthenticated: boolean;
  language: string;
  handleSignIn?: (payload: object)=>void;
  handleSignOut?: ()=>void;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  isAuthenticated: false,
  language: "en"
};

const CreateRootContext = React.createContext<IState>({
  ...initialState
});

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case "signIn":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
};

const RootContext: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    reducer,
    initialState
  );

  const handleSignIn: (payload: any) => void = function(payload) {
    dispatch({
      type: ActionType.SignIn,
      payload: payload
    });
  };

  return (
    <Fragment>
      <CreateRootContext.Provider
        value={{
          ...state,
          handleSignIn
        }}
      >
        {children}
      </CreateRootContext.Provider>
    </Fragment>
  );
};

export const useRootContext = () => useContext(CreateRootContext);
export default RootContext;
