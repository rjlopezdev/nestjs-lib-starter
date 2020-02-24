import { Path } from '@angular-devkit/core';

export interface NestAddOptions {
  name: string;
  module: Path;
  path: Path;
  sourceRoot?: string;
  language: string;
  metadata: string;
  staticOptions: {
    name: string;
    value: Record<string, any>;
  }
}
