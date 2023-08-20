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
// components/Leaderboard.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("../index");
/**
 * The Leaderboard component.
 * Renders the leaderboard for the given client and provides options for customization.
 * @param {string} client - The client ID. Required.
 * @param {string} [timePeriod=''] - Filter by time period ('', 'week', or 'month'). Optional.
 * @param {boolean} [trial=true] - A boolean value to include/exclude trial data. Optional.
 * @param {boolean} [badgeFilter=false] - A boolean value to filter by badges. Optional.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [errorClassName] - CSS class for error messages. Optional.
 * @param {string} [loadingClassName] - CSS class for loading messages. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
const Leaderboard = ({ client, timePeriod, trial, badgeFilter, className, errorClassName, loadingClassName, tableClassName, titleClassName, textClassName, headerClassName, rowClassName, badgeClassName, badge_icon = 'static/media/public/images/TRIBENFTCO.png', style, }) => {
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
    return (react_1.default.createElement("div", { className: `${className} leaderboard-container`, style: { borderRadius: '10px', border: '1px solid #e1e1e1', padding: '20px', overflow: 'hidden', background: '#f7f7f7', ...style } },
        react_1.default.createElement("h3", { style: { margin: '0 0 15px', fontWeight: '600' } },
            client,
            " Leaderboard"),
        error ? (react_1.default.createElement("div", { className: `${errorClassName} ${textClassName}`, style: { color: '#d9534f', fontWeight: '500' } },
            "Error: ",
            error)) : leaderboardData && Array.isArray(leaderboardData.data) ? (react_1.default.createElement("table", { className: tableClassName, style: { width: '100%', borderCollapse: 'collapse' } },
            react_1.default.createElement("thead", { className: headerClassName },
                react_1.default.createElement("tr", { style: { borderBottom: '1px solid #d1d1d1', fontWeight: '500', fontSize: '14px', color: '#555' } },
                    react_1.default.createElement("th", { className: titleClassName }, "Member"),
                    react_1.default.createElement("th", { className: titleClassName }, "Twitter Points"),
                    react_1.default.createElement("th", { className: titleClassName }, "Content Points"),
                    react_1.default.createElement("th", { className: titleClassName }, "Total Earned"))),
            react_1.default.createElement("tbody", null, leaderboardData.data.map((user, index) => (react_1.default.createElement("tr", { key: user.username, className: rowClassName, style: { backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', padding: '15px 0', lineHeight: '1.5' } },
                react_1.default.createElement("td", { className: textClassName, style: { display: 'flex', alignItems: 'center', fontSize: '14px', color: '#333' } },
                    user.has_badge ? (react_1.default.createElement("span", { className: badgeClassName, style: { marginRight: '10px' } },
                        react_1.default.createElement("img", { src: badge_icon, alt: "badge", style: { width: '20px', height: '20px' } }))) : '',
                    user.username),
                react_1.default.createElement("td", { className: textClassName, style: { fontSize: '14px', color: '#333' } }, user.twitter_points),
                react_1.default.createElement("td", { className: textClassName, style: { fontSize: '14px', color: '#333' } }, user.content_points),
                react_1.default.createElement("td", { className: textClassName, style: { fontSize: '14px', color: '#333' } }, user.total_points))))))) : (react_1.default.createElement("div", { className: `${loadingClassName} ${textClassName}`, style: { color: '#666', fontStyle: 'italic', fontSize: '14px' } }, "Loading..."))));
};
exports.Leaderboard = Leaderboard;
//# sourceMappingURL=Leaderboard.js.map