
export const LocalStorageService = {

  /**
   * Sets an item into the local storage.
   * @param key The key to set.
   * @param value The value associated to the key.
   */
  set(key: string, value: string): void {
    if(key && typeof window !== 'undefined') window.localStorage.setItem(key, value);
  },

  /**
   * Gets an item associated to a key from the local storage.
   * @param key The key to set.
   */
  get(key: string): string | null {
    if(key && typeof window !== 'undefined') return window.localStorage.getItem(key);
    return null;
  },

  /**
   * Remove an item associated to a key from the local storage.
   * @param key The key to set.
   */
  remove(key: string): void {
    if(key && typeof window !== 'undefined') window.localStorage.removeItem(key);
  }
}