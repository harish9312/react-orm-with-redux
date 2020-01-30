import { BaseModel } from "./BaseModel";
interface IUserModelProps {
  name: string;
  id: string;
}

export class UserModel extends BaseModel<IUserModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "user";
}
