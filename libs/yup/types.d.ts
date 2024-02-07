import { StringSchema, StringSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    validRegion(): StringSchema;
  }
}

export const string: StringSchemaConstructor;