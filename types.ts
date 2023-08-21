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
}

/** Props for the Leaderboard component */
export interface LeaderboardProps extends LeaderboardOptions {
  client: string;
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
  client: string;
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
  client: string;
  trial: boolean;
  avatar: string;
  background: string;
  is_hidden: boolean;
};

/** Props for the ClientList component */
export interface ClientListProps {
  clients: ClientData[];
  className?: string;
  clientClassName?: string;
  avatarClassName?: string;
  backgroundClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

/** Props for the user list */
export interface UserListProps {
  users: string[];
  containerClassName?: string;
  userClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

/** Props for the client card */
export interface ClientCardProps {
  clientId: string;
  cardClassName?: string;
  bannerClassName?: string;
  avatarClassName?: string;
  nameClassName?: string;
  style?: React.CSSProperties;
}

export interface ClientProfileProps {
  clientId: string;
  containerClassName?: string;
  bannerClassName?: string;
  avatarClassName?: string;
  nameContainerClassName?: string;
  nameClassName?: string;
  userListClassName?: string;
  userContainerClassName?: string;
  userClassName?: string;
  style?: React.CSSProperties;
};