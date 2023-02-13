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
const NoteItem_1 = __importDefault(require("./NoteItem"));
const NoteContext_1 = __importDefault(require("../context/NoteContext"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Notes = (props) => {
    let navigate = (0, react_router_dom_1.useNavigate)();
    const context = (0, react_1.useContext)(NoteContext_1.default);
    const { notes, getNotes, editNote } = context;
    (0, react_1.useEffect)(() => {
        if (localStorage.getItem('authToken')) {
            getNotes();
        }
        else {
            navigate('/login');
        }
    }, []);
    const ref = (0, react_1.useRef)(null);
    const refClose = (0, react_1.useRef)(null);
    const [note, setNote] = (0, react_1.useState)({
        eid: '',
        etitle: '',
        edescription: '',
        etag: ''
    });
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            eid: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    };
    const onChange = (e) => {
        setNote(Object.assign(Object.assign({}, note), { [e.target.name]: e.target.value }));
    };
    const handleClick = (e) => {
        refClose.current.click();
        editNote(note.eid, note.etitle, note.edescription, note.etag);
        props.showAlert('Note updated successfully!', 'success');
    };
    return (<>
            <div>
                <Button_1.default type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </Button_1.default>
                <Container_1.default className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className='modal-dialog'>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <Button_1.default className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button_1.default>
                            </div>
                            <div className="modal-body">
                                <Form_1.default>
                                    <Form_1.default.Group className="mb-3">
                                        <Form_1.default.Label>Edit Title</Form_1.default.Label>
                                        <Form_1.default.Control type="text" minLength={3} required id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
                                    </Form_1.default.Group>
                                    <Form_1.default.Group className="mb-3">
                                        <Form_1.default.Label>Edit Content</Form_1.default.Label>
                                        <Form_1.default.Control type="text" id="edescription" name="edescription" value={note.edescription} onChange={onChange}/>
                                    </Form_1.default.Group>
                                    <Form_1.default.Group className="mb-3">
                                        <Form_1.default.Label>Edit Tags/Keywords</Form_1.default.Label>
                                        <Form_1.default.Control type="text" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                                    </Form_1.default.Group>
                                </Form_1.default>
                            </div>
                            <div className="modal-footer">
                                <Button_1.default ref={refClose} variant="secondary" data-bs-dismiss="modal">Close</Button_1.default>
                                <Button_1.default variant='primary' disabled={note.etitle.length < 3} onClick={handleClick}>Update Note</Button_1.default>
                            </div>
                        </div>
                    </div>
                </Container_1.default>
                <div className='row my-3'>
                        <h2>Your Notes</h2>
                        {notes.length === 0 && 'No Notes to display'}
                        {notes.map((note) => {
            return <NoteItem_1.default key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>;
        })}
                </div>
            </div>
        </>);
};
exports.default = Notes;
