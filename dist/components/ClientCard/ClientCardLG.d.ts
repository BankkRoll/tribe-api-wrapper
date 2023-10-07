import React from "react";
import { ClientCardProps } from "../../types";
/**
 * The ClientCardLG component
 * Renders a larger profile card for a client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [cardClassName] - CSS class for the card container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a larger client profile card.
 */
export declare const ClientCardLG: React.FC<ClientCardProps>;
