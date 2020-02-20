import { Module, DynamicModule } from '@nestjs/common';
import { LibraryNameConfig, MODULE_CONFIG, DEFAULT_MODULE_CONFIG } from './config';
import { LibraryNameService } from './library-name.service';

@Module({})
export class LibraryNameModule {

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
