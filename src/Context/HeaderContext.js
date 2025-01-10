import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const useHeader = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleHeader = (visible) => {
    setIsHeaderVisible(visible);
  };

  return (
    <HeaderContext.Provider value={{ isHeaderVisible, toggleHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
