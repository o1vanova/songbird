import { computed, observable } from 'mobx';

class AppStore {
  @observable
  private loaded: boolean;

  @computed
  public get initialized() {
    return this.loaded;
  }

  @computed
  public get total() {
    return 0;
  }

  constructor() {
    this.loaded = false;
  }

  public initialize(): void {
    this.loaded = true;
  }
}

export default AppStore;
