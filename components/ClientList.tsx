// components/ClientList.tsx
import React, { useEffect, useState } from "react";
import { getClientList, ClientData } from "../index";

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
  className = "",
  clientClassName = "",
  avatarClassName = "",
  backgroundClassName = "",
  textClassName = "",
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
        if ("data" in response) {
          setClients(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching client list:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        className={className}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          ...style,
        }}
      >
        {clients.map((client) => (
          <div
            className={clientClassName}
            key={client.client}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #ccc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className={backgroundClassName}
              style={{
                height: "100px",
                width: "100%",
                backgroundImage: `url(${client.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <img
                src={client.avatar}
                className={avatarClassName}
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
            <div style={{ padding: "10px" }}>
              <p
                className={textClassName}
                style={{ fontWeight: "bold", marginBottom: "5px" }}
              >
                Client: {client.client}
              </p>
              <p
                className={textClassName}
                style={{ fontSize: "12px", color: "#666" }}
              >
                Trial: {client.trial ? "Yes" : "No"}
              </p>
              <p
                className={textClassName}
                style={{ fontSize: "12px", color: "#666" }}
              >
                Is Hidden: {client.is_hidden ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "12px",
          color: "#777",
        }}
      >
        <a
          href="https://mytriberewards.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#000",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Powered by Tribe{" "}
          <img
            src="https://mytriberewards.com/wp-content/uploads/2022/12/TRIBENFTCO-Logo-Black-100x100.png"
            alt="Tribe Logo"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              marginLeft: "5px",
            }}
          />
        </a>
      </div>
    </div>
  );
};
