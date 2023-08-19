import React from 'react';
import { ClientCardProps } from '../../types';
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
export declare const ClientCardSM: React.FC<ClientCardProps>;
