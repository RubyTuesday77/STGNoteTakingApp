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
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const AddNote = (props) => {
    const context = (0, react_1.useContext)(NoteContext_1.default);
    const { addNote } = context;
    const [note, setNote] = (0, react_1.useState)({
        title: '',
        description: '',
        tag: '',
    });
    const onChange = (e) => {
        setNote(Object.assign(Object.assign({}, note), { [e.target.name]: e.target.value }));
    };
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: '', description: '', tag: '' });
        props.showAlert('Added new note successfully', 'success');
    };
    return (<Container_1.default className='my-3' style={{ width: '80%' }}>
            <h2>Add a Note</h2>
            <Form_1.default>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Title</Form_1.default.Label>
                    <Form_1.default.Control type='text' value={note.title} id='title' name='title' aria-describedby='emailHelp' minLength={2} required onChange={onChange}/>
                </Form_1.default.Group>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Content</Form_1.default.Label>
                    <Form_1.default.Control type='text' as='textarea' rows={3} id='description' name='description' value={note.description} onChange={onChange}/>
                </Form_1.default.Group>
                <Form_1.default.Group className='mb-3'>
                    <Form_1.default.Label>Tags/Keywords</Form_1.default.Label>
                    <Form_1.default.Control type='text' id='tag' name='tag' value={note.tag} onChange={onChange}/>
                </Form_1.default.Group>
                <Button_1.default type='submit' variant='primary' onClick={handleClick}>Save Note</Button_1.default>
            </Form_1.default>
        </Container_1.default>);
};
exports.default = AddNote;
