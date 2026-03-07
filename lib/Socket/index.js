import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
import { DisconnectReason } from '../Types/index.js';
import { Boom } from '@hapi/boom';

// export the last socket layer
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    return makeCommunitiesSocket(newConfig);
};

export const makeWASocketWithAutoReconnect = (config, onReconnect) => {
    let sock = makeWASocket(config);
    let isReconnecting = false;

    const attachReconnectHandler = () => {
        sock.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
                if (shouldReconnect && !isReconnecting) {
                    isReconnecting = true;
                    config.logger?.info('Connection closed natively inside Baileys, auto-reconnecting...');

                    // Cleanup old socket cleanly
                    sock.ev.removeAllListeners();
                    try { sock.ws.close(); } catch { }

                    // Re-instantiate
                    setTimeout(async () => {
                        sock = makeWASocket(config);
                        isReconnecting = false;
                        attachReconnectHandler();
                        if (onReconnect) onReconnect(sock);
                    }, 3000);
                }
            }
        });
    };

    attachReconnectHandler();
    return sock;
};

export default makeWASocket;