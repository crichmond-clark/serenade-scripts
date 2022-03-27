serenade.app("chrome").command("github pulls", async (api) => {
  await api.pressKey("g");
  await api.pressKey("p");
});

serenade.app("chrome").command("github actions", async (api) => {
  await api.pressKey("g");
  await api.pressKey("a");
});

serenade.app("chrome").command("github code", async (api) => {
  await api.pressKey("g");
  await api.pressKey("c");
});

serenade.app("chrome").command("github issues", async (api) => {
  await api.pressKey("g");
  await api.pressKey("i");
});

serenade.app("chrome").command("command palette", async (api) => {
  await api.pressKey("k", ["command", "option"]);
});

serenade.app("chrome").command("github search", async (api) => {
  await api.pressKey("s");
});
serenade.app("chrome").command("github notifications", async (api) => {
  await api.pressKey("g");
  await api.pressKey("n");
});

serenade.app("chrome").command("github home", async (api) => {
  await api.pressKey("g");
  await api.pressKey("d");
});

serenade.app("chrome").command("github down", async (api) => {
  await api.pressKey("j");
});

serenade.app("chrome").command("github up", async (api) => {
  await api.pressKey("k");
});
