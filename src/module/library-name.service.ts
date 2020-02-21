import { Injectable, Inject } from '@nestjs/common';
import { MODULE_CONFIG, LibraryNameConfig } from './config';

/**
 * Useful service
 */
@Injectable()
export class LibraryNameService {

  /**
   * Creates a new `LibraryNameService`
   * @param config Provided configuration
   */
  constructor(
    @Inject(MODULE_CONFIG) private config: LibraryNameConfig
  ) {}

  /**
   * Prints configuration
   */
  public printConfig(): void {
    console.warn(`Provided configuration:\n ${JSON.stringify(this.config)}`);
  }

}
