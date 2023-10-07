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
 * Renders a client list for the given data and provides options for customization.
 * @param {string} [className] - CSS class for the main container. Optional.
 * @param {string} [clientClassName] - CSS class for individual client container. Optional.
 * @param {string} [avatarClassName] - CSS class for client avatar. Optional.
 * @param {string} [backgroundClassName] - CSS class for client background. Optional.
 * @param {string} [textClassName] - CSS class for text elements. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
const ClientList = ({ clients: clientsProp, className, clientClassName, avatarClassName, backgroundClassName, textClassName, style, }) => {
    const [clientsState, setClients] = (0, react_1.useState)(clientsProp || []);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    /**
     * Fetches client list from API
     */
    (0, react_1.useEffect)(() => {
        if (!clientsProp) {
            (0, index_1.getClientList)()
                .then((response) => {
                if ("data" in response) {
                    setClients(response.data);
                    setIsLoading(false);
                }
            })
                .catch((error) => {
                console.error("Error fetching client list:", error);
                setIsLoading(false);
            });
        }
        else {
            setIsLoading(false);
        }
    }, [clientsProp]);
    const clients = clientsProp || clientsState;
    if (isLoading) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    return (react_1.default.createElement("div", { style: { position: "relative" } },
        react_1.default.createElement("div", { className: className, style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
                ...style,
            } }, clients.map((client) => (react_1.default.createElement("div", { className: clientClassName, key: client.client, style: {
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            } },
            react_1.default.createElement("div", { className: backgroundClassName, style: {
                    height: "100px",
                    width: "100%",
                    backgroundImage: `url(${client.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                } },
                react_1.default.createElement("img", { src: client.avatar, className: avatarClassName, alt: `${client.client} avatar`, style: {
                        width: "50px",
                        borderRadius: "25px",
                        position: "absolute",
                        bottom: "-25px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 2,
                    } })),
            react_1.default.createElement("div", { style: { padding: "10px" } },
                react_1.default.createElement("p", { className: textClassName, style: { fontWeight: "bold", marginBottom: "5px" } },
                    "Client: ",
                    client.client),
                react_1.default.createElement("p", { className: textClassName, style: { fontSize: "12px", color: "#666" } },
                    "Trial: ",
                    client.trial ? "Yes" : "No"),
                react_1.default.createElement("p", { className: textClassName, style: { fontSize: "12px", color: "#666" } },
                    "Is Hidden: ",
                    client.is_hidden ? "Yes" : "No")))))),
        react_1.default.createElement("div", { style: {
                textAlign: "center",
                marginTop: "10px",
                fontSize: "12px",
                color: "#777",
            } },
            react_1.default.createElement("a", { href: "https://mytriberewards.com/", target: "_blank", rel: "noopener noreferrer", style: {
                    textDecoration: "none",
                    color: "#000",
                    display: "inline-flex",
                    alignItems: "center",
                } },
                "Powered by Tribe",
                " ",
                react_1.default.createElement("img", { src: "https://mytriberewards.com/wp-content/uploads/2022/12/TRIBENFTCO-Logo-Black-100x100.png", alt: "Tribe Logo", style: {
                        width: "20px",
                        height: "20px",
                        verticalAlign: "middle",
                        marginLeft: "5px",
                    } })))));
};
exports.ClientList = ClientList;
//# sourceMappingURL=ClientList.js.map