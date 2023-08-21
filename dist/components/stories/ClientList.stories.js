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
    title: 'Components/ClientList',
    component: index_1.ClientList,
};
const Template = (args) => react_1.default.createElement(index_1.ClientList, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    className: 'custom-class',
    clientClassName: 'custom-client-class',
    avatarClassName: 'custom-avatar-class',
    backgroundClassName: 'custom-background-class',
    textClassName: 'custom-text-class',
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
//# sourceMappingURL=ClientList.stories.js.map