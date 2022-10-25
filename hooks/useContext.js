import React from 'react';

const ValueContext = React.createContext();
const SetterContext = React.createContext();

const ContextProvider = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ValueContext.Provider value={isOpen}>
      <SetterContext.Provider value={setIsOpen}>
        {children}
      </SetterContext.Provider>
    </ValueContext.Provider>
  );
};

const useContextValue = () => {
  const context = React.useContext(ValueContext);
  if (context === undefined) {
    throw new Error('ValueContext referenced outside of the context');
  }

  return context;
};

const useContextSetter = () => {
  const context = React.useContext(SetterContext);
  if (context === undefined) {
    throw new Error('SetterContext referenced outside of the context');
  }

  return context;
};

export {ContextProvider, useContextValue, useContextSetter};
