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
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Signup = (props) => {
    // Declare server host
    const host = 'http://localhost:5001';
    // Set state of input text of form
    const [credentials, setCredentials] = (0, react_1.useState)({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    });
    // Confirm password
    const [confirmPwd, setConfirmPwd] = (0, react_1.useState)('');
    // Set variable to redirect pages
    const navigate = (0, react_router_dom_1.useNavigate)();
    // POST request to update values of credentials
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (credentials.password !== credentials.cpassword) {
            setConfirmPwd('Password does not match');
        }
        else {
            const { name, email, password } = credentials;
            const response = yield fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const json = yield response.json();
            if (json.success) {
                localStorage.setItem('authToken', json.authToken);
                navigate('/');
                props.showAlert('Account created successfully!', 'success');
            }
            else {
                props.showAlert('Invalid details', 'danger');
            }
        }
    });
    // To update state of text as user types
    const onChange = (e) => {
        setCredentials(Object.assign(Object.assign({}, credentials), { [e.target.name]: e.target.value }));
    };
    return (<Container_1.default className='mt-3' style={{ width: '70%' }}>
            <h2>Sign Up Here</h2>
            <Form_1.default onSubmit={handleSubmit}>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Name</Form_1.default.Label>
                    <Form_1.default.Control type='text' id='name' name='name' onChange={onChange} aria-describedby='emailHelp' minLength={3} required/>
                </Form_1.default.Group>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Email address</Form_1.default.Label>
                    <Form_1.default.Control type='email' id='email' name='email' onChange={onChange} aria-describedby='emailHelp' required/>
                    <Form_1.default.Text id='emailHelp' className='text-muted'>We'll never share your email address with anyone</Form_1.default.Text>
                </Form_1.default.Group>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Password</Form_1.default.Label>
                    <Form_1.default.Control type='password' id='password' name='password' onChange={onChange} minLength={8} autoComplete='off' required/>
                    <Form_1.default.Text id='emailHelp' className='text-muted'>Password must be at least 8 characters</Form_1.default.Text>
                </Form_1.default.Group>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Confirm Password</Form_1.default.Label>
                    <Form_1.default.Control type='password' id='cpassword' name='cpassword' onChange={onChange} minLength={8} autoComplete='off' required/>
                    <Form_1.default.Text id='confirmPwd' name='confirmPwd' style={{ color: 'red' }}>{confirmPwd}</Form_1.default.Text>
                </Form_1.default.Group>
                <Button_1.default type='submit' variant='primary' disabled={credentials.password.length < 8 || credentials.cpassword.length < 8}>Submit</Button_1.default>
            </Form_1.default>
        </Container_1.default>);
};
exports.default = Signup;
