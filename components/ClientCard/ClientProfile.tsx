// components/ClientProfile.tsx
import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../../index";
import { ClientProfileProps } from "../../types";
import { Leaderboard } from "../Leaderboard";

/**
 * The ClientProfile component.
 * Renders a detailed profile view for the given client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [leaderboardClassName] - CSS class for the leaderboard container. Optional.
 * @returns A React component that renders a detailed client profile including a leaderboard.
 */
export const ClientProfile: React.FC<ClientProfileProps> = ({
  client,
  containerClassName,
  bannerClassName,
  avatarClassName,
  leaderboardClassName,
}) => {
  const [clientData, setClientData] = useState<ClientData | null>(null);

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
      className={`client-profile-container ${containerClassName}`}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <div
        className={`client-banner ${bannerClassName}`}
        style={{
          height: "300px",
          backgroundImage: `url(${clientData.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <img
          src={clientData.avatar}
          className={`client-avatar ${avatarClassName}`}
          alt={`${clientData.client} avatar`}
          style={{
            width: "150px",
            borderRadius: "75px",
            position: "absolute",
            bottom: "-75px",
            left: "10%",
            zIndex: 2,
            border: "5px solid white",
          }}
        />
      </div>
      <div
        className={`client-leaderboard ${leaderboardClassName}`}
        style={{ padding: "100px 20px 20px", borderRadius: "0 0 10px 10px" }}
      >
        <Leaderboard client={client} />
      </div>
    </div>
  );
};
