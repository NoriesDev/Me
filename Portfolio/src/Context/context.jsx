import PropTypes from 'prop-types';
import { useState, createContext, useContext, useEffect } from 'react';

const BackgroundContextObj = createContext();

export const BackgroundContextProvider = ({ children }) => {
  const [currentBg, setCurrentBg] = useState('/BG4.png');

  useEffect(() => {
    document.documentElement.style.backgroundImage = `url('${currentBg}')`;
    document.documentElement.style.backgroundAttachment = `fixed`;

    localStorage.theme = currentBg ? 'dark' : 'light';
  }, [currentBg]);

  const changeBackground = () => {
    setCurrentBg((prevBg) => (prevBg === '/BG.png' ? '/BG4.png' : '/BG.png'));
  };

  return (
    <BackgroundContextObj.Provider value={{ currentBg, changeBackground }}>
      <main className={currentBg ? 'prevBg' : 'currentBg'}>
        {children}
      </main>
    </BackgroundContextObj.Provider>
  );
};

export const useBackgroundContext = () => {
  return useContext(BackgroundContextObj);
};

BackgroundContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
