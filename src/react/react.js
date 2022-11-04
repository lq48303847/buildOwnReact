export function createElement(type, props, ...children) {
  return {
    type: type,
    props: { ...props, children: children?.length > 1 ? [...children] : children },
  };
}

function createDomFromElement(element) {
  if (Array.isArray(element)) {
    return element.map((e) => createDomFromElement(e));
  } else if (typeof element === "string") {
    return document.createTextNode(element);
  } else {
    const dom = document.createElement(element.type);
    if (element.props?.children) {
      const childrenDom = createDomFromElement(element.props.children);
      // dom.appendChild(childrenDom);
      console.log("createDomFromElement children", childrenDom);
    }
    console.log("createDomFromElement", element, dom);
    // 设置props 属性
    return dom;
  }
}

export function render(element, container) {
  if (!element || !container) {
    return;
  }
  const dom = createDomFromElement(element);
  console.log("render", element, dom, container);
  container.appendChild(dom);
}

export default {
  createElement,
  render,
};
