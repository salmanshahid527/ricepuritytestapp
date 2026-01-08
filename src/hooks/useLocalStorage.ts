import { useState, useEffect, useRef } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const valueRef = useRef<T>(storedValue);

  useEffect(() => {
    valueRef.current = storedValue;
  }, [storedValue]);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsedValue = JSON.parse(item);
        setStoredValue(parsedValue);
        valueRef.current = parsedValue;
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = (value: SetValue<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(valueRef.current) : value;
      setStoredValue(valueToStore);
      valueRef.current = valueToStore;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
