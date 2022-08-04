import { dispacthAction } from "../generalUtils";
import {
  SAVE_INSTANCE,
  DELETE_INSTANCE,
  DELETE_ALL_INSTANCE,
  SAVE_ALL_INSTANCE
} from "../constants/actionTypes";
import { BaseModel } from "../models/BaseModel";

/**
 * Usage: To save the instance to the Store, called in the BaseModel.
 * @param {string} identifier
 * @param {string} id
 * @param {BaseModel<{}>} instance
 */
export const saveInstance = (
  identifier: string,
  id: string,
  instance: BaseModel<{}>
) =>
  dispacthAction({
    type: `${identifier}/${SAVE_INSTANCE}`,
    id,
    instance
  });

/**
 * Usage: Saves all the instances to the store, accepts the instance map and merges it into the Store state.
 * @param {string} identifier
 * @param {BaseModel<{}>[]} instances
 */
export const saveAllInstances = (
  identifier: string,
  instances: BaseModel<{}>[]
) =>
  dispacthAction({
    type: `${identifier}/${SAVE_ALL_INSTANCE}`,
    instances
  });

/**
 * Usage: Deletes an instance of the BaseModel from the Store.
 * @param {string} key
 */
export const deleteInstance = (key: string) =>
  dispacthAction({
    type: DELETE_INSTANCE,
    key
  });

/**
 * Usage: To delete all the instances from the store.
 * @param {string[]} keys
 */
export const deleteAllInstance = (keys: string[]) =>
  dispacthAction({
    type: DELETE_ALL_INSTANCE,
    keys
  });
