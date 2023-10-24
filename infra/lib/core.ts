import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { aws_ssm } from "aws-cdk-lib";

export class Core extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new aws_ssm.StringParameter(this, "test-param", {
      stringValue: "test",
      parameterName: "test-param",
      simpleName: true,
    });
  }
}
