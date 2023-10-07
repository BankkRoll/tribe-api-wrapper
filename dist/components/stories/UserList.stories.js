"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/UserList.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../../index");
exports.default = {
    title: "Components/UserList",
    component: index_1.UserList,
    tags: ["autodocs"],
    argTypes: {
        client: {
            control: "text",
            description: "The client to fetch client data. Required.",
        },
        containerClassName: {
            control: "text",
            description: "CSS class for the container. Optional.",
        },
        userClassName: {
            control: "text",
            description: "CSS class for individual user items. Optional.",
        },
        textClassName: {
            control: "text",
            description: "CSS class for text elements. Optional.",
        },
        style: {
            control: "object",
            description: "Inline styles for the container. Optional.",
        },
    },
};
const Template = (args) => (react_1.default.createElement(index_1.UserList, { ...args }));
exports.Default = Template.bind({});
exports.Default.args = {
    client: "OD Labs",
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    containerClassName: "",
    userClassName: "",
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
    },
};
//# sourceMappingURL=UserList.stories.js.map