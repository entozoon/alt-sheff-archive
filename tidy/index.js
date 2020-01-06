var glob = require("glob");
const { readdirSync, readdir } = require("fs");
const path = require("path");

console.log("\nlet's do this!\n");

// glob("../events/*", {}, function(er, files) {
//   files = files.filter(f => f.includes("."));
//   console.log(files);
// });

let files = readdirSync("../events", { withFileTypes: true });
// directories only
dirs = files.filter(f => f.isDirectory()).map(dirent => dirent.name);

console.log(`dirs found: ${dirs.length}`);

dirs.forEach(dir => {
  dir = path.resolve(`${__dirname}/../events`, dir);
  // console.log(dir);
  readdir(dir, (err, files) => {
    if (files.length == 2) {
      console.log(
        "hmm, actually they're all legit.. I guess there are just both /event/name.html and /event/name/index.html"
      );
    }
  });
});
