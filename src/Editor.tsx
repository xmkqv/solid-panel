import { createSignal, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import invariant from "tiny-invariant";
import { animate } from "motion";

import Dragger from "./Dragger";
import Resizer from "./Resizer";
import { nodes, setNodes, getNode, newNode } from "./Nodes";

const N_PREVIEW_LINES = 3;

const Editor = ({ initialIds }: { initialIds: string[] }) => {
  const [ids, setIds] = createSignal(initialIds);

  const [left, setLeft] = createSignal(0);
  const [top, setTop] = createSignal(0);
  const [width, setWidth] = createSignal(300);
  const [height, setHeight] = createSignal(500);

  return (
    <div
      class="editor-container"
      style={{
        width: `${width()}px`,
        height: `${height()}px`,
        left: `${left()}px`,
        top: `${top()}px`,
      }}
    >
      <Dragger setLeft={setLeft} setTop={setTop} />
      <div class="editor-content">
        <For each={ids()}>{QxNode}</For>
        <button
          class="add-button"
          onClick={(e) => {
            const node = newNode();
            setNodes((prev) => [...prev, node]);
            setIds((prev) => [...prev, node.id]);
          }}
        />
      </div>
      <Resizer setWidth={setWidth} setHeight={setHeight} />
    </div>
  );
};

const QxNode = (id: string) => {
  const [editting, setEditting] = createSignal(false);
  const [text, setText] = createSignal("");

  onMount(() => {
    const node = getNode(id);
    setText(node.text);
    setEditting(node.editting);
  });

  function handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && e.metaKey) {
      setEditting(false);
      setNodes((n) => n.id == id, "text", text());
    }
  }

  function handleClick(e: MouseEvent) {
    if (e.detail === 2) setEditting(true);
  }

  return (
    <div class="input-item" onClick={handleClick}>
      {editting() ? (
        <textarea
          value={text()}
          onInput={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditting(false)}
        />
      ) : (
        <div>{text()}</div>
      )}
    </div>
  );
};

export default Editor;
