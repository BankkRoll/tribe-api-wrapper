import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../../index";
import { ClientCardProps } from "../../types";

/**
 * The ClientCardSM component
 * Renders a smaller profile card for a client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [cardClassName] - CSS class for the card container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card with a banner.
 */
export const ClientCardSM: React.FC<ClientCardProps> = ({
  client,
  cardClassName,
  bannerClassName,
  avatarClassName,
  style,
}) => {
  const [clientData, setClientData] = useState<ClientData | null>(null);

  /**
   * Fetches client card data from API
   */
  useEffect(() => {
    getClientList().then((response) => {
      if ("data" in response) {
        const foundClient = response.data.find((c) => c.client === client);
        setClientData(foundClient || null);
      }
    });
  }, [client]);

  if (!clientData) return <div>Loading...</div>;

  return (
    <div
      className={`client-card client-card-sm ${cardClassName}`}
      style={{
        ...style,
        width: "200px",
        border: "1px solid #ccc",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <div
        className={`client-banner ${bannerClassName}`}
        style={{
          height: "150px",
          backgroundImage: `url(${clientData.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <img
          src={clientData.avatar}
          className={`client-avatar ${avatarClassName}`}
          alt={`${clientData.client} avatar`}
          style={{
            width: "50px",
            borderRadius: "14px",
            position: "absolute",
            bottom: "-25px",
            left: "10%",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};
