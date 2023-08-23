// components/ClientCard/ClientCardSM.tsx
import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../../index";
import { ClientCardProps } from "../../types";

/**
 * The ClientCardSM component renders a smaller profile card for a client, including the banner.
 * @param {string} clientId - The client ID to fetch client data. Required.
 * @param {string} [cardClassName = ''] - CSS class for the card container. Optional.
 * @param {string} [bannerClassName = ''] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName = ''] - CSS class for the avatar. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card with a banner.
 */
export const ClientCardSM: React.FC<ClientCardProps> = ({
  clientId,
  cardClassName = "",
  bannerClassName = "",
  avatarClassName = "",
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
      className={`client-card client-card-sm ${cardClassName}`}
      style={{
        ...style,
        width: "200px",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div
        className={`client-banner ${bannerClassName}`}
        style={{
          height: "200px",
          backgroundImage: `url(${client.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={client.avatar}
          className={`client-avatar ${avatarClassName}`}
          alt={`${client.client} avatar`}
          style={{
            width: "50px",
            borderRadius: "25px",
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};
