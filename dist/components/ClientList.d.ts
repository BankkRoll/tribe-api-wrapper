import React from 'react';
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
export declare const ClientList: React.FC<{
    className?: string;
    clientClassName?: string;
    avatarClassName?: string;
    backgroundClassName?: string;
    textClassName?: string;
    style?: React.CSSProperties;
}>;
