"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.WithBadgeFilter = exports.CustomBadge = exports.Monthly = exports.Weekly = exports.All_Time = exports.Default = void 0;
// components/Leaderboard.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../../index");
exports.default = {
    title: 'Components/Leaderboard',
    component: index_1.Leaderboard,
};
const Template = (args) => react_1.default.createElement(index_1.Leaderboard, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {
    client: 'OD Labs'
};
exports.All_Time = Template.bind({});
exports.All_Time.args = {
    ...exports.Default.args,
    timePeriod: 'week',
};
exports.Weekly = Template.bind({});
exports.Weekly.args = {
    ...exports.Default.args,
    timePeriod: 'week',
};
exports.Monthly = Template.bind({});
exports.Monthly.args = {
    ...exports.Default.args,
    timePeriod: 'month',
};
exports.CustomBadge = Template.bind({});
exports.CustomBadge.args = {
    ...exports.Default.args,
    badge_icon: './assets/TRIBENFTCO.png',
};
exports.WithBadgeFilter = Template.bind({});
exports.WithBadgeFilter.args = {
    ...exports.Default.args,
    badgeFilter: true
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    badge_icon: './assets/TRIBENFTCO.png',
    badgeFilter: false,
    className: 'custom-class',
    errorClassName: 'error-class',
    loadingClassName: 'loading-class',
    tableClassName: 'table-class',
    titleClassName: 'title-class',
    textClassName: 'text-class',
    headerClassName: 'header-class',
    rowClassName: 'row-class',
    badgeClassName: 'badge-class',
    style: {
        fontFamily: "'Helvetica, Arial, sans-serif",
        textAlign: 'center',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px 0',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
//# sourceMappingURL=Leaderboard.stories.js.map