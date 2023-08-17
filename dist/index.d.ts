import { LeaderboardResponse, ClientListResponse, PublicClientUserListResponse, LeaderboardOptions } from './types';
export * from './types';
export { Leaderboard } from './Leaderboard';
/**
 * Fetches the leaderboard data for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the leaderboard data or an error.
 */
export declare const getLeaderboard: (client: string, options?: LeaderboardOptions, useProxy?: boolean) => Promise<LeaderboardResponse | Error>;
/**
 * Fetches the list of clients.
 * @returns A promise that resolves to the client list or an error.
 */
export declare const getClientList: (useProxy?: boolean) => Promise<ClientListResponse | Error>;
/**
 * Fetches the public client user list for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the public client user list or an error.
 */
export declare const getPublicClientUserList: (client: string, options?: LeaderboardOptions, useProxy?: boolean) => Promise<PublicClientUserListResponse | Error>;
