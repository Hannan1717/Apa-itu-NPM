const chalk = require("chalk");
const validator = require("validator");
const log = console.log;

// console.log(validator.isEmail("Hannan@gmail.com"));

// console.log(validator.isMobilePhone("08123221233", "id-ID"));

// console.log(validator.isNumeric("1232432432s"));

// log(chalk.blue("Hello world!"));
// log(chalk.red("Hello world!"));
// log(chalk.white("Hello world!"));
// log(chalk.redBright("Hello world!"));

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.greenBright("Hello", chalk.underline.bgGreen("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(chalk.green("I am a green line " + chalk.blue.underline.bold("with a blue substring") + " that becomes green again!"));
