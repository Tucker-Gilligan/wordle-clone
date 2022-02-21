import React from 'react';
import { styles } from '../components/Keyboard/types';

const useKeyboard = () => {
  const createRow = (keyString: string, onClick: (evt: any) => void) => {
    const keyArr = keyString.split(' ');
    const keyboardRow = keyArr.map(keyValue => {
      return (
        <button
          tabIndex={-1}
          onClick={onClick}
          key={`${keyValue}-button`}
          id={`${keyValue}-button`}
          style={styles.Key}
          value={keyValue}
        >
          {keyValue}
        </button>
      );
    });
    return keyboardRow;
  };
  
  const createKeyboard = (keyboardRows: string[], onClick: (evt: any) => void) => {
    return (
      <div style={styles.KeyboardContainer}>
        {keyboardRows.map((row, i) => {
          return (
            <div style={styles.KeyboardRow} key={`keyboard-row-${i}`}>
              {createRow(row, onClick)}
            </div>
          );
        })}
      </div>
    );
  };

  return {
    createKeyboard
  }
}

export default useKeyboard;
