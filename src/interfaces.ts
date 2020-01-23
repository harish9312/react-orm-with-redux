export interface IActionType {
    instance?: any;
    instances?: any;
    type: string;
    id?: string;
}

export interface IImmutableObject {
    get: (path: string, defaultValue?: any) => any;
    getIn: (path: string[]) => any;
    set: (path: string, value: any) => void;
    setIn: (path: string[], value: any) => void;
    toJS: () => any;
    toJSON: () => any;
    toArray: () => any[];
    last: () => any;
    filter: (cb: Function) => any;
    map: (cb: Function) => any;
    findLast: (cb: Function) => any;
}


export interface IReduxStore {
    model: IImmutableObject;
}