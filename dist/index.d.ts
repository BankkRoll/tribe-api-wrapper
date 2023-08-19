import { LeaderboardResponse, ClientListResponse, PublicClientUserListResponse, LeaderboardOptions } from './types';
export * from './types';
export { Leaderboard, ClientList, UserList, ClientCardLG, ClientCardSM } from './components';
/**
 * Fetches the leaderboard data for the given client.
 * @param {string} client - The client ID.
 * @param {LeaderboardOptions} [options] - An optional object containing additional parameters like time period, trial, badge filter.
 * @returns {Promise<LeaderboardResponse | Error>} A promise that resolves to the leaderboard data or an ApiError with a message 'Wrong client ID provided. Please check your client name and try again.' if the client ID is incorrect, or other errors.
 */
export declare const getLeaderboard: (client: string, options?: LeaderboardOptions) => Promise<LeaderboardResponse | Error>;
/**
 * Fetches the list of clients.
 * @returns {Promise<ClientListResponse | Error>} A promise that resolves to the client list or an error.
 */
export declare const getClientList: () => Promise<ClientListResponse | Error>;
/**
 * Fetches the public client user list for the given client.
 * @param {string} client - The client ID.
 * @param {Object} [options] - An optional object containing additional parameters like time period and badge filter.
 * @param {string} [options.timePeriod='all'] - A filter by time period ('all', 'week', or 'month').
 * @param {boolean} [options.badgeFilter=false] - A boolean value to filter by badges.
 * @returns {Promise<PublicClientUserListResponse | Error>} A promise that resolves to the public client user list or an error.
 */
export declare const getPublicClientUserList: (client: string, options?: {
    timePeriod?: string;
    badgeFilter?: boolean;
}) => Promise<PublicClientUserListResponse | Error>;
