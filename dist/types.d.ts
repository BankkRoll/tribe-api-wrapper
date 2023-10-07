/// <reference types="react" />
export type ClientName = "all" | "2117 (Non-Tribe)" | "Alpha Kongs Club" | "Ape Reunion" | "Beanbag Frens (Non-Tribe)" | "Bears Deluxe" | "Blokpax" | "Brawler Bearz" | "Bushleague Media" | "CPG (Non-Tribe)" | "Chibi Dinos" | "Degen Distillery" | "DogePound" | "Fat Rat Mafia (Non-Tribe)" | "Fear City" | "Freckle Trivia" | "GQ" | "GQ3" | "Gala Games" | "Gas Guzzlers" | "Hero Galaxy" | "Killabears" | "Kitaro World" | "Kryptoria" | "LALA" | "Long Lost" | "Moonrunners" | "Noundles" | "OD Labs" | "Orbies" | "RDB Car Club" | "SYKY" | "Sammy Arriaga" | "Saved Souls" | "Shadow Quest" | "Shellz Orb" | "Skale (Team)" | "Soundxyz" | "Space Riders" | "SupDucks" | "Superlotl" | "TRIBE TEST ACCOUNT" | "TRIBENFT Co." | "The Fabricant" | "ThreadGuy" | "Uncanny Club" | "VaynerSports" | "Wild West Undead" | "m00m" | "nftnow";
/** Represents an individual user's leaderboard data */
export interface LeaderboardData {
    username: string;
    has_badge: boolean;
    twitter_points: number;
    content_points: number;
    total_points: number;
}
/** Options to customize the leaderboard fetch */
export interface LeaderboardOptions {
    timePeriod?: "" | "week" | "month";
    trial?: boolean;
    badgeFilter?: boolean;
    limit?: number;
}
/** Props for the Leaderboard component */
export interface LeaderboardProps extends LeaderboardOptions {
    client: ClientName;
    className?: string;
    errorClassName?: string;
    loadingClassName?: string;
    tableClassName?: string;
    headerClassName?: string;
    rowClassName?: string;
    badgeClassName?: string;
    titleClassName?: string;
    textClassName?: string;
    badge_icon?: string;
    style?: React.CSSProperties;
}
/** Response format for the leaderboard API */
export interface LeaderboardResponse {
    data: LeaderboardData[];
}
/** Represents an individual client's data */
export interface ClientData {
    client: ClientName;
    trial: boolean;
    avatar: string;
    background: string;
    is_hidden: boolean;
}
/** Response format for the client list API */
export interface ClientListResponse {
    data: ClientData[];
}
/** Response format for the public client user list API */
export interface PublicClientUserListResponse {
    data: string[];
}
/** Response format for the error API */
export interface ErrorResponse {
    data: {
        error: string;
    };
}
/** Represents a client */
export interface Client {
    client: ClientName;
    trial: boolean;
    avatar: string;
    background: string;
    is_hidden: boolean;
}
/** Props for the ClientList component */
export interface ClientListProps {
    clients?: ClientData[];
    className?: string;
    clientClassName?: string;
    avatarClassName?: string;
    backgroundClassName?: string;
    textClassName?: string;
    style?: React.CSSProperties;
}
/** Props for the user list */
export interface UserListProps {
    containerClassName?: string;
    userClassName?: string;
    textClassName?: string;
    style?: React.CSSProperties;
}
/** Props for the client card */
export interface ClientCardProps {
    client: ClientName;
    cardClassName?: string;
    bannerClassName?: string;
    avatarClassName?: string;
    nameClassName?: string;
    style?: React.CSSProperties;
}
/** Props for the client profile  */
export interface ClientProfileProps {
    client: ClientName;
    containerClassName?: string;
    bannerClassName?: string;
    avatarClassName?: string;
    leaderboardClassName?: string;
    nameClassName?: string;
    userListClassName?: string;
    userContainerClassName?: string;
    userClassName?: string;
    style?: React.CSSProperties;
}
