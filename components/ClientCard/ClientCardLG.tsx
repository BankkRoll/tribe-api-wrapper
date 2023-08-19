// components/ClientCard/ClientCardLG.tsx
import React, { useEffect, useState } from 'react';
import { getClientList, ClientData } from '../../index';
import { ClientCardProps } from '../../types';

/**
 * The ClientCardSM component renders a smaller profile card for a client.
 * @param {ClientData} client - The client data, including the avatar URL, client name, and trial status. Required.
 * @param {string} [cardClassName = ''] - CSS class for the card container. Optional.
 * @param {string} [avatarClassName = ''] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName = ''] - CSS class for the name. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card.
 */
export const ClientCardLG: React.FC<ClientCardProps> = ({
  clientId,
  cardClassName = '',
  bannerClassName = '',
  avatarClassName = '',
  nameClassName = '',
  style,
}) => {
  const [client, setClient] = useState<ClientData | null>(null);

  /**
   * Fetches client card data from API
   */
  useEffect(() => {
    getClientList().then((response) => {
      if ('data' in response) {
        const foundClient = response.data.find((c) => c.client === clientId);
        setClient(foundClient || null);
      }
    });
  }, [clientId]);

  if (!client) return <div>Loading...</div>;

  return (
    <div className={`client-card client-card-lg ${cardClassName}`} style={{ border: '1px solid #ccc', ...style }}>
      <div className={`client-banner ${bannerClassName}`} style={{ height: '100px', backgroundImage: `url(${client.background})`, position: 'relative' }}>
        <img src={client.avatar} className={`client-avatar ${avatarClassName}`} alt={`${client.client} avatar`} style={{ width: '50px', borderRadius: '25px', position: 'absolute', bottom: '-25px', left: '10%' }} />
        <div className={`client-info`} style={{ marginLeft: '70px' }}>
          <h2 className={`client-name ${nameClassName}`}>{client.client}</h2>
          <p>Trial: {client.trial ? 'Yes' : 'No'}</p>
          <p>Is Hidden: {client.is_hidden ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};
