import { Path } from "@angular-devkit/core";

export interface NestAddOptions {
  name: string;
  module: Path;
  path: Path;
  metadata: any;
}
