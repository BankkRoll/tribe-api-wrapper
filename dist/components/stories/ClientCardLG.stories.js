"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/ClientCard/ClientCardLG.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
exports.default = {
    title: "Components/ClientCardLG",
    component: index_1.ClientCardLG,
    tags: ["autodocs"],
    argTypes: {
        client: {
            control: "text",
            description: "The client to fetch client data. Required.",
        },
        cardClassName: {
            control: "text",
            description: "CSS class for the card container. Optional.",
        },
        bannerClassName: {
            control: "text",
            description: "CSS class for the banner. Optional.",
        },
        avatarClassName: {
            control: "text",
            description: "CSS class for the avatar. Optional.",
        },
        style: {
            control: "object",
            description: "Inline styles for the card container. Optional.",
        },
    },
};
const Template = (args) => react_1.default.createElement(index_1.ClientCardLG, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {
    client: "OD Labs",
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    cardClassName: "",
    bannerClassName: "",
    avatarClassName: "",
    nameClassName: "",
    style: {
        fontFamily: "'Helvetica, Arial, sans-serif",
        textAlign: "center",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        background: "linear-gradient(135deg, #f3f3f3 0%, #e1e1e1 100%)",
        margin: "10px 0",
        alignItems: "center",
        justifyContent: "center",
    },
};
//# sourceMappingURL=ClientCardLG.stories.js.map