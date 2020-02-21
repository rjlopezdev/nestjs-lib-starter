import { Module, DynamicModule } from '@nestjs/common';
import { LibraryNameConfig, MODULE_CONFIG, DEFAULT_MODULE_CONFIG } from './config';
import { LibraryNameService } from './library-name.service';

/**
 * LibraryName description
 */
@Module({})
export class LibraryNameModule {

  /**
   * Register the module
   * @param config configuration for module
   */
  static register(config: LibraryNameConfig): DynamicModule {
    return {
      module: LibraryNameModule,
      providers: [
        {
          provide: MODULE_CONFIG,
          useValue: config || DEFAULT_MODULE_CONFIG
        },
        LibraryNameService
      ],
      exports: [
        LibraryNameService
      ]
    }
  }

}
