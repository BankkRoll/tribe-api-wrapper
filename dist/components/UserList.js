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
exports.UserList = void 0;
// components/UserList.tsx
const react_1 = __importStar(require("react"));
const index_1 = require("../index");
/**
 * The UserList component.
 * Renders a grid of users with customizable styles.
 * @param {string} client - The client ID. Required.
 * @param {string} [containerClassName] - CSS class for the main container. Optional.
 * @param {string} [userClassName] - CSS class for individual user container. Optional.
 * @param {string} [textClassName] - CSS class for user text. Optional.
 * @param {React.CSSProperties} [style] - Inline styles for the main container. Optional.
 */
const UserList = ({ client, containerClassName, userClassName, textClassName, style, }) => {
    const [users, setUsers] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const fetchUsers = async () => {
            const result = await (0, index_1.getPublicClientUserList)(client);
            if (result && !('message' in result)) {
                setUsers(result.data); // Directly set the data as users
            }
            setLoading(false);
        };
        fetchUsers();
    }, [client]);
    return (react_1.default.createElement("div", { className: `user-list-container ${containerClassName}`, style: { display: 'flex', flexWrap: 'wrap', ...style } }, loading ? (react_1.default.createElement("p", null, "Loading...")) : (users.map((user, index) => (react_1.default.createElement("div", { key: index, className: `user-container ${userClassName}`, style: { width: '25%', padding: '10px' } },
        react_1.default.createElement("p", { className: `user-name ${textClassName}` }, user)))))));
};
exports.UserList = UserList;
//# sourceMappingURL=UserList.js.map