// components/ClientCard/ClientCardSM.tsx
import React, { useEffect, useState } from 'react';
import { getClientList, ClientData } from '../../index';

/**
 * The ClientCardSM component renders a smaller profile card for a client, including the banner.
 * @param {string} clientId - The client ID to fetch client data. Required.
 * @param {string} [cardClassName = ''] - CSS class for the card container. Optional.
 * @param {string} [bannerClassName = ''] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName = ''] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName = ''] - CSS class for the name. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card with a banner.
 */
export const ClientCardSM: React.FC<{ clientId: string, cardClassName?: string, bannerClassName?: string, avatarClassName?: string, nameClassName?: string, style?: React.CSSProperties }> = ({
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
    <div className={`client-card client-card-sm ${cardClassName}`} style={style}>
      <div className={`client-banner ${bannerClassName}`} style={{ height: '50px', backgroundImage: `url(${client.background})`, position: 'relative' }}>
        <img src={client.avatar} className={`client-avatar ${avatarClassName}`} alt={`${client.client} avatar`} style={{ width: '30px', borderRadius: '15px', position: 'absolute', bottom: '-15px', left: '10%' }} />
        <div className={`client-info`} style={{ marginLeft: '40px' }}>
          <h3 className={`client-name ${nameClassName}`}>{client.client}</h3>
          <p>Trial: {client.trial ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};
