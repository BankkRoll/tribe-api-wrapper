import React from "react";
import { UserListProps } from "../types";
/**
 * The UserList component.
 * Renders a userlist for the given client and provides options for customization.
 * @param {string} client - The client ID to fetch the users from. Required.
 * @param {string} [containerClassName] - CSS class for the main container wrapping all users. Optional.
 * @param {string} [userClassName] - CSS class for the individual user container. Optional.
 * @param {string} [textClassName] - CSS class for the text displaying the user's name. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container, allowing for further customization. Optional.
 */
export declare const UserList: React.FC<UserListProps & {
    client: string;
}>;
