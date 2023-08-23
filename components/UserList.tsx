// components/UserList.tsx
import React, { useEffect, useState } from "react";
import { getPublicClientUserList } from "../index";
import { UserListProps } from "../types";

/**
 * The UserList component.
 * Renders a grid of users with customizable styles.
 * @param {string} client - The client ID. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [userClassName] - CSS class for individual user container. Optional.
 * @param {string} [textClassName] - CSS class for user text. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export const UserList: React.FC<UserListProps & { client: string }> = ({
  client,
  containerClassName,
  userClassName,
  textClassName,
  style,
}) => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getPublicClientUserList(client);
      if (result && !("message" in result)) {
        setUsers(result.data);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [client]);

  return (
    <div
      className={`user-list-container ${containerClassName}`}
      style={{
        maxWidth: "100%",
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        overflowY: "auto",
        height: "300px",
        ...style,
      }}
    >
      {loading ? (
        <p
          style={{
            color: "#666",
            fontStyle: "italic",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      ) : (
        users.map((user, index) => (
          <div
            key={index}
            className={`user-container ${userClassName}`}
            style={{
              padding: "10px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              className={`user-name ${textClassName}`}
              style={{
                margin: "0",
                fontSize: "16px",
                color: "#333",
                fontWeight: "500",
              }}
            >
              {user}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
