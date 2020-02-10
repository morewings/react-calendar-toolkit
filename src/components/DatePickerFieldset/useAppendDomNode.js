const useAppendDomNode = () => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  return node;
};

export default useAppendDomNode;
