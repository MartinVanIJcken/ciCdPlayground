import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Martin van IJcken",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["red, green and yellow", "flaky e2e tests", "iterative development process"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins",
    // What do you want to learn in this workshop?
    expectations: [],
  },
});
