import { BaseModel } from "./BaseModel";
interface IProjectModelProps {
  name: string;
}

export class ProjectModel extends BaseModel<IProjectModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "user";
}
