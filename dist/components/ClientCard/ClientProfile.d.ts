import React from "react";
import { ClientProfileProps } from "../../types";
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
export declare const ClientProfile: React.FC<ClientProfileProps>;
