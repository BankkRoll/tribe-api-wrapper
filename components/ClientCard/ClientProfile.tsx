// components/ClientProfile.tsx
import React, { useEffect, useState } from 'react';
import { getClientList, ClientData, getPublicClientUserList } from '../../index';
import { ClientProfileProps } from '../../types';


/**
 * The ClientProfile component renders a detailed profile view of a client, including a banner, avatar, client name, and user list.
 * @param {string} clientId - The client ID to fetch client data and user list. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName] - CSS class for the client name. Optional.
 * @param {string} [userListClassName] - CSS class for the user list container. Optional.
 * @param {string} [userClassName] - CSS class for individual user container. Optional.
 * @returns A React component that renders a detailed client profile including a user list.
 */
export const ClientProfile: React.FC<ClientProfileProps> = ({
    clientId,
    containerClassName = 'custom-container-className',
    bannerClassName = 'custom-banner-className',
    avatarClassName = 'custom-avatar-className',
    nameClassName = 'custom-name-className',
    userListClassName = 'custom-user-list-className',
    userClassName = 'custom-user-className',
  }) => {
  const [client, setClient] = useState<ClientData | null>(null);
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetches client data and user list from API
   */
  useEffect(() => {
    getClientList().then((response) => {
      if ('data' in response) {
        const foundClient = response.data.find((c) => c.client === clientId);
        setClient(foundClient || null);
      }
    });

    const fetchUsers = async () => {
      const result = await getPublicClientUserList(clientId);
      if (result && !('message' in result)) {
        setUsers(result.data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [clientId]);

  if (!client) return <div>Loading...</div>;

  return (
    <div className={`client-profile-container ${containerClassName}`} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className={`client-banner ${bannerClassName}`} style={{ height: '300px', backgroundImage: `url(${client.background})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', borderRadius: '10px 10px 0 0' }}>
        <img src={client.avatar} className={`client-avatar ${avatarClassName}`} alt={`${client.client} avatar`} style={{ width: '150px', borderRadius: '75px', position: 'absolute', bottom: '-75px', left: '10%', zIndex: 2, border: '5px solid white' }} />
      </div>
      <div className={`client-name-container ${nameClassName}`} style={{ padding: '50px 20px 20px', borderRadius: '0 0 10px 10px' }}>
        <h2 className={`client-name ${nameClassName}`} style={{ textAlign: 'center', color: '#000' }}>{client.client}</h2>
        <div className={`user-list-container ${userListClassName}`} style={{
          margin: '0 auto',
          borderRadius: '10px',
          overflowY: 'auto',
          height: '300px',
        }}>
          {loading ? (
            <p style={{ color: '#666', fontStyle: 'italic', fontSize: '14px', textAlign: 'center' }}>Loading...</p>
          ) : (
            users.map((user, index) => (
              <div key={index} className={`user-container ${userClassName}`} style={{
                padding: '10px',
                background: '#f7f7f7',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <p className="user-name" style={{ margin: '0', fontSize: '16px', color: '#000', fontWeight: '500' }}>{user}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};