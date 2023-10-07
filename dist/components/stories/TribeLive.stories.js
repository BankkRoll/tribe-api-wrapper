"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TribeLive = void 0;
const react_1 = __importDefault(require("react"));
exports.default = {
    title: "Tribe",
};
const TribeLive = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("iframe", { title: "Tribe Rewards", src: "https://mytriberewards.com/", width: "100%", height: "800", sandbox: "allow-scripts allow-same-origin", loading: "lazy" })));
exports.TribeLive = TribeLive;
exports.TribeLive.storyName = "Tribe";
//# sourceMappingURL=TribeLive.stories.js.map