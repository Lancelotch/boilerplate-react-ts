import React, { Fragment, useContext, useState } from "react";

interface IProps {
  children: any;
}

interface IState {
  isShowObjects: boolean;
  handleShowObjects: () => void;
}

const initialState = {
  isShowObjects: false,
  handleShowObjects: () => {}
};

const CreateObjectsContext = React.createContext<IState>({
  ...initialState
});

const ObjectsContext: React.FC<IProps> = ({ children }) => {
  const [isShowObjects, setShowObjects] = useState(initialState.isShowObjects);
  const handleShowObjects = function() {
    setShowObjects(!isShowObjects);
  };

  return (
    <Fragment>
      <CreateObjectsContext.Provider
        value={{
          isShowObjects,
          handleShowObjects
        }}
      >
        {children}
      </CreateObjectsContext.Provider>
    </Fragment>
  );
};

export const useObjectsContext = () => useContext(CreateObjectsContext);
export default ObjectsContext;
