import chalk from "chalk";

console.log(chalk.greenBright.bold("\nBaileys for botproject1100\n"));
console.log(chalk.whiteBright("Maintained by: ") + chalk.yellowBright("Sky-Mansion"));
console.log(chalk.whiteBright("Thanks to: ") + chalk.grey("@itsliaaa,@yumevtc,@whiskeysockets and @adiwajshing <3"));
console.log(chalk.gray("-----------v1.0.4-----------\n\n"));


if (process.env.SILENCE_SIGNAL_LOGS !== 'false') {

// ====================== PATCH: SILENCE libsignal-wasm SESSION LOGS ======================
const originalConsoleLog = console.log;
console.log = function (...args) {
    const msg = args[0];
    if (typeof msg === 'string' && msg.includes('Closing session')) {
        return; // completely ignore these logs
    }
    originalConsoleLog.apply(console, args);
};

// Also silence possible console.error / console.debug variants (rare but safe)
const originalConsoleError = console.error;
console.error = function (...args) {
    const msg = args[0];
    if (typeof msg === 'string' && msg.includes('Closing session')) {
        return;
    }
    originalConsoleError.apply(console, args);
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