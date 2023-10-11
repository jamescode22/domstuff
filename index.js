const main = document.getElementsByTagName("main")[0];

const pageContent = [
  {
    tag: "div",
    className: "headingsDiv",
    children: [
      {
        tag: "h3",
        content: "Heading 1",
      },
      {
        tag: "h3",
        content: "Heading 2",
      },
      {
        tag: "h3",
        content: "Heading 3",
      },
    ],
  },
  {
    tag: "div",
    className: "textDiv",
    children: [
      {
        tag: "p",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi tempore velit suscipit aliquid. Ducimus, ipsa libero modi, vero unde quidem repellat accusamus dignissimos neque dolores atque ullam commodi quisquam!",
      },
      {
        tag: "p",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi tempore velit suscipit aliquid. Ducimus, ipsa libero modi, vero unde quidem repellat accusamus dignissimos neque dolores atque ullam commodi quisquam!",
      },
      {
        tag: "p",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi tempore velit suscipit aliquid. Ducimus, ipsa libero modi, vero unde quidem repellat accusamus dignissimos neque dolores atque ullam commodi quisquam!",
      },
    ],
  },
  {
    tag: "div",
    className: "imageDiv",
    children: [
      {
        tag: "div",
        styleTags: [{ prop: "background-image", val: "url(./pic1.jpg)" }],
        "data-caption": "NUTS",
      },
      {
        tag: "div",
        styleTags: [{ prop: "background-image", val: "url(./pic2.jpg)" }],
        "data-caption": "PLANE",
      },
      {
        tag: "div",
        styleTags: [{ prop: "background-image", val: "url(./pic3.jpg)" }],
        "data-caption": "HOUSE",
      },
    ],
  },
];

function makeTagFromObject(obj) {
  const { tag, content, className, styleTags, children, ...attributes } = obj;

  const newTag = document.createElement(tag);
  if (content) {
    const newText = document.createTextNode(content);
    newTag.appendChild(newText);
  }
  if (className) {
    newTag.classList.add(className);
  }
  if (attributes) {
    for (const prop in attributes) {
      newTag.setAttribute(prop, attributes[prop]);
    }
  }
  if (styleTags && Array.isArray(styleTags)) {
    for (const styleTag of styleTags) {
      newTag.style.setProperty([styleTag.prop], styleTag.val);
    }
  }
  return newTag;
}

const getLoadButton = document.querySelector(".nav");

getLoadButton.addEventListener("click", () => {
  // remove all children from main
  main.replaceChildren();
  pageContent.forEach((item) => {
    const parentTag = makeTagFromObject(item);

    item.children.forEach((child) => {
      parentTag.appendChild(makeTagFromObject(child));
    });

    main.appendChild(parentTag);
  });
});
