let inputArr = process.argv.slice(2); // input which stores argument from command line after `node fo.js ______`
let command = inputArr[0]; // tree or organise or help

switch (command) {
  case "tree":
    console.log("Tree Implemented");
    break;
  case "organise":
    console.log("Organise Implemented");
    break;
  case "help":
    helpfn();
    break;
  default:
    console.log("Invalid input");
}

function helpfn() {
  console.log(`
  List of all the commands for use in this program:
  
    1) tree : To display the directory structure of the current directory
    
    node fo.js tree <path>

    2) organise : To organise the files in the current directory
    
    node fo.js organise <path>

    3) help : To display the list of all the commands
    
    node fo.js help
    `);
}
