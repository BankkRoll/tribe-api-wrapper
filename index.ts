// index.ts
import axios, { AxiosError } from "axios";
import {
  LeaderboardResponse,
  ClientListResponse,
  PublicClientUserListResponse,
  LeaderboardOptions,
  ErrorResponse,
} from "./types";

// Exporting types and components for external usage
export * from "./types";
export {
  Leaderboard,
  ClientList,
  UserList,
  ClientCardLG,
  ClientCardSM,
} from "./components";

/**
 * Base URLs for the API endpoints.
 * @constant
 */
const BASE_URL =
  "https://tribe-api-wrapper.bankkroll.repl.co/leaderboard-ranking?";
const CLIENT_LIST_URL =
  "https://tribe-api-wrapper.bankkroll.repl.co/client-list/";
const PUBLIC_CLIENT_USER_LIST_URL =
  "https://tribe-api-wrapper.bankkroll.repl.co/public-client-user-list?client=";

/**
 * Represents a validation error with a custom error name.
 * @class
 * @extends Error
 */
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Represents an API error with a custom error name.
 * @class
 * @extends Error
 */
class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

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
export const getLeaderboard = async (
  client: string,
  options?: LeaderboardOptions
): Promise<LeaderboardResponse | Error> => {
  if (!client) {
    return new ValidationError("Client parameter is required.");
  }

  const { timePeriod = "", trial = true, badgeFilter = false } = options || {};

  // Construct the URL, handling the special case "all"
  const url =
    client.toLowerCase() === "all"
      ? `${BASE_URL}trial=${trial}&badge_filter=${badgeFilter}&time_period=${encodeURIComponent(
          timePeriod
        )}`
      : `${BASE_URL}client=${encodeURIComponent(
          client
        )}&trial=${trial}&badge_filter=${badgeFilter}&time_period=${encodeURIComponent(
          timePeriod
        )}`;

  try {
    const response = await axios.get<LeaderboardResponse>(url);
    // Check if the data property is an array
    if (Array.isArray(response.data.data)) {
      return response.data;
    } else {
      return new ApiError(
        "Wrong client ID provided. Please check your client name and try again."
      );
    }
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Fetches the list of clients.
 * @async
 * @function
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
 * @async
 * @function
 * @param {string} client - The client ID.
 * @param {Object} [options] - An optional object containing additional parameters like time period and badge filter.
 * @param {string} [options.timePeriod=''] - A filter by time period ('all', 'week', or 'month').
 * @param {boolean} [options.badgeFilter=false] - A boolean value to filter by badges.
 * @returns {Promise<PublicClientUserListResponse | Error>} A promise that resolves to the public client user list or an error.
 */
export const getPublicClientUserList = async (
  client: string,
  options?: { timePeriod?: string; badgeFilter?: boolean }
): Promise<PublicClientUserListResponse | Error> => {
  if (!client) {
    return new ValidationError("Client parameter is required.");
  }

  const { timePeriod = "", badgeFilter = false } = options || {};

  const url = `${PUBLIC_CLIENT_USER_LIST_URL}${encodeURIComponent(client)}${
    timePeriod ? `&time_period=${encodeURIComponent(timePeriod)}` : ""
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
 * @function
 * @private
 * @param {unknown} error - The error object.
 * @returns {Error} A new ApiError object with details of the error.
 */
const handleError = (error: unknown): Error => {
  const axiosError = error as AxiosError<ErrorResponse>;

  // Check for specific error response related to client ID
  if (
    axiosError.response &&
    axiosError.response.data &&
    axiosError.response.data.data &&
    axiosError.response.data.data.error === "invalid client_name"
  ) {
    return new ApiError(
      "Wrong client ID provided. Please check your client name and try again."
    );
  }

  if (axiosError.response) {
    return new ApiError(
      `Server responded with status ${axiosError.response.status}: ${axiosError.message}`
    );
  } else {
    return new ApiError(axiosError.message);
  }
};
