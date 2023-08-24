// components/Leaderboard.tsx
import React, { useEffect, useState } from "react";
import { getLeaderboard, LeaderboardResponse } from "../index";
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
export const Leaderboard: React.FC<LeaderboardProps> = ({
  client = "all",
  timePeriod,
  trial,
  badgeFilter,
  limit = 20,
  className,
  errorClassName,
  loadingClassName,
  tableClassName,
  titleClassName,
  textClassName,
  headerClassName,
  rowClassName,
  badgeClassName,
  badge_icon = "https://mytriberewards.com/wp-content/uploads/2022/12/TRIBENFTCO-Logo-Black-100x100.png",
  style,
}) => {
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch the leaderboard data on component mount and whenever the specified dependencies change.
   */
  useEffect(() => {
    async function fetchData() {
      const data = await getLeaderboard(client, {
        timePeriod,
        trial,
        badgeFilter,
      });
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
    <div style={{ position: "relative" }}>
      <div
        className={`${className} leaderboard-container`}
        style={{
          borderRadius: "10px",
          border: "1px solid #e1e1e1",
          padding: "20px",
          overflow: "hidden",
          background: "#f7f7f7",
          ...style,
        }}
      >
        <h3
          style={{ margin: "0 0 15px", fontWeight: "600", textAlign: "center" }}
        >
          {client.toLowerCase() === "all"
            ? "All Clients Leaderboard"
            : `${client} Leaderboard`}
        </h3>
        {error ? (
          <div
            className={`${errorClassName} ${textClassName}`}
            style={{ color: "#d9534f", fontWeight: "500" }}
          >
            Error: {error}
          </div>
        ) : leaderboardData && Array.isArray(leaderboardData.data) ? (
          <table
            className={tableClassName}
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead className={headerClassName}>
              <tr
                style={{
                  borderBottom: "1px solid #d1d1d1",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                <th className={titleClassName} style={{ textAlign: "left" }}>
                  Member
                </th>
                <th className={titleClassName} style={{ textAlign: "left" }}>
                  Twitter Points
                </th>
                <th className={titleClassName} style={{ textAlign: "left" }}>
                  Content Points
                </th>
                <th className={titleClassName} style={{ textAlign: "left" }}>
                  Total Earned
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.data.slice(0, limit).map((user, index) => (
                <tr
                  key={user.username}
                  className={rowClassName}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    padding: "15px 0",
                    lineHeight: "1.5",
                  }}
                >
                  <td
                    className={textClassName}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "#333",
                      width: "40%",
                    }}
                  >
                    {user.has_badge ? (
                      <span
                        className={badgeClassName}
                        style={{ marginRight: "10px" }}
                      >
                        <img
                          src={badge_icon}
                          alt="badge"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                    {user.username}
                  </td>
                  <td
                    className={textClassName}
                    style={{ fontSize: "14px", color: "#333", width: "20%" }}
                  >
                    {user.twitter_points}
                  </td>
                  <td
                    className={textClassName}
                    style={{ fontSize: "14px", color: "#333", width: "20%" }}
                  >
                    {user.content_points}
                  </td>
                  <td
                    className={textClassName}
                    style={{ fontSize: "14px", color: "#333", width: "20%" }}
                  >
                    {user.total_points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            className={`${loadingClassName} ${textClassName}`}
            style={{ color: "#666", fontStyle: "italic", fontSize: "14px" }}
          >
            Loading...
          </div>
        )}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "12px",
          color: "#777",
        }}
      >
        <a
          href="https://mytriberewards.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#000",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Powered by Tribe{" "}
          <img
            src="https://mytriberewards.com/wp-content/uploads/2022/12/TRIBENFTCO-Logo-Black-100x100.png"
            alt="Tribe Logo"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              marginLeft: "5px",
            }}
          />
        </a>
      </div>
    </div>
  );
};
