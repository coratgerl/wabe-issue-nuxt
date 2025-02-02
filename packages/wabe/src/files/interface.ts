/**
 * The file config contains the adapter to use to upload file
 * @param adapter: FileAdapter
 * @param urlCacheInSeconds: number Number of seconds to cache the url, equal to the number of seconds the url will be valid
 */
export interface FileConfig {
  adapter: FileAdapter
  urlCacheInSeconds?: number
}

export interface ReadFileOptions {
  urlExpiresIn?: number
}

export interface FileAdapter {
  /**
   * Upload a file and returns the url of the file
   * @param file: File
   */
  uploadFile(file: File | Blob): Promise<void>
  /**
   * Read a file and returns the url of the file
   * @param fileName: string
   * @param urlExpiresIn: number Number of seconds to expire the url
   * @returns The url of file or null if the file doesn't exist
   */
  readFile(
    fileName: string,
    options?: ReadFileOptions,
  ): Promise<string | null> | string | null
  /*+
   * Delete a file
   * @param fileName: string
   */
  deleteFile(fileName: string): Promise<void>
}
