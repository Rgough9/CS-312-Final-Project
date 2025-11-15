import express from 'express';
import { getRecipes, getRecipeById } from '../Control/recipe_control.js';

const router = express.Router();

router.get('/', getRecipes);
router.get('/recipe/:id', getRecipeById);

export default router;

