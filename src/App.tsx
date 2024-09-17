import type { Component } from "solid-js";
import { IconTypes } from "solid-icons";
import { animate } from "motion";
import { createSignal, JSX } from "solid-js";

import "./app.css";

type Option = {
  name: string;
  icon?: IconTypes;
  onClick: (e: MouseEvent) => void;
};

interface DropdownProps {
  style: JSX.CSSProperties;
  options: Option[];
}

const App: Component<DropdownProps> = ({ options, style }) => {
  const [hoveredItem, setHoveredItem] = createSignal<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredItem(name);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (option: Option) => {
    option.onClick(new MouseEvent("click"));
  };

  return (
    <div style={style} class="dropdown">
      {options.map((option) => (
        <div
          // key={option.name}
          class="dropdown-option"
          onClick={() => handleClick(option)}
          onMouseEnter={() => handleMouseEnter(option.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div class="icon">
            {option.icon ? <option.icon /> : option.name.charAt(0)}
          </div>
          <span class="name">{option.name}</span>
          {hoveredItem() === option.name && (
            <div class="tooltip">{option.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
