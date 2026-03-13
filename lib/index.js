import chalk from "chalk";

console.log(chalk.greenBright.bold("\nBaileys for botproject1100\n"));
console.log(chalk.whiteBright("Maintained by: ") + chalk.yellowBright("Sky-Mansion"));
console.log(chalk.whiteBright("Thanks to: ") + chalk.grey("@itsliaaa,@yumevtc,@whiskeysockets and @adiwajshing <3"));
console.log(chalk.gray("-----------v1.0.7-----------\n\n"));
console.log(chalk.gray("------------------------------\n"));
const latestUpdate = new Date("2026-03-13");
console.log(chalk.yellowBright("✅ Latest update: ") + chalk.whiteBright(latestUpdate.toLocaleDateString()));
console.log(chalk.gray("------------------------------\n"));

import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './Store/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;