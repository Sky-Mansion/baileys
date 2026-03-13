import chalk from "chalk";

console.log(chalk.greenBright.bold("\nBaileys for botproject1100\n"));
console.log(chalk.whiteBright("Maintained by: ") + chalk.yellowBright("Sky-Mansion"));
console.log(chalk.whiteBright("Thanks to: ") + chalk.grey("@itsliaaa,@yumevtc,@whiskeysockets and @adiwajshing <3"));
console.log(chalk.gray("-----------v1.0.4-----------\n\n"));
const latestUpdate = new Date("2026-03-13");
console.log(chalk.yellowBright("✅ Latest update: ") + chalk.whiteBright(latestUpdate.toLocaleDateString()));
console.log(chalk.gray("------------------------------\n"));


if (process.env.SILENCE_SIGNAL_LOGS !== 'false') {

// ====================== STRONG GLOBAL PATCH — SILENCE ALL SESSION CLOSING LOGS ======================
// Runs immediately when ANYONE imports this package (ESM top-level guarantee)
const originalLog = console.log;
const originalError = console.error;
const originalDir = console.dir;

const isSessionLog = (args) => {
    const joined = args
        .map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg).slice(0, 200)))
        .join(' ');
    return joined.includes('Closing session') ||
           joined.includes('stale open session') ||
           joined.includes('prekey bundle') ||
           joined.includes('SessionEntry');
};

console.log = function (...args) {
    if (isSessionLog(args)) return;
    return originalLog.apply(console, args);
};

console.error = function (...args) {
    if (isSessionLog(args)) return;
    return originalError.apply(console, args);
};

console.dir = function (...args) {
    if (isSessionLog(args)) return;
    return originalDir.apply(console, args);
};
// ====================== END PATCH ======================

}

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