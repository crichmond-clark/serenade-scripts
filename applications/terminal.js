serenade.app("iterm").command("list", async (api) => {
  await api.typeText("ls -a");
  await api.pressKey("enter");
});

serenade.app("iterm").command("file copy", async (api) => {
  await api.typeText("cp ");
});

serenade.app("iterm").command("clear", async (api) => {
  await api.typeText("clear");
  await api.pressKey("enter");
});

serenade.app("iterm").command("pwd", async (api) => {
  await api.typeText("pwd");
  await api.pressKey("enter");
});

serenade.app("iterm").command("ssh", async (api) => {
  await api.typeText("ssh ");
});

serenade.app("iterm").command("cd", async (api) => {
  await api.typeText("cd ");
});

serenade.app("iterm").command("cd <%text%>", async (api, cmd) => {
  await api.typeText("cd ");
  await api.typeText(cmd.text);
  await api.pressKey("tab")
});

serenade.app("iterm").command("make directory", async (api) => {
  await api.typeText("mkdir ");
});

serenade.app("iterm").command("open vim <%text%>", async (api, cmd) => {
  await api.typeText("vim ");
  await api.typeText(cmd.text);
});

serenade.app("iterm").command("open nvim <%text%>", async (api, cmd) => {
  await api.typeText("nvim ");
  await api.typeText(cmd.text);
});
