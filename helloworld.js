
var page = tabris.create("Page", {
  title: "Creating multiple top level pages",
  topLevel: true
}).open();

tabris.create("TextView", {
  text: "Hello, world.",
  layoutData: {centerX: 0, centerY: 0}
}).appendTo(page);
