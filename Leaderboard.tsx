// Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { getLeaderboard, LeaderboardProps, LeaderboardResponse } from './index';

/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} client - The client ID. Required.
 * @param {string} [timePeriod='all'] - Filter by time period ('all', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {string} [userClassName] - CSS class for user details. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export const Leaderboard: React.FC<LeaderboardProps> = ({
  client,
  timePeriod = 'all',
  trial,
  badgeFilter,
  className,
  errorClassName,
  loadingClassName,
  userClassName,
  style,
}) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch the leaderboard data on component mount and whenever the specified dependencies change.
   */
  useEffect(() => {
    async function fetchData() {
      const data = await getLeaderboard(client, { timePeriod, trial, badgeFilter });
      if (data instanceof Error) {
        setError(data.message);
      } else {
        setLeaderboardData(data);
      }
    }
    fetchData();
  }, [client, timePeriod, trial, badgeFilter]);

  /**
   * Render the leaderboard component.
   * Displays a loading message while the data is being fetched.
   * Displays an error message if there is an issue fetching the data.
   * Lists users with their usernames and total points.
   */
  return (
    <div className={className} style={style}>
      {error ? (
        <div className={errorClassName}>Error: {error}</div>
      ) : leaderboardData ? (
        leaderboardData.data.map((user) => (
          <div key={user.username} className={userClassName}>
            {user.username}: {user.total_points} points
          </div>
        ))
      ) : (
        <div className={loadingClassName}>Loading...</div>
      )}
    </div>
  );
};
