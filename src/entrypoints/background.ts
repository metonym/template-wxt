export default defineBackground(() => {
  // biome-ignore lint/suspicious/noConsole: test
  console.log("Hello background!", { id: browser.runtime.id });
});
