# tribe-api-wrapper
[![npm](https://img.shields.io/npm/v/tribe-api-wrapper)](https://www.npmjs.com/package/tribe-api-wrapper)
![npm](https://img.shields.io/npm/dt/tribe-api-wrapper)
![NPM](https://img.shields.io/npm/l/tribe-api-wrapper)
![GitHub issues](https://img.shields.io/github/issues/BankkRoll/tribe-api-wrapper)

This package is designed to offer an accessible and efficient interface for the [Tribe](https://mytriberewards.com/) Leaderboard API. It encompasses a React component for visualizing leaderboards and a set of functions that were intended to facilitate various interactions with the API endpoints.

## Project To-Do List

Test live now in <a href='https://tribe-api-wrapper.vercel.app/'>storybook</a>

- [ ] Update storybook build out
- [ ] Fix small errors/consistency in props/options
- [ ] Fix docs to be super efficient and explanatory
- [ ] Build more components


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Importing Functions and Components](#importing-functions-and-components)
- [Examples](#examples)
  - [Using Functions Directly](#using-functions-directly)
    - [Fetching List of Clients](#fetching-list-of-clients)
    - [Fetching Leaderboard Data](#fetching-leaderboard-data)
    - [Fetching Public Client User List](#fetching-public-client-user-list)
  - [Using the `getLeaderboard` Function](#using-the-getleaderboard-function)
    - [TypeScript](#typescript)
    - [JavaScript](#javascript)
  - [Using the `Leaderboard` Component](#using-the-leaderboard-component)
    - [TypeScript](#typescript-1)
    - [JavaScript](#javascript-1)
  - [Using the `UserList` Component](#using-the-userlist-component)
    - [TypeScript](#typescript-2)
    - [JavaScript](#javascript-2)
  - [Using the `ClientList` Component](#using-the-clientlist-component)
    - [TypeScript](#typescript-3)
    - [JavaScript](#javascript-3)
  - [Using the `ClientCardLG` Component](#using-the-clientcardlg-component)
    - [TypeScript](#typescript-4)
    - [JavaScript](#javascript-4)
  - [Using the `ClientCardSM` Component](#using-the-clientcardsm-component)
    - [TypeScript](#typescript-5)
    - [JavaScript](#javascript-5)
  - [Using the `ClientProfile` Component](#using-the-clientprofile-component)
    - [TypeScript](#typescript-6)
    - [JavaScript](#javascript-6)
- [API Docs](#api-docs)
  - [Functions API Docs](#functions-api-docs)
  - [Component API Docs](#component-api-docs)
- [Types](#types)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)
- [Disclaimer](#disclaimer)

## Installation
Install the library using npm:

```
npm install tribe-api-wrapper
```

## Usage
The library provides a set of functions that can be used directly to interact with the Tribe API. It also includes pre-made React components for common tasks. You can choose to use the functions directly or utilize the components based on your needs.

### Importing Functions and Components
```typescript
import {
  getLeaderboard,
  getClientList,
  getPublicClientUserList,
  Leaderboard,
  ClientList,
  UserList,
  ClientCardLG,
  ClientCardSM
} from 'tribe-api-wrapper';
```

## Examples
### Using Functions Directly

#### Fetching List of Clients
```typescript
const clients = await getClientList();
```

#### Fetching Leaderboard Data
```typescript
const data = await getLeaderboard('example-client-id', { timePeriod: 'week', trial: true, badgeFilter: false });
```

#### Fetching Public Client User List
```typescript
const users = await getPublicClientUserList('example-client-id', { timePeriod: 'all', badgeFilter: false });
```

## Examples
### Using the `getLeaderboard` Function

#### Note:
The `client` parameter is required and can be a specific client ID or the special value \"all\" to get data for all clients.

#### TypeScript
```tsx
import { LeaderboardResponse, getLeaderboard } from 'tribe-api-wrapper';
import { useState, useEffect } from 'react';

export default function Home() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      // To fetch leaderboard data for all clients, you can use 'all' as the client parameter:
      const data = await getLeaderboard('all', { timePeriod: 'week', trial: true, badgeFilter: false });
      if (data instanceof Error) {
        setError(data.message);
      } else {
        setLeaderboardData(data as LeaderboardResponse);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : leaderboardData ? (
        leaderboardData.data.map((user) => (
          <div key={user.username}>
            Username: {user.username} <br />
            Twitter Points: {user.twitter_points} <br />
            Content Points: {user.content_points} <br />
            Total Points: {user.total_points} <br />
            {user.has_badge && `Badge: ${user.badge_icon}`} <br />
            <hr />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
```

#### JavaScript
```javascript
import { getLeaderboard } from 'tribe-api-wrapper';
import { useState, useEffect } from 'react';

export default function Home() {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getLeaderboard('example-client-id', { timePeriod: 'week', trial: true, badgeFilter: false });
      if (data instanceof Error) {
        setError(data.message);
      } else {
        setLeaderboardData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : leaderboardData ? (
      leaderboardData.data.map((user) => (
        <div key={user.username}>
          Username: {user.username} <br />
          Twitter Points: {user.twitter_points} <br />
          Content Points: {user.content_points} <br />
          Total Points: {user.total_points} <br />
          {user.has_badge && `Badge: ${user.badge_icon}`} <br />
          <hr />
        </div>
      ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

```

### Using the `Leaderboard` Component

#### TypeScript
```tsx
import { Leaderboard } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <div>
      <h1>Leaderboard</h1>
        <Leaderboard
          client="example-client-id"
          timePeriod="week"
          trial={true}
          badgeFilter={false}
          limit={10}
          className="custom-leaderboard"
          errorClassName="custom-error"
          loadingClassName="custom-loading"
          tableClassName="custom-table"
          headerClassName="custom-header"
          rowClassName="custom-row"
          badgeClassName="custom-badge"
          titleClassName="custom-title"
          textClassName="custom-text"
          badge_icon="path/to/badge/icon.png"
          style={{ border: '1px solid #ccc' }}
        />
    </div>
  );
}

```

#### JavaScript
```jsx
import { Leaderboard } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <div>
      <h1>Leaderboard</h1>
        <Leaderboard
          client="example-client-id"
          timePeriod="week"
          trial={true}
          badgeFilter={false}
          limit={10}
          className="custom-leaderboard"
          errorClassName="custom-error"
          loadingClassName="custom-loading"
          tableClassName="custom-table"
          headerClassName="custom-header"
          rowClassName="custom-row"
          badgeClassName="custom-badge"
          titleClassName="custom-title"
          textClassName="custom-text"
          badge_icon="path/to/badge/icon.png"
          style={{ border: '1px solid #ccc' }}
        />
    </div>
  );
}

```

### Using the `UserList` Component

#### TypeScript
```tsx
import { UserList } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <UserList
      client="example-client-id"
      containerClassName="custom-container"
      userClassName="custom-user"
      textClassName="custom-text"
      style={{ padding: '10px' }}
    />
  );
}
```

#### JavaScript
```jsx
import { UserList } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <UserList
      client="example-client-id"
      containerClassName="custom-container"
      userClassName="custom-user"
      textClassName="custom-text"
      style={{ padding: '10px' }}
    />
  );
}
```

### Using the `ClientList` Component

#### TypeScript
```tsx
import { ClientList } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientList
      className="custom-list"
      clientClassName="custom-client"
      avatarClassName="custom-avatar"
      backgroundClassName="custom-background"
      textClassName="custom-text"
      style={{ margin: '20px' }}
    />
  );
}
```

#### JavaScript
```jsx
import { ClientList } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientList
      className="custom-list"
      clientClassName="custom-client"
      avatarClassName="custom-avatar"
      backgroundClassName="custom-background"
      textClassName="custom-text"
      style={{ margin: '20px' }}
    />
  );
}
```

### Using the `ClientCardLG` Component

#### TypeScript
```tsx
import { ClientCardLG } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientCardLG
      client="example-client-id"
      cardClassName="custom-card-lg"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      nameClassName="custom-name"
      style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
    />
  );
}
```

#### JavaScript
```jsx
import { ClientCardLG } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientCardLG
      client="example-client-id"
      cardClassName="custom-card-lg"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      nameClassName="custom-name"
      style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
    />
  );
}
```

### Using the `ClientCardSM` Component

#### TypeScript
```tsx
import { ClientCardSM } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientCardSM
      client="example-client-id"
      cardClassName="custom-card-sm"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      nameClassName="custom-name"
      style={{ boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}
    />
  );
}
```

#### JavaScript
```jsx
import { ClientCardSM } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientCardSM
      client="example-client-id"
      cardClassName="custom-card-sm"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      nameClassName="custom-name"
      style={{ boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}
    />
  );
}
```

### Using the `ClientProfile` Component

#### TypeScript
```tsx
import { ClientProfile } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientProfile
      client="example-client-id"
      containerClassName="custom-container"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      leaderboardClassName="custom-leaderboard"
      style={{ boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}
    />
  );
}
```

#### JavaScript
```jsx
import { ClientProfile } from 'tribe-api-wrapper';

export default function Home() {
  return (
    <ClientProfile
      client="example-client-id"
      containerClassName="custom-container"
      bannerClassName="custom-banner"
      avatarClassName="custom-avatar"
      leaderboardClassName="custom-leaderboard"
      style={{ boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}
    />
  );
}
```

## API Docs

### Functions API Docs

<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Function Name</th>
    <th>Description</th>
    <th>Parameters / Options</th>
  </tr>
  <tr>
    <td><code>getLeaderboard(client: string, ...)</code></td>
    <td>Fetches the leaderboard data for the given client.</td>
    <td>
      - <code>client</code>: (Required)<br>
      - <code>timePeriod</code>: Options <code>'week'</code>, <code>'month'</code>, <code>'all'</code>. <strong>Default</strong>: <code>'all'</code> (Optional)<br>
      - <code>trial</code>: <strong>Default</strong>: true (Optional)<br>
      - <code>badgeFilter</code>: <strong>Default</strong>: false (Optional)<br>
      - <code>limit</code>: <strong>Default</strong>: 20 (Optional)
    </td>
  </tr>
  <tr>
    <td><code>getClientList(): Promise&lt;...&gt;</code></td>
    <td>Fetches the list of all clients.</td>
    <td>None</td>
  </tr>
  <tr>
    <td><code>getPublicClientUserList(client,...)</code></td>
    <td>Fetches the public client user list for the given client.</td>
    <td>
      - <code>client</code>: (Required)<br>
      - <code>timePeriod</code>: Options <code>'week'</code>, <code>'month'</code>, <code>'all'</code>. <strong>Default</strong>: <code>'all'</code> (Optional)<br>
      - <code>badgeFilter</code>: <strong>Default</strong>: false (Optional)
    </td>
  </tr>
</table>

### Component API Docs

<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Component Name</th>
    <th>Description</th>
    <th>Props</th>
  </tr>
  <tr>
    <td><code>Leaderboard</code></td>
    <td>A React component that displays a leaderboard.</td>
    <td>
      - <code>client</code>: The client ID. Defaults to <code>"all"</code> if not provided. If the <code>client</code> prop is omitted, the component will display the leaderboard for all clients. To display the leaderboard for a specific client, you must provide the client ID. (Optional)<br>
      - <code>timePeriod</code>: Options <code>'week'</code>, <code>'month'</code>, <code>'all'</code>. <strong>Default</strong>: <code>'all'</code> (Optional)<br>
      - <code>trial</code>: <strong>Default</strong>: true (Optional)<br>
      - <code>badgeFilter</code>: <strong>Default</strong>: false (Optional)<br>
      - <code>limit</code>: <strong>Default</strong>: 20 (Optional)<br>
      - <code>className</code>, <code>errorClassName</code>, <code>loadingClassName</code>, <code>tableClassName</code>, <code>headerClassName</code>, <code>rowClassName</code>, <code>badgeClassName</code>, <code>titleClassName</code>, <code>textClassName</code> (Optional)<br>
      - <code>badge_icon</code>: String representing the badge icon, can be a URL to an image (e.g., SVG, PNG, GIF), a local image path, or a text string. (Optional)<br>
      - <code>style</code>: Custom inline styles (Optional)
    </td>
  </tr>
  <tr>
    <td><code>UserList</code></td>
    <td>Renders a grid of users with customizable styles.</td>
    <td>
      - <code>client</code>: The client ID. (Required)<br>
      - <code>containerClassName</code>, <code>userClassName</code>, <code>textClassName</code>: CSS class names. (Optional).<br>
      - <code>style</code>: Inline styles for the main container. (Optional).
    </td>
  </tr>
  <tr>
    <td><code>ClientList</code></td>
    <td>Renders a list of clients with all provided properties.</td>
    <td>
      - <code>className</code>, <code>clientClassName</code>, <code>avatarClassName</code>, <code>backgroundClassName</code>, <code>textClassName</code>: CSS class names. (Optional).<br>
      - <code>style</code>: Inline styles for the main container. (Optional).
    </td>
  </tr>
  <tr>
    <td><code>ClientCardLG</code></td>
    <td>Renders a larger profile card for a client.</td>
    <td>
      - <code>client</code>: Client ID to fetch client data. (Required)<br>
      - <code>cardClassName</code>, <code>bannerClassName</code>, <code>avatarClassName</code>, <code>nameClassName</code>: CSS class names. (Optional).<br>
      - <code>style</code>: Inline styles for the card container. (Optional).
    </td>
  </tr>
  <tr>
    <td><code>ClientCardSM</code></td>
    <td>Renders a smaller profile card for a client, including the banner.</td>
    <td>
      - <code>client</code>: Client ID to fetch client data. (Required)<br>
      - <code>cardClassName</code>, <code>bannerClassName</code>, <code>avatarClassName</code>, <code>nameClassName</code>: CSS class names. (Optional).<br>
      - <code>style</code>: Inline styles for the card container. (Optional).
    </td>
  </tr>
  <tr>
    <td><code>ClientProfile</code></td>
    <td>Renders client profile and a leaderboard.</td>
    <td>
      - <code>client</code>: Client ID to fetch client data. (Required)<br>
      - <code>containerClassName</code>: CSS class for the main container. (Optional)<br>
      - <code>bannerClassName</code>: CSS class for the banner. (Optional)<br>
      - <code>avatarClassName</code>: CSS class for the avatar. (Optional)<br>
      - <code>leaderboardClassName</code>: CSS class for the leaderboard container. (Optional)<br>
      - <code>style</code>: Inline styles for the main container. (Optional).
    </td>
  </tr>
</table>
</table>

### Types
Refer to [`types.ts`](/types.ts) for the detailed type definitions.

## Contributing
Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- [GitHub](https://github.com/BankkRoll/tribe-api-wrapper)
- [npm](https://www.npmjs.com/package/tribe-api-wrapper)
- [storybook](https://tribe-api-wrapper.vercel.app/)
- [developer](https://x.com/bankkroll_eth)

## Disclaimer
Please note that this library was developed independently and is not associated with or endorsed by [Tribe](https://mytriberewards.com/). It is intended for responsible and ethical use and is not designed to violate or circumvent Tribe's terms of service.

The library is provided "as-is," and users are encouraged to review Tribe's terms of service and ensure compliance with all applicable regulations. Use of this library is at your own risk, and the authors make no warranties or representations regarding its legality, reliability, or fitness for a particular purpose.