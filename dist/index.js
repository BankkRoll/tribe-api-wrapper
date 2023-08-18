"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicClientUserList = exports.getClientList = exports.getLeaderboard = exports.Leaderboard = void 0;
// index.ts
const axios_1 = __importDefault(require("axios"));
__exportStar(require("./types"), exports);
var Leaderboard_1 = require("./Leaderboard");
Object.defineProperty(exports, "Leaderboard", { enumerable: true, get: function () { return Leaderboard_1.Leaderboard; } });
/**
 * Base URLs for the API endpoints.
 */
const BASE_URL = 'https://tribe-api-wrapper.bankkroll.repl.co/leaderboard-ranking?client=';
const CLIENT_LIST_URL = 'https://tribe-api-wrapper.bankkroll.repl.co/client-list/';
const PUBLIC_CLIENT_USER_LIST_URL = 'https://tribe-api-wrapper.bankkroll.repl.co/public-client-user-list?client=';
/**
 * Custom Error class for validation errors.
 */
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
/**
 * Custom Error class for API errors.
 */
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApiError';
    }
}
/**
 * Fetches the leaderboard data for the given client.
 * @param {string} client - The client ID.
 * @param {LeaderboardOptions} [options] - An optional object containing additional parameters like time period, trial, badge filter.
 * @returns {Promise<LeaderboardResponse | Error>} A promise that resolves to the leaderboard data or an error.
 */
const getLeaderboard = async (client, options) => {
    if (!client) {
        return new ValidationError('Client parameter is required.');
    }
    const { timePeriod = 'all', trial = true, badgeFilter = false } = options || {};
    const url = `${BASE_URL}${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}${timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''}`;
    try {
        const response = await axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
};
exports.getLeaderboard = getLeaderboard;
/**
 * Fetches the list of clients.
 * @returns {Promise<ClientListResponse | Error>} A promise that resolves to the client list or an error.
 */
const getClientList = async () => {
    try {
        const response = await axios_1.default.get(CLIENT_LIST_URL);
        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
};
exports.getClientList = getClientList;
/**
 * Fetches the public client user list for the given client.
 * @param {string} client - The client ID.
 * @param {Object} [options] - An optional object containing additional parameters like time period and badge filter.
 * @param {string} [options.timePeriod='all'] - A filter by time period ('all', 'week', or 'month').
 * @param {boolean} [options.badgeFilter=false] - A boolean value to filter by badges.
 * @returns {Promise<PublicClientUserListResponse | Error>} A promise that resolves to the public client user list or an error.
 */
const getPublicClientUserList = async (client, options) => {
    if (!client) {
        return new ValidationError('Client parameter is required.');
    }
    const { timePeriod = 'all', badgeFilter = false } = options || {};
    const url = `${PUBLIC_CLIENT_USER_LIST_URL}${encodeURIComponent(client)}${timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''}&badge_filter=${badgeFilter}`;
    try {
        const response = await axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
};
exports.getPublicClientUserList = getPublicClientUserList;
/**
 * Error handling function for API errors.
 * @param {unknown} error - The error object.
 * @returns {Error} A new ApiError object with details of the error.
 */
const handleError = (error) => {
    const axiosError = error;
    // Check for specific error response related to client ID
    if (axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.data &&
        axiosError.response.data.data.error === 'invalid client_name') {
        return new ApiError('Wrong client ID provided.');
    }
    if (axiosError.response) {
        return new ApiError(`Server responded with status ${axiosError.response.status}: ${axiosError.message}`);
    }
    else {
        return new ApiError(axiosError.message);
    }
};
//# sourceMappingURL=index.js.map