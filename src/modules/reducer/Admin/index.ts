import { combineReducers } from 'redux';
import admin, { AdminState } from './admin';

export interface StoreState {
  admin: AdminState;
}

export default combineReducers<StoreState>({ admin });
