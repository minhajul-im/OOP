interface ICache {
  set(key: string, value: string): void;
  get(key: string): string | null;
}

class Redis implements ICache {
  set(key: string, value: string): void {
    console.log(`Redis set: {${key}: ${value}}`);
  }
  get(key: string): string | null {
    return `Value for ${key}`;
  }
}

interface IMimeCache {
  setterCache(key: string, value: string): void;
  getterCache(key: string): string | null;
}

class MimeCache implements IMimeCache {
  private store: Map<string, string> = new Map();

  setterCache(key: string, value: string): void {
    this.store.set(key, value);
    console.log(`MimeCache set: {${key}: ${value}}`);
  }
  getterCache(key: string): string | null {
    return this.store.get(key) || null;
  }
}

class CacheAdapter implements ICache {
  constructor(private adaptee: IMimeCache) {}

  set(key: string, value: string): void {
    this.adaptee.setterCache(key, value);
  }
  get(key: string): string | null {
    return this.adaptee.getterCache(key);
  }
}

class User {
  private cache: ICache;
  constructor(cache: ICache) {
    this.cache = cache;
  }

  getUser(id: string): string | null {
    return this.cache.get(id);
  }

  setUser(user: { id: string; name: string }) {
    this.cache.set(user.id, user.name);
  }
}

const userWithRedis = new User(new Redis());
userWithRedis.setUser({ id: "123", name: "Bro" });
console.log(userWithRedis.getUser("123"));

const mimeInstance = new MimeCache();
const userWithMime = new User(new CacheAdapter(mimeInstance));
userWithMime.setUser({ id: "456", name: "Dude" });
console.log(userWithMime.getUser("456"));
