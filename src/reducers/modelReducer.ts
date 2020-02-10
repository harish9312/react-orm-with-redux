import { OrderedMap } from "immutable";
import {
  DELETE_ALL_INSTANCE,
  DELETE_INSTANCE,
  SAVE_ALL_INSTANCE,
  SAVE_INSTANCE,
  UPDATE_INSTANCE
} from "../constants/actionTypes";
import { IActionType } from "../interfaces";

/**
 * Usage: This the logic container to save the BaseModel instance to the store.
 * @param {*} [state=OrderedMap({})]
 * @param {IActionType} action
 * @returns
 */
export const modelReducer = (state = OrderedMap({}), action: IActionType) => {
  const { type, instances, instance, id } = action;
  const modelId = id as string;
  switch (type.split("/")[1]) {
    case SAVE_INSTANCE:
      return state.set(modelId, instance);
    case SAVE_ALL_INSTANCE:
      return state.merge(instances);
    case UPDATE_INSTANCE:
      return state.set(modelId, instance);
    case DELETE_INSTANCE:
      return state.delete(modelId);
    case DELETE_ALL_INSTANCE:
      return state.deleteAll(modelId);
    default:
      return state;
  }
};
