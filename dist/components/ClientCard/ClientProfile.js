"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientProfile = void 0;
// components/ClientProfile.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
const Leaderboard_1 = require("../Leaderboard");
/**
 * The ClientProfile component.
 * Renders a detailed profile view for the given client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [leaderboardClassName] - CSS class for the leaderboard container. Optional.
 * @returns A React component that renders a detailed client profile including a leaderboard.
 */
const ClientProfile = ({ client, containerClassName, bannerClassName, avatarClassName, leaderboardClassName, }) => {
    const [clientData, setClientData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (0, index_1.getClientList)().then((response) => {
            if ("data" in response) {
                const foundClient = response.data.find((c) => c.client === client);
                setClientData(foundClient || null);
            }
        });
    }, [client]);
    if (!clientData)
        return react_1.default.createElement("div", null, "Loading...");
    return (react_1.default.createElement("div", { className: `client-profile-container ${containerClassName}`, style: { maxWidth: "800px", margin: "0 auto" } },
        react_1.default.createElement("div", { className: `client-banner ${bannerClassName}`, style: {
                height: "300px",
                backgroundImage: `url(${clientData.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                borderRadius: "10px 10px 0 0",
            } },
            react_1.default.createElement("img", { src: clientData.avatar, className: `client-avatar ${avatarClassName}`, alt: `${clientData.client} avatar`, style: {
                    width: "150px",
                    borderRadius: "75px",
                    position: "absolute",
                    bottom: "-75px",
                    left: "10%",
                    zIndex: 2,
                    border: "5px solid white",
                } })),
        react_1.default.createElement("div", { className: `client-leaderboard ${leaderboardClassName}`, style: { padding: "100px 20px 20px", borderRadius: "0 0 10px 10px" } },
            react_1.default.createElement(Leaderboard_1.Leaderboard, { client: client }))));
};
exports.ClientProfile = ClientProfile;
//# sourceMappingURL=ClientProfile.js.map