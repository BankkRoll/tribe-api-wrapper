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
exports.ClientCardSM = void 0;
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
/**
 * The ClientCardSM component
 * Renders a smaller profile card for a client and provides options for customization.
 * @param {string} client - The client ID to fetch client data. Required.
 * @param {string} [cardClassName] - CSS class for the card container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card with a banner.
 */
const ClientCardSM = ({ client, cardClassName, bannerClassName, avatarClassName, style, }) => {
    const [clientData, setClientData] = (0, react_1.useState)(null);
    /**
     * Fetches client card data from API
     */
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
    return (react_1.default.createElement("div", { className: `client-card client-card-sm ${cardClassName}`, style: {
            ...style,
            width: "200px",
            border: "1px solid #ccc",
            position: "relative",
            borderRadius: "10px",
        } },
        react_1.default.createElement("div", { className: `client-banner ${bannerClassName}`, style: {
                height: "150px",
                backgroundImage: `url(${clientData.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid #ccc",
                position: "relative",
                borderRadius: "10px",
            } },
            react_1.default.createElement("img", { src: clientData.avatar, className: `client-avatar ${avatarClassName}`, alt: `${clientData.client} avatar`, style: {
                    width: "50px",
                    borderRadius: "14px",
                    position: "absolute",
                    bottom: "-25px",
                    left: "10%",
                    zIndex: 2,
                } }))));
};
exports.ClientCardSM = ClientCardSM;
//# sourceMappingURL=ClientCardSM.js.map