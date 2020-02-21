/**
 * Injector Token for Module configuration
 */
export const MODULE_CONFIG = Symbol('MODULE_CONFIG');

/**
 * Defines the available options to configure the Module
 */
export interface LibraryNameConfig {
  /**
   * An awesome & powerful value
   */
  value: string;
}

/**
 * Default Module configuration if is not provided
 */
export const DEFAULT_MODULE_CONFIG: LibraryNameConfig = {
  value: '<DEFAULT>'
};
