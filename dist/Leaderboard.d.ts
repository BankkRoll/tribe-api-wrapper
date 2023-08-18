import React from 'react';
import { LeaderboardProps } from './index';
/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} client - The client ID. Required.
 * @param {string} [timePeriod='all'] - Filter by time period ('all', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [titleClassName] - CSS class for the title. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {string} [userClassName] - CSS class for user details. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export declare const Leaderboard: React.FC<LeaderboardProps>;
