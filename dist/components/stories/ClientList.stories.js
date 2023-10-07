"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/ClientList.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
exports.default = {
    title: "Components/ClientList",
    component: index_1.ClientList,
    tags: ["autodocs"],
    argTypes: {
        className: {
            control: "text",
            description: "CSS class for the main container. Optional.",
        },
        clientClassName: {
            control: "text",
            description: "CSS class for individual client container. Optional.",
        },
        avatarClassName: {
            control: "text",
            description: "CSS class for client avatar. Optional.",
        },
        backgroundClassName: {
            control: "text",
            description: "CSS class for client background. Optional.",
        },
        textClassName: {
            control: "text",
            description: "CSS class for text elements. Optional.",
        },
        style: {
            control: "object",
            description: "Inline styles for the main container. Optional.",
        },
    },
};
const Template = (args) => react_1.default.createElement(index_1.ClientList, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    className: "",
    clientClassName: "",
    avatarClassName: "",
    backgroundClassName: "",
    textClassName: "",
    style: {
        fontFamily: "'Helvetica, Arial, sans-serif",
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
//# sourceMappingURL=ClientList.stories.js.map