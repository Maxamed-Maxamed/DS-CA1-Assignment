#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { RestAPIStack } from "../lib/rest-api-stack";

const app = new cdk.App();
new RestAPIStack(app, "RestAPIStack", { env: { region: "eu-west-1" } });
new RestAPIStack(app, "RestAPIStack2", { env: { region: "eu-west-1" } });
