import React from 'react';
import { ClientProfileProps } from '../../types';
/**
 * The ClientProfile component renders a detailed profile view of a client, including a banner, avatar, client name, and user list.
 * @param {string} clientId - The client ID to fetch client data and user list. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName] - CSS class for the client name. Optional.
 * @param {string} [userListClassName] - CSS class for the user list container. Optional.
 * @param {string} [userClassName] - CSS class for individual user container. Optional.
 * @returns A React component that renders a detailed client profile including a user list.
 */
export declare const ClientProfile: React.FC<ClientProfileProps>;
