import { dispacthAction } from '../generalUtils';
import { SAVE_INSTANCE, DELETE_INSTANCE, DELETE_ALL_INSTANCE, SAVE_ALL_INSTANCE } from '../constants/actionTypes';
import { BaseModel } from '../models/BaseModel';

export const saveInstance = (identifier: string, id: string, instance: BaseModel<{}>) => dispacthAction({
    type: `${identifier}/${SAVE_INSTANCE}`,
    id,
    instance
})

export const saveAllInstances = (identifier: string, instances: BaseModel<{}>[]) => dispacthAction({
    type: `${identifier}/${SAVE_ALL_INSTANCE}`,
    instances
})

export const deleteInstance = (key: string) => dispacthAction({
    type: DELETE_INSTANCE,
    key
})

export const deleteAllInstance = (keys: string[]) => dispacthAction({
    type: DELETE_ALL_INSTANCE,
    keys
})
