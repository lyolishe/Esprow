import { initialState, MainPageState } from '@pages/Main/store/store';
import { RootState } from '@app/store';
import { getUserById, getUsers } from '@pages/Main/selectors/index';
import { UserDTO } from '@shared/types';

describe('selectors', () => {
  const mockReducer = (mainPageStore: MainPageState): RootState => ({
    MainPage: mainPageStore,
  });

  it('should return empty array on initialState', () => {
    const store = mockReducer(initialState);
    expect(getUsers(store)).toEqual([]);
  });

  it('should return 2 users', () => {
    const store = mockReducer({ usersList: new Array(2).fill(1).map((_, i) => ({ id: i.toString() }) as UserDTO) });
    expect(getUsers(store)).toEqual([{ id: '0' }, { id: '1' }]);
  });

  it('should return user with appropriate id', () => {
    const store = mockReducer({ usersList: new Array(40).fill(1).map((_, i) => ({ id: i.toString() }) as UserDTO) });
    expect(getUserById('20')(store)).toEqual({ id: '20' });
  });
});
