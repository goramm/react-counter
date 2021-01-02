import { IAppState } from '../../types';

export const getCountValue = (state: IAppState) => state.count.value;
