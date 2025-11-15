export default defineContentScript({
  matches: ["*://*.google.com/*"],
  main() {
    // biome-ignore lint/suspicious/noConsole: test
    console.log("Hello content.");
  },
});
