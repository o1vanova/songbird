import { computed, observable } from 'mobx';

class AppStore {
  @observable
  public loaded: boolean;

  @computed
  public get initialized() {
    return this.loaded;
  }

  constructor() {
    this.loaded = false;
  }

  public initialize(): void {
    this.loaded = true;
  }
}

export default AppStore;
