import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlicer";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL_API!;

  const loadRobots = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const robotsArray = await response.json();

      if (!response.ok) {
        return;
      }

      dispatch(loadRobotsActionCreator(robotsArray.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [apiUrl, dispatch]);

  return { loadRobots };
};

export default useApi;
