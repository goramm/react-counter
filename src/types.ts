import { ICounterState } from './features/counter/slice';

export interface IAppState {
  count: ICounterState;
}
