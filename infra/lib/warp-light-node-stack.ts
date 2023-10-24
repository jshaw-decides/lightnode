import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { aws_ecs_patterns, aws_ecs, aws_ecr_assets } from "aws-cdk-lib";
import { aws_ssm } from "aws-cdk-lib";

export class WarpLightNodeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const param = aws_ssm.StringParameter.fromStringParameterName(
      this,
      "blah",
      "test-param"
    );
    const dockerAsset = new aws_ecr_assets.DockerImageAsset(
      this,
      "lightnode-image",
      {
        directory: "../server",
        assetName: "lightnode-v0.0.1",
      }
    );

    new aws_ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "lightnode-service",
      {
        taskImageOptions: {
          image: aws_ecs.ContainerImage.fromDockerImageAsset(dockerAsset),
          containerPort: 3333,
          environment: {
            TEST_PARAM: param.stringValue,
          },
        },
        memoryLimitMiB: 8192,
        cpu: 2048,
      }
    );
  }
}
