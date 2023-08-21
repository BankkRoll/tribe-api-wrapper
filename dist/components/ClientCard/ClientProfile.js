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
/**
 * The ClientProfile component renders a detailed profile view of a client, including a banner, avatar, client name, and user list.
 * @param {string} clientId - The client ID to fetch client data and user list. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [bannerClassName] - CSS class for the banner. Optional.
 * @param {string} [avatarClassName] - CSS class for the avatar. Optional.
 * @param {string} [nameClassName] - CSS class for the client name. Optional.
 * @param {string} [userListClassName] - CSS class for the user list container. Optional.
 * @param {string} [userClassName] - CSS class for individual user container. Optional.
 * @returns A React component that renders a detailed client profile including a user list.
 */
const ClientProfile = ({ clientId, containerClassName = 'custom-container-className', bannerClassName = 'custom-banner-className', avatarClassName = 'custom-avatar-className', nameClassName = 'custom-name-className', userListClassName = 'custom-user-list-className', userClassName = 'custom-user-className', }) => {
    const [client, setClient] = (0, react_1.useState)(null);
    const [users, setUsers] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    /**
     * Fetches client data and user list from API
     */
    (0, react_1.useEffect)(() => {
        (0, index_1.getClientList)().then((response) => {
            if ('data' in response) {
                const foundClient = response.data.find((c) => c.client === clientId);
                setClient(foundClient || null);
            }
        });
        const fetchUsers = async () => {
            const result = await (0, index_1.getPublicClientUserList)(clientId);
            if (result && !('message' in result)) {
                setUsers(result.data);
            }
            setLoading(false);
        };
        fetchUsers();
    }, [clientId]);
    if (!client)
        return react_1.default.createElement("div", null, "Loading...");
    return (react_1.default.createElement("div", { className: `client-profile-container ${containerClassName}`, style: { maxWidth: '800px', margin: '0 auto' } },
        react_1.default.createElement("div", { className: `client-banner ${bannerClassName}`, style: { height: '300px', backgroundImage: `url(${client.background})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', borderRadius: '10px 10px 0 0' } },
            react_1.default.createElement("img", { src: client.avatar, className: `client-avatar ${avatarClassName}`, alt: `${client.client} avatar`, style: { width: '150px', borderRadius: '75px', position: 'absolute', bottom: '-75px', left: '10%', zIndex: 2, border: '5px solid white' } })),
        react_1.default.createElement("div", { className: `client-name-container ${nameClassName}`, style: { padding: '50px 20px 20px', borderRadius: '0 0 10px 10px' } },
            react_1.default.createElement("h2", { className: `client-name ${nameClassName}`, style: { textAlign: 'center', color: '#000' } }, client.client),
            react_1.default.createElement("div", { className: `user-list-container ${userListClassName}`, style: {
                    margin: '0 auto',
                    borderRadius: '10px',
                    overflowY: 'auto',
                    height: '300px',
                } }, loading ? (react_1.default.createElement("p", { style: { color: '#666', fontStyle: 'italic', fontSize: '14px', textAlign: 'center' } }, "Loading...")) : (users.map((user, index) => (react_1.default.createElement("div", { key: index, className: `user-container ${userClassName}`, style: {
                    padding: '10px',
                    background: '#f7f7f7',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                react_1.default.createElement("p", { className: "user-name", style: { margin: '0', fontSize: '16px', color: '#000', fontWeight: '500' } }, user)))))))));
};
exports.ClientProfile = ClientProfile;
//# sourceMappingURL=ClientProfile.js.map