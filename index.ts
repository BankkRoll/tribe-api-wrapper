// index.ts
import axios, { AxiosError } from 'axios';
import { LeaderboardResponse, ClientListResponse, PublicClientUserListResponse, LeaderboardOptions } from './types';
export * from './types';
export { Leaderboard } from './Leaderboard';

/** Base URLs for the API endpoints */
const BASE_URL = 'https://leaderboard.tribenft.co/leaderboard-ranking/?client=';
const CLIENT_LIST_URL = 'https://leaderboard.tribenft.co/client-list/';
const PUBLIC_CLIENT_USER_LIST_URL = 'https://leaderboard.tribenft.co/public-client-user-list/?client=';

/** Custom Error class for validation errors */
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/** Custom Error class for API errors */
class ApiError extends Error {
  constructor(message: string) {
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
const buildUrl = (
  endpoint: string,
  client: string,
  options?: LeaderboardOptions,
  useProxy?: boolean
): string => {
  const { timePeriod = 'all', trial = true, badgeFilter = false } = options || {};

  return useProxy
    ? `/api/${endpoint}?client=${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}&time_period=${timePeriod}`
    : `${BASE_URL}${encodeURIComponent(client)}&trial=${trial}&badge_filter=${badgeFilter}${
        timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ''
      }`;
};

/**
 * Fetches the leaderboard data for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the leaderboard data or an error.
 */
export const getLeaderboard = async (
  client: string,
  options?: LeaderboardOptions,
  useProxy?: boolean
): Promise<LeaderboardResponse | Error> => {
  if (!client) {
    return new ValidationError('Client parameter is required.');
  }

  const url = buildUrl('leaderboard-ranking', client, options, useProxy);

  try {
    const response = await axios.get<LeaderboardResponse>(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches the list of clients.
 * @returns A promise that resolves to the client list or an error.
 */
export const getClientList = async (useProxy?: boolean): Promise<ClientListResponse | Error> => {
  const url = useProxy ? '/api/client-list' : CLIENT_LIST_URL;

  try {
    const response = await axios.get<ClientListResponse>(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches the public client user list for the given client.
 * @param client The client ID (string).
 * @param options An optional object containing additional parameters.
 * @param useProxy An optional boolean to determine whether to use the Next.js API route.
 * @returns A promise that resolves to the public client user list or an error.
 */
export const getPublicClientUserList = async (
    client: string,
    options?: LeaderboardOptions, // Change the type to match LeaderboardOptions
    useProxy?: boolean
  ): Promise<PublicClientUserListResponse | Error> => {
    if (!client) {
      return new ValidationError('Client parameter is required.');
    }
  
    const url = buildUrl('public-client-user-list', client, options, useProxy);
  
    try {
      const response = await axios.get<PublicClientUserListResponse>(url);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  };
  

/**
 * Error handling function for API errors.
 * @param error The error object.
 * @returns A new ApiError object.
 */
const handleError = (error: unknown): Error => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    return new ApiError(`Server responded with status ${axiosError.response.status}: ${axiosError.message}`);
  } else {
    return new ApiError(axiosError.message);
  }
};
