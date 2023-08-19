// components/UserList.tsx
import React, { useEffect, useState } from 'react';
import { getPublicClientUserList } from '../index';
import { UserListProps } from '../types';

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
      if (result && !('message' in result)) {
        setUsers(result.data); // Directly set the data as users
      }
      setLoading(false);
    };
    fetchUsers();
  }, [client]);

  return (
    <div className={`user-list-container ${containerClassName}`} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user, index) => (
          <div key={index} className={`user-container ${userClassName}`} style={{ width: '25%', padding: '10px' }}>
            <p className={`user-name ${textClassName}`}>{user}</p>
          </div>
        ))
      )}
    </div>
  );
};
