import { Injectable, Inject } from '@nestjs/common';
import { MODULE_CONFIG, LibraryNameConfig } from './config';

@Injectable()
export class LibraryNameService {

  constructor(
    @Inject(MODULE_CONFIG) private config: LibraryNameConfig
  ) {}

  public printConfig(): void {
    console.warn(`Provided configuration:\n ${this.config}`);
  }

}
