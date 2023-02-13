"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Header = () => {
    let navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };
    let location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(Navbar_1.default, { expand: 'lg', bg: 'dark', variant: "dark", fixed: 'top' },
        react_1.default.createElement(Container_1.default, { fluid: true },
            react_1.default.createElement(Navbar_1.default.Brand, null,
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", fill: "currentColor", className: "bi bi-pencil-square", viewBox: "0 0 16 16" },
                    react_1.default.createElement("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
                    react_1.default.createElement("path", { "fill-rule": "evenodd", d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" })),
                "STG Note-Taker"),
            react_1.default.createElement(Navbar_1.default.Toggle, { "aria-controls": 'responsive-navbar-nav' }),
            react_1.default.createElement(Navbar_1.default.Collapse, { id: 'responsive-navbar-nav' },
                react_1.default.createElement(Nav_1.default, { className: 'me-auto my-2 my-lg-0', style: { maxHeight: '100px' }, navbarScroll: true },
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(react_router_dom_1.Link, { className: `nav-link ${location.pathname === '/' ? 'active' : ''}`, "aria-current": 'page', to: '/' }, "HOME")),
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(react_router_dom_1.Link, { className: `nav-link ${location.pathname === '/about' ? 'active' : ''}`, to: '/about' }, "ABOUT"))),
                react_1.default.createElement(Nav_1.default, null, !localStorage.getItem('authToken')
                    ?
                        react_1.default.createElement(Form_1.default, { className: 'd-flex', role: 'search' },
                            react_1.default.createElement(react_router_dom_1.Link, { className: 'btn btn-primary mx-1', to: '/login', role: 'button' }, "LOG IN"),
                            react_1.default.createElement(react_router_dom_1.Link, { className: 'btn btn-primary mx-1', to: '/signup', role: 'button' }, "SIGN UP"))
                    :
                        react_1.default.createElement(Button_1.default, { onClick: handleLogout, className: 'btn btn-primary mx-1' }, "LOG OUT"))))));
};
exports.default = Header;
