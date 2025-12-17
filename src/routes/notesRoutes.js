import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  noteIdParamSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/', getAllNotes);

router.get('/:noteId', celebrate(noteIdParamSchema), getNoteById);

router.post('/', celebrate(createNoteSchema), createNote);

router.delete('/:noteId', celebrate(noteIdParamSchema), deleteNote);

router.patch('/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
