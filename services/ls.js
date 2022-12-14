import { KEY, DEBUG } from "@/constants";
const { AES, enc } = require("crypto-js");
const { decrypt, encrypt } = AES;

export default {
  get(key,defaultValue = null) {
    if(!process.client) {
      return defaultValue;
    }
    let itemStr = window.localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
      return defaultValue;
    }
    try {
      if (!DEBUG) {
        itemStr = decrypt(itemStr, KEY).toString(enc.Utf8);
      }
      const item = JSON.parse(itemStr);
      const now = new Date();
      // compare the expiry time of the item with the current time
      if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        this.remove(key);
        return defaultValue;
      }
      return item.value;
    } catch (e) {
      this.remove(key);
      return defaultValue;
    }
  },

  set(key, val, ttl = 432000) {
    // ttl in seconds default 5 day
    const now = new Date();
    const item = {
      value: val,
      expiry: now.getTime() + ttl * 1000
    };
    let itemJson = JSON.stringify(item);
    if (!DEBUG) {
      itemJson = encrypt(itemJson, KEY);
    }
    window.localStorage.setItem(key, itemJson);
  },

  remove(key) {
    window.localStorage.removeItem(key);
  },

  storeObject(key, obj) {
    this.set(key, obj);
  },

  getObject(key) {
    return this.get(key) ? this.get(key) : {};
  }
};
