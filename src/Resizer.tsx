import { Setter } from "solid-js";

const Resizer = ({
  setWidth,
  setHeight,
}: {
  setWidth: Setter<number>;
  setHeight: Setter<number>;
}) => {
  function onMouseDown(e: MouseEvent) {
    function onMouseMove(e: MouseEvent) {
      setWidth((prev) => Math.round(prev + e.movementX));
      setHeight((prev) => Math.round(prev + e.movementY));
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  return <div class="resizer" onMouseDown={onMouseDown} />;
};

export default Resizer;
