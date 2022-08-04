import * as R from "ramda";
import {
  saveAllInstances,
  saveInstance,
  deleteInstance
} from "../actions/modelActions";
import { store } from "../store/index";

/**
 * This is the Base Class for all the models which will be created for each resources.
 * Consist of the Utility methods which Saves/Updates/Deletes the data from the Store.
 * The Derived class need to pass a Generic Class <P> i.e. prop types for the Model being Created.
 * @export
 * @class BaseModel
 * @template P
 */
export class BaseModel<P> {
  static resource: string;
  resource: string;
  id: string;

  constructor(public props: P & { id: string; _id: string }) {
    this.props = props;
    this.id = props.id;
    this.resource = (this.constructor as typeof BaseModel).resource;
  }

  /**
   * Returns the key i.e. the concatination of the ID of current instance with the resource name.
   * @memberof BaseModel
   */
  getStoreKey = (id: string): string => `${this.resource}${id}`;
  /**
   * Returns the key i.e. the concatination of the ID of current instance with the resource name.
   * It is static so that the static method inside this class should have access to the same.
   * @static
   * @memberof BaseModel
   */
  static getStoreKey = (id: string, instance: any): string =>
    `${instance.resource}${id}`;

  /**
   * Saves an instance of the current class to the Store, the key is the resourceName+ID of the data.
   * Accepts both @props id and _id(Support for MONGO)
   * @returns {BaseModel<P>}
   * @memberof BaseModel
   */
  $save(): BaseModel<P> {
    saveInstance(
      this.resource,
      this.getStoreKey(this.props.id || this.props._id),
      this
    );
    return this;
  }

  /**
   * Saves an array of instances to the Store, the instance map is getting created over here and is being saved to the store.
   * @returns {BaseModel<P>[]}
   * @memberof BaseModel
   */
  $saveAll(): BaseModel<P>[] {
    let instanceObject: any = {};
    R.map(x => {
      return (instanceObject[this.getStoreKey(x.id || x._id)] = {
        props: x,
        resource: this.resource
      });
    }, this.props as any);
    saveAllInstances(this.resource, instanceObject);
    return [this];
  }

  /**
   * Returns the instance which matches the ID passed in the parameter of this function.
   * The return value contains props.
   * @static
   * @param {string} id
   * @param {*} [state=store.getState()]
   * @returns
   * @memberof BaseModel
   */
  static get(id: string, state = store.getState()) {
    return state.model.get(this.getStoreKey(id, this));
  }

  /**
   * Returns the list of all the instances of the current class.
   * It uses resource name to match the instance to the current instance and then returns the filtered value.
   * @static
   * @param {*} [state=store.getState()]
   * @returns
   * @memberof BaseModel
   */
  static list(state = store.getState()) {
    return R.values(
      state.model
        .filter((x: { resource: string; props: any }) =>
          x.resource === this.resource ? x.props : ""
        )
        .toJS()
    );
  }

  /**
   * Deletes an instances matching the ID passed in the parameter.
   * @static
   * @param {BaseModel<any>} instance
   * @returns
   * @memberof BaseModel
   */
  static delete(instance: BaseModel<any>) {
    deleteInstance(
      this.getStoreKey(instance.props.id || instance.props._id, instance)
    );
    return this;
  }
}
