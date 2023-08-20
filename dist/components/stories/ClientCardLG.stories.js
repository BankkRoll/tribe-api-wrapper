"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.Default = void 0;
// components/ClientCard/ClientCardLG.stories.tsx
const react_1 = __importDefault(require("react"));
const ClientCardLG_1 = require("../ClientCard/ClientCardLG");
exports.default = {
    title: 'Components/ClientCardLG',
    component: ClientCardLG_1.ClientCardLG,
};
const Template = (args) => react_1.default.createElement(ClientCardLG_1.ClientCardLG, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {
    clientId: 'OD Labs',
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    cardClassName: 'custom-card-class',
    bannerClassName: 'custom-banner-class',
    avatarClassName: 'custom-avatar-class',
    nameClassName: 'custom-name-class',
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
//# sourceMappingURL=ClientCardLG.stories.js.map