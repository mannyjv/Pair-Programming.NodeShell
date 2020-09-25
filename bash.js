const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  //const file = fileName.toString().trim();

  if (cmd.slice(0, 3) === "cat") {
    cat(cmd);
  } else if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
