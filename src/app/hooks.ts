import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import AppStore from 'app/AppStore';

function useStore(): AppStore {
  const stores = useContext(MobXProviderContext);

  return stores.store;
}

export default useStore;
