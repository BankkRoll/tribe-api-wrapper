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
exports.ClientList = void 0;
// components/ClientList.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("../index");
/**
 * The ClientList component.
 * Renders a list of clients with all provided properties.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [clientClassName] - CSS class for individual client container. Optional.
 * @param {string} [avatarClassName] - CSS class for client avatar. Optional.
 * @param {string} [backgroundClassName] - CSS class for client background. Optional.
 * @param {string} [textClassName] - CSS class for text elements. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
const ClientList = ({ className = '', clientClassName = '', avatarClassName = '', backgroundClassName = '', textClassName = '', style, }) => {
    const [clients, setClients] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    /**
     * Fetches client list from API
     */
    (0, react_1.useEffect)(() => {
        (0, index_1.getClientList)()
            .then((response) => {
            if ('data' in response) {
                setClients(response.data);
                setIsLoading(false);
            }
        })
            .catch((error) => {
            console.error('Error fetching client list:', error);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    return (react_1.default.createElement("div", { className: className, style: style }, clients.map((client) => (react_1.default.createElement("div", { className: clientClassName, key: client.client },
        react_1.default.createElement("p", { className: textClassName },
            "Client: ",
            client.client),
        react_1.default.createElement("img", { src: client.avatar, className: avatarClassName, alt: `${client.client} avatar` }),
        react_1.default.createElement("img", { src: client.background, className: backgroundClassName, alt: `${client.client} background` }),
        react_1.default.createElement("p", { className: textClassName },
            "Trial: ",
            client.trial ? 'Yes' : 'No'),
        react_1.default.createElement("p", { className: textClassName },
            "Is Hidden: ",
            client.is_hidden ? 'Yes' : 'No'))))));
};
exports.ClientList = ClientList;
//# sourceMappingURL=ClientList.js.map