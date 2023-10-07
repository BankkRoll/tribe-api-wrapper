"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/ClientProfile.stories.tsx
// components/ClientProfile.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
exports.default = {
    title: "Components/ClientProfile",
    component: index_1.ClientProfile,
    tags: ["autodocs"],
    argTypes: {
        client: {
            control: "text",
            description: "The client to fetch client data. Required.",
        },
        containerClassName: {
            control: "text",
            description: "CSS class for the main container. Optional.",
        },
        bannerClassName: {
            control: "text",
            description: "CSS class for the banner. Optional.",
        },
        avatarClassName: {
            control: "text",
            description: "CSS class for the avatar. Optional.",
        },
        leaderboardClassName: {
            control: "text",
            description: "CSS class for the leaderboard. Optional.",
        },
        style: {
            control: "object",
            description: "Inline styles for the main container. Optional.",
        },
    },
};
const Template = (args) => (react_1.default.createElement(index_1.ClientProfile, { ...args }));
exports.Default = Template.bind({});
exports.Default.args = {
    client: "OD Labs",
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    containerClassName: "",
    bannerClassName: "",
    avatarClassName: "",
    leaderboardClassName: "",
    style: {
        fontFamily: "'Helvetica, Arial, sans-serif",
        textAlign: "center",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "10px 0",
        alignItems: "center",
        justifyContent: "center",
    },
};
//# sourceMappingURL=ClientProfile.stories.js.map