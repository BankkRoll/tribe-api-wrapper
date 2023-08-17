# tribe-api-wrapper
![npm](https://img.shields.io/npm/v/tribe-api-wrapper)
![npm](https://img.shields.io/npm/dt/tribe-api-wrapper)
![NPM](https://img.shields.io/npm/l/tribe-api-wrapper)
![GitHub issues](https://img.shields.io/github/issues/BankkRoll/tribe-api-wrapper)

This library is designed to offer an accessible and efficient way to retrieve and manage data from the Leaderboard API. It encompasses a React component for visualizing leaderboards and a set of functions that facilitate various interactions with the API endpoints. Together, these features empower developers to create engaging experiences around leaderboards.

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
  - [Functions](#functions)
  - [Detailed Function Descriptions](#detailed-function-descriptions)
    - [`getLeaderboard()`](#getleaderboard)
    - [`getClientList()`](#getclientlist)
    - [`getPublicClientUserList()`](#getpublicclientuserlist)
  - [Component API Docs](#component-api-docs)
    - [`Leaderboard`](#leaderboard)
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
```typescript
import { getLeaderboard } from 'tribe-api-wrapper';

const client = 'example-client-id';
const options = { timePeriod: 'week' };

getLeaderboard(client, options).then(data => {
  console.log(data);
});
```

#### JavaScript
```javascript
import { getLeaderboard } from 'tribe-api-wrapper';

const client = 'example-client-id';
const options = { timePeriod: 'week' };

getLeaderboard(client, options).then(data => {
  console.log(data);
});
```

### Using the Leaderboard Component

#### TypeScript
```tsx
import React from 'react';
import { Leaderboard } from 'tribe-api-wrapper';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Leaderboard Page</h1>
      <Leaderboard
        client="example-client-id"
        timePeriod="week"
        className="custom-leaderboard"
        titleClassName="custom-title"
        errorClassName="custom-error"
        loadingClassName="custom-loading"
        userClassName="custom-user"
      />
    </div>
  );
};

export default App;
```

#### JavaScript
```jsx
import React from 'react';
import { Leaderboard } from 'tribe-api-wrapper';

const App = () => {
  return (
    <div>
      <h1>My Leaderboard Page</h1>
      <Leaderboard
        client="example-client-id"
        timePeriod="week"
        className="custom-leaderboard"
        titleClassName="custom-title"
        errorClassName="custom-error"
        loadingClassName="custom-loading"
        userClassName="custom-user"
      />
    </div>
  );
};

export default App;
```


## API Docs
### Functions
- `getLeaderboard(client: string, options?: LeaderboardOptions): Promise<LeaderboardResponse | Error>`
- `getClientList(): Promise<ClientListResponse | Error>`
- `getPublicClientUserList(client: string, options?: { timePeriod?: string; badgeFilter?: boolean }): Promise<PublicClientUserListResponse | Error>`

### Detailed Function Descriptions

### `getLeaderboard()`

Fetches the leaderboard data for the given client.

**Options:**
- `timePeriod`: Filter by time period - ('all', 'week', or 'month') - (optional) - (default: all).
- `trial`: A boolean value to include/exclude trial data - (optional) - (default: true).
- `badgeFilter`: A boolean value to filter by badges - (optional) - (default: false).

**Usage:**
```typescript
import { getLeaderboard } from 'tribe-api-wrapper';

const client = 'example-client-id';
const options = { timePeriod: 'week' };
getLeaderboard(client, options);
```

**Example Response:**
```json
{
  "data": [
    {
      "username": "JohnDoe",
      "has_badge": true,
      "twitter_points": 100,
      "content_points": 200,
      "total_points": 300
    }
  ]
}
```

### `getClientList()`

Fetches the list of clients.

**Usage:**
```typescript
import { getClientList } from 'tribe-api-wrapper';

getClientList();
```

**Example Response:**
```json
{
  "data": [
    {
      "client": "example-client-id",
      "trial": true,
      "avatar": "avatar.png",
      "background": "background.png",
      "is_hidden": false
    }
  ]
}
```

### `getPublicClientUserList()`

Fetches the public client user list for the given client.

**Options:**
- `timePeriod`: Filter by time period - ('all', 'week', or 'month') - (optional) - (default: 'all').
- `badgeFilter`: A boolean value to filter by badges - (optional).

**Usage:**
```typescript
import { getPublicClientUserList } from 'tribe-api-wrapper';

const client = 'example-client-id';
const options = { timePeriod: 'week' };
getPublicClientUserList(client, options);
```

**Example Response:**
```json
{
  "data": [
    {
      "username": "JohnDoe",
      "has_badge": true,
      "twitter_points": 100,
      "content_points": 200,
      "total_points": 300
    },
    // More entries...
  ]
}
```

### Component API Docs

#### `Leaderboard`

A React component that displays a leaderboard for the given client, including the username and total points for each user. The leaderboard can be customized using various options.

**Props:**
- `client`: The client ID (string) - Required.
- `timePeriod`: Filter by time period ('all', 'week', or 'month') - (optional) - (default: 'all').
- `trial`: A boolean value to include/exclude trial data - (optional) - (default: true).
- `badgeFilter`: A boolean value to filter by badges - (optional) - (default: false).
- `className`: Custom CSS class for the main container - (optional).
- `titleClassName`: Custom CSS class for the title - (optional).
- `errorClassName`: Custom CSS class for error messages - (optional).
- `loadingClassName`: Custom CSS class for loading messages - (optional).
- `userClassName`: Custom CSS class for user entries - (optional).
- `style`: Custom inline styles for the main container - (optional).

**Usage:**
```typescript
import { Leaderboard } from 'tribe-api-wrapper';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Leaderboard Page</h1>
      <Leaderboard
        client="example-client-id"
        timePeriod="week"
        trial={true}
        badgeFilter={false}
        className="custom-leaderboard"
        titleClassName="custom-title"
        errorClassName="custom-error"
        loadingClassName="custom-loading"
        userClassName="custom-user"
        style={{ border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default App;
```

**Rendered Component:**
```
   Leaderboard
  ──────────────────────────────────────
  Member   Twitter Points  Content Points  Total Earned
  John Doe    65000           -               68000
  Doe John    55000           -               58000
  ──────────────────────────────────────
```

### Types
Refer to `types.ts` for the detailed type definitions.

## Contributing
Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer
Please note that this library was developed independently and is not associated with or endorsed by [Tribe](https://mytriberewards.com/). It is intended for responsible and ethical use and is not designed to violate or circumvent Tribe's terms of service.

The library is provided "as-is," and users are encouraged to review Tribe's terms of service and ensure compliance with all applicable regulations. Use of this library is at your own risk, and the authors make no warranties or representations regarding its legality, reliability, or fitness for a particular purpose.
