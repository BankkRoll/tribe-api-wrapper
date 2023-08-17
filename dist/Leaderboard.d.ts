import React from 'react';
import { LeaderboardProps } from './index';
/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param client The client ID (string). Required.
 * @param timePeriod Filter by time period ('all', 'week', or 'month'). Optional.
 * @param trial A boolean value to include/exclude trial data (default: true). Optional.
 * @param badgeFilter A boolean value to filter by badges (default: false). Optional.
 */
export declare const Leaderboard: React.FC<LeaderboardProps>;
