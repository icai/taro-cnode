import { useCallback, useState } from "react";

const useObjState = (initialState) => {
  const [state, setState] = useState(initialState);


  const setObjState = useCallback((newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }, []);

  return [state, setObjState];
}

export default useObjState;
