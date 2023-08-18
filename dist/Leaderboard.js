"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
// Leaderboard.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("./index");
/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} client - The client ID. Required.
 * @param {string} [timePeriod='all'] - Filter by time period ('all', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
const Leaderboard = ({ client, timePeriod = 'all', trial, badgeFilter, className, errorClassName, loadingClassName, tableClassName, titleClassName, textClassName, headerClassName, rowClassName, badgeClassName, badgeIcon = '✔️', style, }) => {
    const [leaderboardData, setLeaderboardData] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    /**
     * Fetch the leaderboard data on component mount and whenever the specified dependencies change.
     */
    (0, react_1.useEffect)(() => {
        async function fetchData() {
            const data = await (0, index_1.getLeaderboard)(client, { timePeriod, trial, badgeFilter });
            if (data instanceof Error) {
                setError(data.message);
            }
            else {
                setLeaderboardData(data);
            }
        }
        fetchData();
    }, [client, timePeriod, trial, badgeFilter]);
    /**
     * Check if leaderboardData.data is an array before mapping
     */
    (0, react_1.useEffect)(() => {
        // Check if leaderboardData.data is an array before mapping
        if (leaderboardData && !Array.isArray(leaderboardData.data)) {
            setError("Invalid client ID or unexpected response format");
        }
    }, [leaderboardData]);
    /**
     * Render the leaderboard component.
     * Displays a loading message while the data is being fetched.
     * Displays an error message if there is an issue fetching the data.
     * Lists users with their usernames and total points.
     */
    return (react_1.default.createElement("div", { className: className, style: style }, error ? (react_1.default.createElement("div", { className: `${errorClassName} ${textClassName}` },
        "Error: ",
        error)) : leaderboardData && Array.isArray(leaderboardData.data) ? (react_1.default.createElement("table", { className: tableClassName },
        react_1.default.createElement("thead", { className: headerClassName },
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { className: titleClassName }, "Member"),
                react_1.default.createElement("th", { className: titleClassName }, "Twitter Points"),
                react_1.default.createElement("th", { className: titleClassName }, "Content Points"),
                react_1.default.createElement("th", { className: titleClassName }, "Total Earned"))),
        react_1.default.createElement("tbody", null, leaderboardData.data.map((user) => (react_1.default.createElement("tr", { key: user.username, className: rowClassName },
            react_1.default.createElement("td", { className: textClassName },
                user.has_badge ? react_1.default.createElement("span", { className: badgeClassName },
                    react_1.default.createElement("img", { src: badgeIcon, alt: "badge" })) : '',
                " ",
                user.username),
            react_1.default.createElement("td", { className: textClassName }, user.twitter_points),
            react_1.default.createElement("td", { className: textClassName }, user.content_points),
            react_1.default.createElement("td", { className: textClassName }, user.total_points))))))) : (react_1.default.createElement("div", { className: `${loadingClassName} ${textClassName}` }, "Loading..."))));
};
exports.Leaderboard = Leaderboard;
//# sourceMappingURL=Leaderboard.js.map