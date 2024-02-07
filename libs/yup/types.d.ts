import { StringSchema, StringSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    validRegion(message: string): StringSchema;
  }
}

export const string: StringSchemaConstructor;