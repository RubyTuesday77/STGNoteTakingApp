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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const About_1 = __importDefault(require("./components/About"));
const Home_1 = __importDefault(require("./components/Home"));
const NoteState_1 = __importDefault(require("./context/NoteState"));
const Alert_1 = __importDefault(require("./components/Alert"));
const Login_1 = __importDefault(require("./components/Login"));
const Signup_1 = __importDefault(require("./components/Signup"));
require("bootstrap/dist/css/bootstrap.min.css");
function App() {
    // Set initial state for alert as null
    const [alert, setAlert] = (0, react_1.useState)(null);
    // Function to show alert which takes 2 args, msg & type
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    };
    return (<>
            {/* Use NoteState so any child will use context */}
            <NoteState_1.default>
                <react_router_dom_1.BrowserRouter>
                    <Navbar_1.default />
                <Alert_1.default alert={alert}/>
                <div className='container'>
                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route exact path='/' element={<Home_1.default showAlert={showAlert}/>}/>
                        <react_router_dom_1.Route exact path='/about' element={<About_1.default />}/>
                        <react_router_dom_1.Route exact path='/login' element={<Login_1.default showAlert={showAlert}/>}/>
                        <react_router_dom_1.Route exact path='/signup' element={<Signup_1.default showAlert={showAlert}/>}/>
                    </react_router_dom_1.Routes>
                </div>
                </react_router_dom_1.BrowserRouter>
            </NoteState_1.default>
        </>);
}
;
exports.default = App;
