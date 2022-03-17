import { createAction, props } from "@ngrx/store";

/*action*/
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

/**
 * action with argumet
 */
export const customIncrement = createAction('customIncrement', props<{count:number}>());