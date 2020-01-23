import * as R from "ramda";
import { saveAllInstances, saveInstance } from "../actions/modelActions";
import { store } from "../store/index";

export class BaseModel<P> {
  static resource: string;
  resource: string;
  id: string;

  constructor(public props: P & { id: string }) {
    this.props = props;
    this.id = props.id;
    this.resource = (this.constructor as typeof BaseModel).resource;
  }

  getStoreKey = (id: string): string => `${this.resource}${id}`;

  static getStoreKey = (id: string, instance: any): string =>
    `${instance.resource}${id}`;

  $save(): BaseModel<P> {
    saveInstance(this.resource, this.getStoreKey(this.props.id), this);
    return this;
  }

  $saveAll(): BaseModel<P>[] {
    let instanceObject: any = {};
    R.map(x => {
      return (instanceObject[this.getStoreKey(x.id)] = {
        props: x,
        resource: this.resource
      });
    }, this.props as any);
    saveAllInstances(this.resource, instanceObject);
    return [this];
  }

  static get(id: string, state = store.getState()) {
    return state.model.get(this.getStoreKey(id, this));
  }

  static list(state = store.getState()) {
    return R.values(
      state.model
        .filter((x: { resource: string; props: any }) =>
          x.resource === this.resource ? x.props : ""
        )
        .map((ins: { props: any }) => ins.props)
        .toJS()
    );
  }

  static $delete(instance: BaseModel<any>) {
    // deleteInstance(this.getStoreKey(instance))
    return this;
  }
}
