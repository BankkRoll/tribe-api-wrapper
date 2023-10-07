"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.WithBadgeFilter = exports.CustomBadge = exports.Monthly = exports.Weekly = exports.Custom_Limit = exports.Default = void 0;
// components/Leaderboard.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
// Story metadata
const metadata = {
    title: "Components/Leaderboard",
    component: index_1.Leaderboard,
    tags: ["autodocs"],
    argTypes: {
        client: {
            control: "text",
            description: "The client to fetch client data. Required.",
        },
        limit: {
            control: "number",
            description: "The number of leaderboard entries to show. Optional.",
        },
        timePeriod: {
            control: "text",
            description: 'The time period for the leaderboard ("week" or "month" - DEFAULT IS ALL TIME). Optional.',
        },
        badge_icon: {
            control: "text",
            description: "The badge icon URL. Optional.",
        },
        badgeFilter: {
            control: "boolean",
            description: "Whether to filter by badge or not. Optional.",
        },
        className: {
            control: "text",
            description: "CSS class for the main container. Optional.",
        },
        errorClassName: {
            control: "text",
            description: "CSS class for the error state. Optional.",
        },
        loadingClassName: {
            control: "text",
            description: "CSS class for the loading state. Optional.",
        },
        tableClassName: {
            control: "text",
            description: "CSS class for the table. Optional.",
        },
        titleClassName: {
            control: "text",
            description: "CSS class for the title. Optional.",
        },
        textClassName: {
            control: "text",
            description: "CSS class for text elements. Optional.",
        },
        headerClassName: {
            control: "text",
            description: "CSS class for the table header. Optional.",
        },
        rowClassName: {
            control: "text",
            description: "CSS class for table rows. Optional.",
        },
        badgeClassName: {
            control: "text",
            description: "CSS class for the badge. Optional.",
        },
        style: {
            control: "object",
            description: "Inline styles for the main container. Optional.",
        },
    },
};
// Story template
const Template = (args) => react_1.default.createElement(index_1.Leaderboard, { ...args });
// Default story
exports.Default = Template.bind({});
exports.Default.args = {
    client: "all",
};
// Additional stories
exports.Custom_Limit = Template.bind({});
exports.Custom_Limit.args = { ...exports.Default.args, limit: 5 };
exports.Weekly = Template.bind({});
exports.Weekly.args = { ...exports.Default.args, timePeriod: "week" };
exports.Monthly = Template.bind({});
exports.Monthly.args = { ...exports.Default.args, timePeriod: "month" };
exports.CustomBadge = Template.bind({});
exports.CustomBadge.args = {
    ...exports.Default.args,
    badge_icon: "https://pbs.twimg.com/profile_images/1669770046195859464/sXeMCJC9_400x400.jpg",
};
exports.WithBadgeFilter = Template.bind({});
exports.WithBadgeFilter.args = { ...exports.Default.args, badgeFilter: true };
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    className: "",
    errorClassName: "",
    loadingClassName: "",
    tableClassName: "",
    titleClassName: "",
    textClassName: "",
    headerClassName: "",
    rowClassName: "",
    badgeClassName: "",
    badge_icon: "https://pbs.twimg.com/profile_images/1669770046195859464/sXeMCJC9_400x400.jpg",
    style: {
        fontFamily: "Helvetica, Arial, sans-serif",
        textAlign: "center",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "10px 0",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
        maxHeight: "400px",
        background: "linear-gradient(to bottom, #f7f457, #e156e1)",
    },
};
exports.default = metadata;
//# sourceMappingURL=Leaderboard.stories.js.map