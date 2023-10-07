import React from "react";
import { ClientListProps } from "../types";
/**
 * The ClientList component.
 * Renders a client list for the given data and provides options for customization.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [clientClassName] - CSS class for individual client container. Optional.
 * @param {string} [avatarClassName] - CSS class for client avatar. Optional.
 * @param {string} [backgroundClassName] - CSS class for client background. Optional.
 * @param {string} [textClassName] - CSS class for text elements. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
export declare const ClientList: React.FC<ClientListProps>;
