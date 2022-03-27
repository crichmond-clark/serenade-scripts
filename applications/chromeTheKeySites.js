serenade.app('chrome').command("go site leader <%text%>", async (api, cmd) => {
  await api.pressKey("l", ["command"]);

  if (cmd.text == "qa") {
    await api.typeText("https://key-schoolleaders.qa-keylabs.com");
  } else if (cmd.text == "local") {
    await api.typeText("ksl.dev.local:8010");
  } else if (cmd.text == "prod") {
    await api.typeText("https://schoolleaders.thekeysupport.com");
  }

  await api.pressKey("enter");
});

serenade.app('chrome').command("go site keystone <%text%>", async (api, cmd) => {
  await api.pressKey("l", ["command"]);

  if (cmd.text == "qa") {
    await api.typeText("https://keystone.qa-keylabs.com");
  } else if (cmd.text == "local") {
    await api.typeText("keystone.dev.local:8010");
  } else if (cmd.text == "prod") {
    await api.typeText("https://keystone.thekeysupport.com");
  }

  await api.pressKey("enter");
});

serenade.app('chrome').command("go site safeguarding <%text%>", async (api, cmd) => {
  await api.pressKey("l", ["command"]);

  if (cmd.text == "qa") {
    await api.typeText("https://safeguarding.qa-keylabs.com");
  } else if (cmd.text == "local") {
    await api.typeText("safeguarding.dev.local:8008");
  } else if (cmd.text == "prod") {
    await api.typeText("https://safeguarding.thekeysupport.com");
  }

  await api.pressKey("enter");
});
