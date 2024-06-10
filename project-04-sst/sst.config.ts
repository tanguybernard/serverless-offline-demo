import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "project-04-sst",
      region: "eu-west-3",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
