import { BaseModel } from "./BaseModel";
interface IOrganizationModelProps {
  _id: string;
  date_added: number;
  totalEmployee: number;
  month_added: number;
}

export class OrganizationModel extends BaseModel<IOrganizationModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "organization";
}
