// components/Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { getLeaderboard, LeaderboardProps, LeaderboardResponse } from '../index';

/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} client - The client ID. Required.
 * @param {string} [timePeriod=''] - Filter by time period ('', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export const Leaderboard: React.FC<LeaderboardProps> = ({
  client,
  timePeriod,
  trial,
  badgeFilter,
  className,
  errorClassName,
  loadingClassName,
  tableClassName,
  titleClassName,
  textClassName,
  headerClassName,
  rowClassName,
  badgeClassName,
  badge_icon = 'static/media/public/images/TRIBENFTCO.png',
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
   * Check if leaderboardData.data is an array before mapping
   */
  useEffect(() => {
    // Check if leaderboardData.data is an array before mapping
    if (leaderboardData && !Array.isArray(leaderboardData.data)) {
      setError("Invalid client ID or unexpected response format");
    }
  }, [leaderboardData]);
  

  /**
   * Render the leaderboard component.
   * Displays a loading message while the data is being fetched.
   * Displays an error message if there is an issue fetching the data.
   * Lists users with their usernames and total points.
   */
  return (
    <div className={`${className} leaderboard-container`} style={{ borderRadius: '10px', border: '1px solid #e1e1e1', padding: '20px', overflow: 'hidden', background: '#f7f7f7', ...style }}>
      <h3 style={{ margin: '0 0 15px', fontWeight: '600' }}>{client} Leaderboard</h3>
      {error ? (
        <div className={`${errorClassName} ${textClassName}`} style={{ color: '#d9534f', fontWeight: '500' }}>Error: {error}</div>
      ) : leaderboardData && Array.isArray(leaderboardData.data) ? (
        <table className={tableClassName} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className={headerClassName}>
            <tr style={{ borderBottom: '1px solid #d1d1d1', fontWeight: '500', fontSize: '14px', color: '#555' }}>
              <th className={titleClassName}>Member</th>
              <th className={titleClassName}>Twitter Points</th>
              <th className={titleClassName}>Content Points</th>
              <th className={titleClassName}>Total Earned</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.data.map((user, index) => (
              <tr key={user.username} className={rowClassName} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', padding: '15px 0', lineHeight: '1.5' }}>
                <td className={textClassName} style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#333' }}>
                  {user.has_badge ? (
                    <span className={badgeClassName} style={{ marginRight: '10px' }}>
                      <img src={badge_icon} alt="badge" style={{ width: '20px', height: '20px' }} />
                    </span>
                  ) : ''} 
                  {user.username}
                </td>
                <td className={textClassName} style={{ fontSize: '14px', color: '#333' }}>{user.twitter_points}</td>
                <td className={textClassName} style={{ fontSize: '14px', color: '#333' }}>{user.content_points}</td>
                <td className={textClassName} style={{ fontSize: '14px', color: '#333' }}>{user.total_points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={`${loadingClassName} ${textClassName}`} style={{ color: '#666', fontStyle: 'italic', fontSize: '14px' }}>Loading...</div>
      )}
    </div>
  );
  
};
