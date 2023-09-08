import { useState, useCallback } from "react";

const useKeyNavigation = (
  initialIndex = -1,
  initialFloor = -1,
  selectCallback: () => void
) => {
  const [focusIdx, setFocusIdx] = useState(initialIndex);
  const [floorIdx, setFloorIdx] = useState(initialFloor);

  const changeIdx = useCallback(
    (e: React.KeyboardEvent) => {
      const isFloor = floorIdx <= focusIdx;
      if (!isFloor && e.key === "ArrowDown") {
        setFocusIdx((preIdx) => preIdx + 1);
      }
      if (focusIdx > -1 && e.key === "ArrowUp") {
        setFocusIdx((preIdx) => preIdx - 1);
      }
      if (e.key === "Enter") {
        selectCallback();
      }
    },
    [focusIdx, floorIdx]
  );

  return {
    focusIdx,
    setFocusIdx,
    floorIdx,
    setFloorIdx,
    changeIdx,
  };
};
export default useKeyNavigation;
