// Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { getLeaderboard, LeaderboardProps, LeaderboardResponse } from './index';

/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param client The client ID (string). Required.
 * @param timePeriod Filter by time period ('all', 'week', or 'month'). Optional.
 * @param trial A boolean value to include/exclude trial data (default: true). Optional.
 * @param badgeFilter A boolean value to filter by badges (default: false). Optional.
 */
export const Leaderboard: React.FC<LeaderboardProps> = ({
    client,
    timePeriod = 'all',
    trial,
    badgeFilter,
    className,
    titleClassName,
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
      <h1 className={titleClassName}>Leaderboard</h1>
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
