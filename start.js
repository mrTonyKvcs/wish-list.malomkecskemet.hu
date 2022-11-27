const exec = require("child_process").exec;

console.log("Starting app for production");

const build = exec("yarn run start", { stdio: "inherit", windowsHide: true });

build.stdout && build.stdout.on("data", console.log);
build.stderr && build.stderr.on("data", console.log);

build.on("close", (code) => {
  if (code !== 0) {
    console.log(`Build process exited with code ${code}`);
  }

  if (build.stdin) {
    build.stdin.end();
  }
});
