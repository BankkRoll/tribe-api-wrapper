import React from 'react';
import { ClientCardProps } from '../../types';
/**
 * The ClientCardSM component renders a smaller profile card for a client.
 * @param {ClientData} client - The client data, including the avatar URL, client name, and trial status. Required.
 * @param {string} [cardClassName = ''] - CSS class for the card container. Optional.
 * @param {string} [avatarClassName = ''] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName = ''] - CSS class for the name. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card.
 */
export declare const ClientCardLG: React.FC<ClientCardProps>;
