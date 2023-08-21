"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Introduction = void 0;
const react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Introduction',
};
const Introduction = () => (react_1.default.createElement("div", { style: { fontFamily: "'Helvetica, Arial, sans-serif'", lineHeight: '1.6', color: '#000' } },
    react_1.default.createElement("div", { style: { padding: '20px', maxWidth: '800px', margin: '0 auto' } },
        react_1.default.createElement("h1", { style: { borderBottom: '2px solid #ccc', paddingBottom: '10px' } }, "Introduction to `tribe-api-wrapper`"),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Features"),
            react_1.default.createElement("ul", { style: { paddingLeft: '40px', listStyleType: 'circle' } },
                react_1.default.createElement("li", null, "Comprehensive React components for leaderboards, client cards, user lists, and more."),
                react_1.default.createElement("li", null, "Intuitive functions for interacting with Tribe API endpoints."),
                react_1.default.createElement("li", null, "Customizable styling for tailored user experiences."),
                react_1.default.createElement("li", null, "Robust TypeScript support for enhanced code quality."))),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Installation"),
            react_1.default.createElement("pre", { style: { background: '#f5f5f5', padding: '10px', borderRadius: '5px', fontFamily: 'monospace', color: '#333' } }, "npm install tribe-api-wrapper")),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Usage"),
            react_1.default.createElement("p", null, "Utilize either pre-made React components or direct functions to interact with the Tribe API as per your requirements.")),
        react_1.default.createElement("h2", null, "Components"),
        react_1.default.createElement("ul", { style: { paddingLeft: '40px', listStyleType: 'circle' } },
            react_1.default.createElement("li", null, "ClientProfile"),
            react_1.default.createElement("li", null, "ClientCardLG"),
            react_1.default.createElement("li", null, "ClientCardSM"),
            react_1.default.createElement("li", null, "ClientList"),
            react_1.default.createElement("li", null, "Leaderboard"),
            react_1.default.createElement("li", null, "UserList")),
        react_1.default.createElement("h2", null, "Links"),
        react_1.default.createElement("ul", { style: { paddingLeft: '40px', listStyleType: 'circle' } },
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: 'https://www.npmjs.com/package/tribe-api-wrapper', target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none', color: '#007bf5' } }, "View NPM Package")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: 'https://github.com/BankkRoll/tribe-api-wrapper', target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none', color: '#007bf5' } }, "View GitHub")),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: 'https://x.com/bankkroll_eth', target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none', color: '#007bf5' } }, "BankkRoll on Twitter"))),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Disclaimer"),
            react_1.default.createElement("p", null,
                "Note: This library was independently developed by ",
                react_1.default.createElement("a", { href: "https://x.com/bankkroll_eth", target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none', color: '#007bff' } }, "BankkRoll"),
                " and is neither associated with nor endorsed by",
                react_1.default.createElement("a", { href: "https://mytriberewards.com/", target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none', color: '#007bf5' } }, " Tribe"),
                ". It adheres to ethical usage and complies with Tribe's terms of service.")))));
exports.Introduction = Introduction;
exports.Introduction.storyName = 'Introduction';
//# sourceMappingURL=Introduction.stories.js.map