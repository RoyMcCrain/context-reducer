import React, { useContext, useReducer, Dispatch } from "react";

export const AppStateContext = React.createContext(null as any);
export const DispatchContext = React.createContext<Dispatch<any>>(null as any);

type ProviderProps = {
  initialState: any;
  reducer: (state: any, action: any) => any;
  children: JSX.Element;
};
export const Provider: React.FC<ProviderProps> = ({
  initialState,
  reducer,
  children
}): JSX.Element => {
  console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
export const useDispatch = () => useContext(DispatchContext);
