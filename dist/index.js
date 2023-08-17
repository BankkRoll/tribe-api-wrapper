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
 * Constructs the URL based on the useProxy option and endpoint.
 * @param endpoint The endpoint URL.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A URL string.
 */
const buildUrl = (endpoint, client, options, useProxy) => {
    const { timePeriod = 'all', trial = true, badgeFilter = false } = options || {};
    return useProxy
        ? `/api/${endpoint}?client=${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}&time_period=${timePeriod}`
        : `${BASE_URL}${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}${timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''}`;
};
/**
 * Fetches the leaderboard data for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the leaderboard data or an error.
 */
const getLeaderboard = async (client, options, useProxy) => {
    if (!client) {
        return new ValidationError('Client parameter is required.');
    }
    const url = buildUrl('leaderboard-ranking', client, options, useProxy);
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
const getClientList = async (useProxy) => {
    const url = useProxy ? '/api/client-list' : CLIENT_LIST_URL;
    try {
        const response = await axios_1.default.get(url);
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
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the public client user list or an error.
 */
const getPublicClientUserList = async (client, options, // Change the type to match LeaderboardOptions
useProxy) => {
    if (!client) {
        return new ValidationError('Client parameter is required.');
    }
    const url = buildUrl('public-client-user-list', client, options, useProxy);
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