import React from "react";
import { LeaderboardProps } from "../types";
/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} [client="all"] - The client ID. Defaults to "all".
 * @param {string} [timePeriod=''] - Filter by time period ('', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {number} [limit=20] - Limit the number of users displayed. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {string} [tableClassName] - CSS class for the table. Optional.
 * @param {string} [titleClassName] - CSS class for table titles. Optional.
 * @param {string} [textClassName] - CSS class for table text. Optional.
 * @param {string} [headerClassName] - CSS class for table headers. Optional.
 * @param {string} [rowClassName] - CSS class for table rows. Optional.
 * @param {string} [badgeClassName] - CSS class for badges. Optional.
 * @param {string} [badge_icon] - URL for the badge icon. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export declare const Leaderboard: React.FC<LeaderboardProps>;
