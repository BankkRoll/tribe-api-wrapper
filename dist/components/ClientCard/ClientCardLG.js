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
exports.ClientCardLG = void 0;
// components/ClientCard/ClientCardLG.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
/**
 * The ClientCardSM component renders a smaller profile card for a client.
 * @param {ClientData} client - The client data, including the avatar URL, client name, and trial status. Required.
 * @param {string} [cardClassName = ''] - CSS class for the card container. Optional.
 * @param {string} [avatarClassName = ''] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName = ''] - CSS class for the name. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the card container. Optional.
 * @returns A React component that renders a compact client profile card.
 */
const ClientCardLG = ({ clientId, cardClassName = '', bannerClassName = '', avatarClassName = '', nameClassName = '', style, }) => {
    const [client, setClient] = (0, react_1.useState)(null);
    /**
     * Fetches client card data from API
     */
    (0, react_1.useEffect)(() => {
        (0, index_1.getClientList)().then((response) => {
            if ('data' in response) {
                const foundClient = response.data.find((c) => c.client === clientId);
                setClient(foundClient || null);
            }
        });
    }, [clientId]);
    if (!client)
        return react_1.default.createElement("div", null, "Loading...");
    return (react_1.default.createElement("div", { className: `client-card client-card-lg ${cardClassName}`, style: { border: '1px solid #ccc', ...style } },
        react_1.default.createElement("div", { className: `client-banner ${bannerClassName}`, style: { height: '100px', backgroundImage: `url(${client.background})`, position: 'relative' } },
            react_1.default.createElement("img", { src: client.avatar, className: `client-avatar ${avatarClassName}`, alt: `${client.client} avatar`, style: { width: '50px', borderRadius: '25px', position: 'absolute', bottom: '-25px', left: '10%' } }),
            react_1.default.createElement("div", { className: `client-info`, style: { marginLeft: '70px' } },
                react_1.default.createElement("h2", { className: `client-name ${nameClassName}` }, client.client),
                react_1.default.createElement("p", null,
                    "Trial: ",
                    client.trial ? 'Yes' : 'No'),
                react_1.default.createElement("p", null,
                    "Is Hidden: ",
                    client.is_hidden ? 'Yes' : 'No')))));
};
exports.ClientCardLG = ClientCardLG;
//# sourceMappingURL=ClientCardLG.js.map