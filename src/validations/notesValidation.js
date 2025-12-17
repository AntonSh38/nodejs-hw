import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags.js';
import { isValidObjectId } from 'mongoose';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(30).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'string.max': 'Title should have at most {#limit} characters',
      'any.required': 'Title is required',
    }),
    content: Joi.string().min(1).max(65).required().messages({
      'string.base': 'Content must be a string',
      'string.min': 'Content must be at least {#limit}',
      'string.max': 'Content must be at most {#limit}',
      'any.required': 'Content is required',
    }),

    tag: Joi.string()
      .valid(...TAGS)
      .required()
      .messages({
        'any.only':
          'Tag must be one of: work, personal, meeting, shopping, ideas, travel, finance,health, tmportant, todo',
        'any.required': 'Tag is required',
      }),
  }),
};

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(30),
    content: Joi.number().integer().min(1).max(65),
    tag: Joi.string().valid(...TAGS),
  }).min(1),
};
