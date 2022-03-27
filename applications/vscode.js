serenade.app("code").command("new pane", async (api) => {
  await api.pressKey("l", ["option", "control"]);
});

// formatting

const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

// terminal

serenade.app("code").command("toggle int", async (api) => {
  await api.pressKey("l", ["control", "command"]);
});

serenade.app("code").command("close int", async (api) => {
  await api.pressKey("j", ["control", "command"]);
});

serenade.app("code").command("type <%text%>", async (api, cmd) => {
  await api.typeText(cmd.text);
});

serenade.app("code").command("type snake <%text%>", async (api, cmd) => {
  const text = toSnakeCase(cmd.text);
  await api.typeText(text);
});

serenade.app("code").command("type kebab <%text%>", async (api, cmd) => {
  const text = toKebabCase(cmd.text);
  await api.typeText(text);
});
serenade.app("code").command("focus int", async (api) => {
  await api.pressKey("y", ["command", "control"]);
});

serenade.app("code").command("new int pane", async (api) => {
  await api.pressKey("y", ["command", "control"]);
  await api.pressKey("k", ["alt", "control"]);
});

serenade.app("code").command("format file", async (api) => {
  await api.pressKey("f", ["option", "shift"]);
});

serenade.app("code").command("new int", async (api) => {
  await api.pressKey("k", ["command", "control"]);
});
serenade.app("code").command("paste int", async (api) => {
  await api.pressKey("v", ["command"]);
});

serenade.app("code").command("kill int", async (api) => {
  await api.pressKey("g", ["command", "control"]);
});

serenade.app("code").command("list", async (api) => {
  await api.typeText("ls -a");
  await api.pressKey("enter");
});

serenade.app("code").command("file copy", async (api) => {
  await api.typeText("cp ");
});

serenade.app("code").command("clear", async (api) => {
  await api.typeText("clear");
  await api.pressKey("enter");
});

serenade.app("code").command("pwd", async (api) => {
  await api.typeText("pwd");
  await api.pressKey("enter");
});

serenade.app("code").command("ssh", async (api) => {
  await api.typeText("ssh ");
});

serenade.app("code").command("cd", async (api) => {
  await api.typeText("cd ");
});

serenade.app("code").command("cd <%text%>", async (api, cmd) => {
  await api.typeText("cd ");
  await api.typeText(cmd.text);
  await api.pressKey("tab");
});

serenade.app("code").command("make directory", async (api) => {
  await api.typeText("mkdir ");
});
