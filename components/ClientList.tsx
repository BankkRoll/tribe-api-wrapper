// components/ClientList.tsx
import React, { useEffect, useState } from 'react';
import { getClientList, ClientData } from '../index';

/**
 * The ClientList component.
 * Renders a list of clients with all provided properties.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [clientClassName] - CSS class for individual client container. Optional.
 * @param {string} [avatarClassName] - CSS class for client avatar. Optional.
 * @param {string} [backgroundClassName] - CSS class for client background. Optional.
 * @param {string} [textClassName] - CSS class for text elements. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export const ClientList: React.FC<{
  className?: string;
  clientClassName?: string;
  avatarClassName?: string;
  backgroundClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}> = ({
  className = '',
  clientClassName = '',
  avatarClassName = '',
  backgroundClassName = '',
  textClassName = '',
  style,
}) => {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetches client list from API
   */
  useEffect(() => {
    getClientList()
      .then((response) => {
        if ('data' in response) {
          setClients(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching client list:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className} style={style}>
      {clients.map((client) => (
        <div className={clientClassName} key={client.client}>
          <p className={textClassName}>Client: {client.client}</p>
          <img src={client.avatar} className={avatarClassName} alt={`${client.client} avatar`} />
          <img src={client.background} className={backgroundClassName} alt={`${client.client} background`} />
          <p className={textClassName}>Trial: {client.trial ? 'Yes' : 'No'}</p>
          <p className={textClassName}>Is Hidden: {client.is_hidden ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};
