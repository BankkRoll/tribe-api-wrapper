# tribe-api-wrapper
[![npm](https://img.shields.io/npm/v/tribe-api-wrapper)](https://www.npmjs.com/package/tribe-api-wrapper)
![npm](https://img.shields.io/npm/dt/tribe-api-wrapper)
![NPM](https://img.shields.io/npm/l/tribe-api-wrapper)
![GitHub issues](https://img.shields.io/github/issues/BankkRoll/tribe-api-wrapper)

This package is designed to offer an accessible and efficient interface for the [Tribe](https://mytriberewards.com/) Leaderboard API. It encompasses a React component for visualizing leaderboards and a set of functions that were intended to facilitate various interactions with the API endpoints.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Using the getLeaderboard Function](#using-the-getleaderboard-function)
    - [TypeScript](#typescript)
    - [JavaScript](#javascript)
  - [Using the Leaderboard Component](#using-the-leaderboard-component)
    - [TypeScript](#typescript-1)
    - [JavaScript](#javascript-1)
- [API Docs](#api-docs)
  - [Functions API Docs](#functions-api-docs)
  - [Component API Docs](#component-api-docs)
- [Types](#types)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)

## Installation
Install the library using npm:

```
npm install tribe-api-wrapper
```

## Usage
Import the necessary functions and components from the library:

```typescript
import { getLeaderboard, Leaderboard } from 'tribe-api-wrapper';
```

## Examples
### Using the getLeaderboard Function

#### TypeScript
```tsx
import { LeaderboardResponse, getLeaderboard } from 'tribe-api-wrapper';
import { useState, useEffect } from 'react';

export default function Home() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getLeaderboard('example-client-id', { timePeriod: 'week', trial: true, badgeFilter: false });
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
            {user.username}: {user.total_points} points
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
            {user.username}: {user.total_points} points
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

```

### Using the Leaderboard Component

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
          className="custom-leaderboard"
          errorClassName="custom-error"
          loadingClassName="custom-loading"
          userClassName="custom-user"
          tableClassName="custom-table"
          headerClassName="custom-header"
          rowClassName="custom-row"
          badgeClassName="custom-badge"
          titleClassName="custom-title"
          textClassName="custom-text"
          badgeIcon="path/to/badge/icon.png"
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
          className="custom-leaderboard"
          errorClassName="custom-error"
          loadingClassName="custom-loading"
          userClassName="custom-user"
          tableClassName="custom-table"
          headerClassName="custom-header"
          rowClassName="custom-row"
          badgeClassName="custom-badge"
          titleClassName="custom-title"
          textClassName="custom-text"
          badgeIcon="path/to/badge/icon.png"
          style={{ border: '1px solid #ccc' }}
        />
    </div>
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
      - <code>badgeFilter</code>: <strong>Default</strong>: false (Optional)
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
      - <code>client</code>: (Required)<br>
      - <code>timePeriod</code>: Options <code>'week'</code>, <code>'month'</code>, <code>'all'</code>. <strong>Default</strong>: <code>'all'</code> (Optional)<br>
      - <code>trial</code>: <strong>Default</strong>: true (Optional)<br>
      - <code>badgeFilter</code>: <strong>Default</strong>: false (Optional)<br>
      - <code>className</code>, <code>errorClassName</code>, <code>loadingClassName</code>, <code>userClassName</code>, <code>tableClassName</code>, <code>headerClassName</code>, <code>rowClassName</code>, <code>badgeClassName</code>, <code>titleClassName</code>, <code>textClassName</code> (Optional)<br>
      - <code>badgeIcon</code>: String representing the badge icon (Optional)<br>
      - <code>style</code>: Custom inline styles (Optional)
    </td>
  </tr>
</table>



### Types
Refer to [`types.ts`](/types.ts) for the detailed type definitions.

## Contributing
Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer
Please note that this library was developed independently and is not associated with or endorsed by [Tribe](https://mytriberewards.com/). It is intended for responsible and ethical use and is not designed to violate or circumvent Tribe's terms of service.

The library is provided "as-is," and users are encouraged to review Tribe's terms of service and ensure compliance with all applicable regulations. Use of this library is at your own risk, and the authors make no warranties or representations regarding its legality, reliability, or fitness for a particular purpose.