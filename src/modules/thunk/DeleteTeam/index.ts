import { createRequestThunk } from '../../../lib/thunk';
import { DELETE_TEAM } from '../../reducer/DeleteTeam';
import { deleteTeam } from '../../../lib/api/DeleteTeam';

export const deleteTeamThunk = createRequestThunk(DELETE_TEAM, deleteTeam);
