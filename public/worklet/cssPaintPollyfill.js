(async function () {
  // ⚠️ Handle Firefox and Safari by importing a polyfill for CSS Pain
  (async function () {
    if (CSS["paintWorklet"] === undefined) {
      await import("https://unpkg.com/css-paint-polyfill");
    }

    // CSS.paintWorklet.addModule("./worklet/premadeShapes.js");
  })();
})();
