import { createStore } from "solid-js/store";
import invariant from "tiny-invariant";

interface QxNodeProps {
  id: string;
  text: string;
  editting: boolean;
}

const initialNodes = [
  { id: "1", text: "First Input", editting: false },
  { id: "2", text: "Second Input", editting: false },
  { id: "3", text: "Third Input", editting: false },
];

const [nodes, setNodes] = createStore<QxNodeProps[]>(initialNodes);

function getNode(id: string) {
  const node = nodes.find((node) => node.id === id);
  invariant(node, `Node with id ${id} not found`);
  return node;
}

function newNode() {
  const id = Math.random().toString(36).substring(7);
  const newNode = { id, text: "New Node", editting: true };
  return newNode;
}

export { getNode, newNode, nodes, setNodes };
