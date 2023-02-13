"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Alert = (props) => {
    const capitalize = (word) => {
        if (word === 'danger') {
            word = 'error';
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    return (<div style={{ height: '50px' }}>
            {props.alert
            &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
                        <strong>{capitalize(props.alert.type)}</strong>
                : 
                    {props.alert.msg}
                </div>}
        </div>);
};
exports.default = Alert;
