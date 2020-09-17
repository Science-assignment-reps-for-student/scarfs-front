import { createRequestThunk } from '../../../lib/thunk';
import { CREATE_TEAM } from '../../reducer/CreateTeam';
import { createTeam } from '../../../lib/api/CreateTeam';

export const createTeamThunk = createRequestThunk(CREATE_TEAM, createTeam);
