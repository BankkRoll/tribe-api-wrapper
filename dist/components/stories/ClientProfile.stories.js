"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/ClientProfile.stories.tsx
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
exports.default = {
    title: 'Components/ClientProfile',
    component: index_1.ClientProfile,
};
const Template = (args) => react_1.default.createElement(index_1.ClientProfile, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {
    clientId: 'OD Labs',
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    containerClassName: 'custom-container-class',
    bannerClassName: 'custom-banner-class',
    avatarClassName: 'custom-avatar-class',
    nameContainerClassName: 'custom-name-container-class',
    nameClassName: 'custom-name-class',
    userListClassName: 'custom-user-list-container-class',
    userContainerClassName: 'custom-user-container-class',
    userClassName: 'custom-user-name-class',
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
//# sourceMappingURL=ClientProfile.stories.js.map