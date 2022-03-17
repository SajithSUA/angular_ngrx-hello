import { createAction } from "@ngrx/store";

/*action*/
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');