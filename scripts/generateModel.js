var fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function copyData() {
  const modelName = process.argv[2];
  const props = process.argv[3];
  const resourceName = process.argv[4];
  if (!modelName || !props) {
    console.error(
      chalk.red(
        '😡 Please pass model name as first, props types as second argument eg. "{ name: string } and resource name as third argument." 😡'
      )
    );
    return;
  }

  if (modelName.includes("{") || modelName.includes("}")) {
    console.error(
      chalk.redBright("😰 First Argument must be the model name 😰")
    );
    return;
  }

  if (!props.includes("{") || !props.includes("}")) {
    console.error(
      chalk.redBright(
        `😰 Second Argument must be the prop types  eg. "{ name: string }"😰`
      )
    );
    return;
  }

  if (!resourceName) {
    console.error(
      chalk.redBright(
        `😰 Third Argument must be the resource name for the model😰`
      )
    );
    return;
  }

  const filePath = path.resolve(`src/models/${modelName}.ts`);
  const data = `
  import { BaseModel } from './BaseModel';
  interface I${modelName}Props ${props}

export class ${modelName} extends BaseModel<I${modelName}Props>{
    constructor(props: any) {
        super(props)
        this.props = props;
    }
    static resource = ${resourceName}
}`;

  fs.writeFile(filePath, data, function(err) {
    if (err) throw err;
    console.log(
      chalk.greenBright(
        `😈😈 ${modelName} has been generated succcess fully with the Resource Name: ${chalk.yellowBright(
          resourceName
        )}...!!! 😈😈`
      )
    );
    console.log("");
    console.log(chalk.magentaBright(`Created with ❤️  from Harish Soni`));
  });
}

copyData();
