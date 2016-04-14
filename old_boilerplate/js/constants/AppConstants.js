/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */
export const CHANGE_PROJECT_NAME = 'CHANGE_PROJECT_NAME';
export const CHANGE_OWNER_NAME = 'CHANGE_OWNER_NAME';

export const OAUTH_REQUEST = "https://www.amazon.com/ap/oa"
  + "?client_id=amzn1.application-oa2-client.6cb3fbe8ae624b05ab9458f698945ef7"
  + "&scope=profile"
  + "&response_type=token"
  + "&redirect_uri=http://localhost:3000/auth";
