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
exports.getPublicClientUserList = exports.getClientList = exports.getLeaderboard = void 0;
// index.ts
const axios_1 = __importDefault(require("axios"));
__exportStar(require("./types"), exports);
/** Base URLs for the API endpoints */
const BASE_URL = 'https://leaderboard.tribenft.co/leaderboard-ranking/?client=';
const CLIENT_LIST_URL = 'https://leaderboard.tribenft.co/client-list/';
const PUBLIC_CLIENT_USER_LIST_URL = 'https://leaderboard.tribenft.co/public-client-user-list/?client=';
/** Custom Error class for validation errors */
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
/** Custom Error class for API errors */
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApiError';
    }
}
/**
 * Fetches the leaderboard data for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @returns A promise that resolves to the leaderboard data or an error.
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
 * @returns A promise that resolves to the client list or an error.
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
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @returns A promise that resolves to the public client user list or an error.
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
 * @param error The error object.
 * @returns A new ApiError object.
 */
const handleError = (error) => {
    const axiosError = error;
    if (axiosError.response) {
        return new ApiError(`Server responded with status ${axiosError.response.status}: ${axiosError.message}`);
    }
    else {
        return new ApiError(axiosError.message);
    }
};
//# sourceMappingURL=index.js.map