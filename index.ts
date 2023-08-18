// index.ts
import axios, { AxiosError } from 'axios';
import { LeaderboardResponse, ClientListResponse, PublicClientUserListResponse, LeaderboardOptions } from './types';
export * from './types';
export { Leaderboard } from './Leaderboard';

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
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Custom Error class for API errors.
 */
class ApiError extends Error {
  constructor(message: string) {
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
export const getLeaderboard = async (
  client: string,
  options?: LeaderboardOptions
): Promise<LeaderboardResponse | Error> => {
  if (!client) {
    return new ValidationError('Client parameter is required.');
  }

  const { timePeriod = 'all', trial = true, badgeFilter = false } = options || {};

  const url = `${BASE_URL}${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}${
    timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''
  }`;

  try {
    const response = await axios.get<LeaderboardResponse>(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches the list of clients.
 * @returns {Promise<ClientListResponse | Error>} A promise that resolves to the client list or an error.
 */
export const getClientList = async (): Promise<ClientListResponse | Error> => {
  try {
    const response = await axios.get<ClientListResponse>(CLIENT_LIST_URL);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches the public client user list for the given client.
 * @param {string} client - The client ID.
 * @param {Object} [options] - An optional object containing additional parameters like time period and badge filter.
 * @param {string} [options.timePeriod='all'] - A filter by time period ('all', 'week', or 'month').
 * @param {boolean} [options.badgeFilter=false] - A boolean value to filter by badges.
 * @returns {Promise<PublicClientUserListResponse | Error>} A promise that resolves to the public client user list or an error.
 */
export const getPublicClientUserList = async (
    client: string,
    options?: { timePeriod?: string; badgeFilter?: boolean }
  ): Promise<PublicClientUserListResponse | Error> => {
    if (!client) {
      return new ValidationError('Client parameter is required.');
    }

    const { timePeriod = 'all', badgeFilter = false } = options || {};

    const url = `${PUBLIC_CLIENT_USER_LIST_URL}${encodeURIComponent(client)}${
      timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''
    }&badge_filter=${badgeFilter}`;

    try {
      const response = await axios.get<PublicClientUserListResponse>(url);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  };

/**
 * Error handling function for API errors.
 * @param {unknown} error - The error object.
 * @returns {Error} A new ApiError object with details of the error.
 */
const handleError = (error: unknown): Error => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    return new ApiError(`Server responded with status ${axiosError.response.status}: ${axiosError.message}`);
  } else {
    return new ApiError(axiosError.message);
  }
};
