import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [isShown, setShown] = useState(initialState);

  const toggle = useCallback(
    (value) => {
      setShown(value || !isShown);
    },
    [isShown]
  );

  return [isShown, toggle];
};

export default useToggle;
