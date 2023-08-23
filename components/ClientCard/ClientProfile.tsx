// components/ClientProfile.tsx
import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../../index";
import { ClientProfileProps } from "../../types";
import { Leaderboard } from "../Leaderboard";

/**
 * The ClientProfile component renders a detailed profile view of a client, including a banner, avatar, and leaderboard.
 * @param {string} clientId - The client ID to fetch client data. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [leaderboardClassName] - CSS class for the leaderboard container. Optional.
 * @returns A React component that renders a detailed client profile including a leaderboard.
 */
export const ClientProfile: React.FC<ClientProfileProps> = ({
  clientId,
  containerClassName = "",
  bannerClassName = "",
  avatarClassName = "",
  leaderboardClassName = "",
}) => {
  const [client, setClient] = useState<ClientData | null>(null);

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
      className={`client-profile-container ${containerClassName}`}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <div
        className={`client-banner ${bannerClassName}`}
        style={{
          height: "300px",
          backgroundImage: `url(${client.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <img
          src={client.avatar}
          className={`client-avatar ${avatarClassName}`}
          alt={`${client.client} avatar`}
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
        <Leaderboard client={clientId} />
      </div>
    </div>
  );
};
