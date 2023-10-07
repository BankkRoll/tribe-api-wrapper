import { LeaderboardResponse, ClientListResponse, PublicClientUserListResponse, LeaderboardOptions } from "./types";
export * from "./types";
export { Leaderboard, ClientList, UserList, ClientCardLG, ClientCardSM, } from "./components";
/**
 * Fetches the leaderboard data for the given client.
 *
 * If the client parameter is "All", the function will return the leaderboard data for all clients.
 *
 * @async
 * @function
 * @param {string} client - The client ID or "All" to get data for all clients.
 * @param {LeaderboardOptions} [options] - An optional object containing additional parameters like time period, trial, badge filter.
 * @returns {Promise<LeaderboardResponse | Error>} A promise that resolves to the leaderboard data or an ApiError.
 * @throws {ValidationError} If the client parameter is missing.
 * @throws {ApiError} If there is an error fetching the data.
 */
export declare const getLeaderboard: (client: string, options?: LeaderboardOptions) => Promise<LeaderboardResponse | Error>;
/**
 * Fetches the list of clients.
 * @async
 * @function
 * @returns {Promise<ClientListResponse | Error>} A promise that resolves to the client list or an error.
 */
export declare const getClientList: () => Promise<ClientListResponse | Error>;
/**
 * Fetches the public client user list for the given client.
 * @async
 * @function
 * @param {string} client - The client ID.
 * @param {Object} [options] - An optional object containing additional parameters like time period and badge filter.
 * @param {string} [options.timePeriod=''] - A filter by time period ('all', 'week', or 'month').
 * @param {boolean} [options.badgeFilter=false] - A boolean value to filter by badges.
 * @returns {Promise<PublicClientUserListResponse | Error>} A promise that resolves to the public client user list or an error.
 */
export declare const getPublicClientUserList: (client: string, options?: {
    timePeriod?: string;
    badgeFilter?: boolean;
}) => Promise<PublicClientUserListResponse | Error>;
