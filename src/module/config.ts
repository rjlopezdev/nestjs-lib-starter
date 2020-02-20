export const MODULE_CONFIG = Symbol('MODULE_CONFIG');

export interface LibraryNameConfig {
  value: string;
}

export const DEFAULT_MODULE_CONFIG: LibraryNameConfig = {
  value: '<DEFAULT>'
};
