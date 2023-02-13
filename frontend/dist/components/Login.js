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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Login = (props) => {
    // Declare server host
    const host = 'http://localhost:5001';
    const [credentials, setCredentials] = (0, react_1.useState)({ email: '', password: '' });
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const response = yield fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = yield response.json();
        // console.log(json);
        if (json.success) {
            localStorage.setItem('authToken', json.authToken);
            navigate('/');
            props.showAlert('Logged in successfully!', 'success');
        }
        else {
            props.showAlert('Invalid credentials!', 'danger');
        }
    });
    const onChange = (e) => {
        setCredentials(Object.assign(Object.assign({}, credentials), { [e.target.name]: e.target.value }));
    };
    return (<Container_1.default className='mt-3' style={{ width: '70%' }}>
        <Form_1.default onSubmit={handleSubmit}>
            <h2>Log In to Continue</h2>
            <Form_1.default.Group className='mb-3'>
                <Form_1.default.Label>Email address</Form_1.default.Label>
                <Form_1.default.Control type='email' value={credentials.email} id='email' name='email' onChange={onChange} autoComplete='off' aria-describedby='emailHelp'/>
                <Form_1.default.Text id='emailHelp' className='tex-muted'>We'll never share your email address with anyone</Form_1.default.Text>
            </Form_1.default.Group>
            <Form_1.default.Group className='mb-3'>
                <Form_1.default.Label>Password</Form_1.default.Label>
                <Form_1.default.Control type='password' value={credentials.password} id='password' name='password' onChange={onChange} autoComplete='off'/>
            </Form_1.default.Group>
            <Button_1.default type='submit' variant='primary'>Submit</Button_1.default>
        </Form_1.default>
    </Container_1.default>);
};
exports.default = Login;
