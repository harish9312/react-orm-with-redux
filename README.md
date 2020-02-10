# React ORM with Redux;

- The latest `Model` boilerplate release v1.0.

### Features:

1. Added support for TypeScript v3.7.3;
2. Working Model Structure with Example of UserModel.
3. Immutable.js updated to `4.0.0-rc.12`
4. Added `Model Auto Generate Support`.
5. Redux DevTools enabled.

## Usage:

1. Using the `generate-model` command.

Base Command: `npm run generate-model`

To generate a model using this command you must pass three arguments in this sequence:

1. The `ModelName` eg. **MyModel**
2. The PropTypes for the Model. eg: **"{name : string}"**
3. The Resource Name for the Model: **project**

RUN::: `npm run generate-model ProjectModel "{name : string}" project`

It will generate the following file `src/models/ProjectModel.ts` with the following content.

```javascript
import { BaseModel } from "./BaseModel";
interface IProjectModelProps {
  name: string;
}

export class ProjectModel extends BaseModel<IProjectModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "project";
}
```

Once the file is generated output should be:
[![](https://im7.ezgif.com/tmp/ezgif-7-544c6d11bbfc.gif)](https://im7.ezgif.com/tmp/ezgif-7-544c6d11bbfc.gif)

#### BaseModel has the following functions for now:

1. `$save()` => Saves an instance of the current class to the Store, the key is the resourceName+ID of the data.

**Usage:** `new UserModel(props).$save()`

2. `$saveAll()` => Saves an array of instances to the Store, the instance map is getting created over here and is being saved to the store

**Usage:** `new UserModel(props).$saveAll()` -> props shuold be an array.

3.  `static get(id)` => Returns the instance which matches the ID passed in the parameter of this function.

**Usage:** `UserModel.get(id)` -> id to get the value of.

4. `static list()` => Returns the list of all the instances of the current class

**Usage:** `UserModel.list()` -> Return all the values for UserModel Class.

5. `static delete(instance)`: Deletes an instances matching the ID passed in the parameter.

**Usage:** `UserModel.delete(userModelInstance)`

## Extending the functionality of BaseModel:

_When there is the special need of extendint the functionality which applies the business logic on the props, you can add the business logic to the curresponding model class and it can be used with the same._

Packages Added:

1. `axios`: v0.19.1
2. `@types/react-redux`: v7.1.5
3. `@types/react`: v^16.9.0
4. `@types/react-router`: v^5.1.4
5. `@types/redux`: v^3.6.0
6. `react`: v^16.12.0,
7. `react-redux`: v^7.1.3,
8. `react-router`: v^5.1.2,
9. `react-router-dom`: v^5.1.2,
10. `redux`: v^4.0.5,

# TODO(s):

1. Add Support to generate view based on the Model Structure.
2. Add Support to generate Model using the JSON with prop types.
3. Update the Types on the BaseModel for strict usage.
4. Add support for checking the dependencies before start,
