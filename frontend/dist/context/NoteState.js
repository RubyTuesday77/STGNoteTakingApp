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
const NoteContext_1 = __importDefault(require("./NoteContext")); // Import our context
const react_1 = __importStar(require("react"));
const NoteState = (props) => {
    // Declare the server host
    const host = 'http://localhost:5001';
    // Declare an object array
    const notesInitial = [];
    // Inititalized notes as object
    const [notes, setNotes] = (0, react_1.useState)(notesInitial);
    // API call to fetch all notes using GET:
    const getNotes = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),
            },
        });
        const json = yield response.json();
        // Update notes object and passs as array to Notes.js via context API
        setNotes(json);
    });
    // API call to add a note using POST
    /* addNote function will take title, desc & tag in request body
    user.id will be inserted by backend through authToken
    note.id will be generated automatically by mongo */
    const addNote = (title, description, tag) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = yield response.json();
        // Use concat (not push) as it appends new item to array
        setNotes(notes.concat(note));
    });
    // API call to delete a note using DELETE
    const deleteNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),
            },
        });
        const json = yield response.json();
        // console.log(json);
        /* API call removes note from DB and UI. We then pass a filter function to all the existing notes and filter
        out the note id that does not match the deleted note. */
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    });
    // Edit a note:
    const editNote = (id, title, description, tag) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // const json = await response.json()
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    });
    return (<NoteContext_1.default.Provider value={{
            notes,
            setNotes,
            addNote,
            deleteNote,
            editNote,
            getNotes,
        }}>
      {props.children}
    </NoteContext_1.default.Provider>);
};
exports.default = NoteState;
