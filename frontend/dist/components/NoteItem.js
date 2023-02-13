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
const react_1 = __importStar(require("react"));
const NoteContext_1 = __importDefault(require("../context/NoteContext"));
const Accordion_1 = __importDefault(require("react-bootstrap/Accordion"));
const NoteItem = (props) => {
    const context = (0, react_1.useContext)(NoteContext_1.default);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (<Accordion_1.default defaultActiveKey="1">
            <Accordion_1.default.Item eventKey="1">
                <Accordion_1.default.Header style={{ "font-weight": "bold" }}>{note.title}</Accordion_1.default.Header>
                <Accordion_1.default.Body>
                    <p>{note.description}</p>
                    {/* Clicking on the trashcan icon will call the delete function and pass the note id
        of that particular note. We are getting the note id as each and every element(object)
        represents a card which has its id,t,d,tag*/}
                    <i className="fas fa-trash mx-2" onClick={() => {
            deleteNote(note._id);
            props.showAlert("Deleted succesfully", "success");
        }}></i>
                    <i className="fas fa-edit mx-2" onClick={() => {
            updateNote(note);
        }}></i>
                </Accordion_1.default.Body>
            </Accordion_1.default.Item>
        </Accordion_1.default>);
};
exports.default = NoteItem;
