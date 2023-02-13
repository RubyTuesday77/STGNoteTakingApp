"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AddNote_1 = __importDefault(require("./AddNote"));
const Notes_1 = __importDefault(require("./Notes"));
const Home = (props) => {
    const { showAlert } = props;
    return (<div>
            <div className='container' style={{ 'width': '80%' }}>
                <Notes_1.default showAlert={showAlert}/>
            </div>
            <AddNote_1.default showAlert={showAlert}/>
        </div>);
};
exports.default = Home;
