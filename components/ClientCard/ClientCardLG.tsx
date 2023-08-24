// components/ClientCard/ClientCardLG.tsx
import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../../index";
import { ClientCardProps } from "../../types";

/**
 * The ClientCardSM component
 * Renders a smaller profile card for a client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [cardClassName] - CSS class for the card container. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card.
 */
export const ClientCardLG: React.FC<ClientCardProps> = ({
  clientId,
  cardClassName,
  bannerClassName,
  avatarClassName,
  style,
}) => {
  const [client, setClient] = useState<ClientData | null>(null);

  /**
   * Fetches client card data from API
   */
  useEffect(() => {
    getClientList().then((response) => {
      if ("data" in response) {
        const foundClient = response.data.find((c) => c.client === clientId);
        setClient(foundClient || null);
      }
    });
  }, [clientId]);

  if (!client) return <div>Loading...</div>;

  return (
    <div
      className={`client-card client-card-lg ${cardClassName}`}
      style={{
        ...style,
        width: "100%",
        border: "1px solid #ccc",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <div
        className={`client-banner ${bannerClassName}`}
        style={{
          height: "300px",
          backgroundImage: `url(${client.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "2px solid #ccc",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <img
          src={client.avatar}
          className={`client-avatar ${avatarClassName}`}
          alt={`${client.client} avatar`}
          style={{
            width: "150px",
            borderRadius: "30px",
            position: "absolute",
            bottom: "-80px",
            left: "10%",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};
