import { Setter } from "solid-js";

const Dragger = ({
  setLeft,
  setTop,
}: {
  setLeft: Setter<number>;
  setTop: Setter<number>;
}) => {
  function onMouseDown(e: MouseEvent) {
    function onMouseMove(e: MouseEvent) {
      setLeft((prev) => Math.round(prev + e.movementX));
      setTop((prev) => Math.round(prev + e.movementY));
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  return <div class="dragger" onMouseDown={onMouseDown} />;
};

export default Dragger;
