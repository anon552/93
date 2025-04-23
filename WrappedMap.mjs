import runtime from "./Runtime.mjs";
import Option from "./Option.mjs";
let WrappedMap2;
(class WrappedMap {
  static {
    WrappedMap2 = WrappedMap;
    this.WrappedMap = class WrappedMap1 {
      #storage;
      constructor() {
        let tmp, lambda;
        tmp = new globalThis.Map();
        this.#storage = tmp;
        const this$WrappedMap = this;
        lambda = (undefined, function () {
          return runtime.safeCall(this$WrappedMap.#storage[globalThis.Symbol.iterator]())
        });
        this[globalThis.Symbol.iterator] = lambda;
      }
      get(key) {
        let scrut, tmp;
        scrut = runtime.safeCall(this.#storage.has(key));
        if (scrut === true) {
          tmp = runtime.safeCall(this.#storage.get(key));
          return Option.Some(tmp)
        } else {
          return Option.None
        }
      } 
      insert(key1, value) {
        let tmp;
        tmp = this.#storage.set(key1, value);
        return runtime.Unit
      } 
      updateWith(key2) {
        return (op) => {
          let scrut, param0, value1, tmp;
          tmp = this.get(key2);
          scrut = runtime.safeCall(op(tmp));
          if (scrut instanceof Option.Some.class) {
            param0 = scrut.value;
            value1 = param0;
            return this.#storage.set(key2, value1)
          } else if (scrut instanceof Option.None.class) {
            return runtime.safeCall(this.#storage.delete(key2))
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } 
      get keysIterator() {
        return runtime.safeCall(this.#storage.keys());
      } 
      get valuesIterator() {
        return runtime.safeCall(this.#storage.values());
      } 
      get values() {
        let tmp;
        tmp = runtime.safeCall(this.#storage.values());
        return runtime.safeCall(globalThis.Array.from(tmp));
      }
      toString() { return "WrappedMap"; }
    };
  }
  static toMap(entries) {
    let m, i, length, scrut, tmp, tmp1, tmp2, tmp3;
    m = WrappedMap.empty;
    i = 0;
    length = entries.length;
    tmp4: while (true) {
      scrut = i < length;
      if (scrut === true) {
        tmp = runtime.safeCall(entries.at(i));
        tmp1 = runtime.safeCall(m.insert(...tmp));
        tmp2 = i + 1;
        i = tmp2;
        tmp3 = runtime.Unit;
        continue tmp4;
      } else {
        tmp3 = runtime.Unit;
      }
      break;
    }
    return m
  } 
  static get empty() {
    return new WrappedMap.WrappedMap();
  }
  static toString() { return "WrappedMap"; }
});
let WrappedMap = WrappedMap2; export default WrappedMap;
