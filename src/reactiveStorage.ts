import { createFacade } from "@skylib/functions/dist/helpers";

declare global {
  namespace facades {
    namespace reactiveStorage {
      interface Observer {
        readonly _type: "ReactiveStorageObserver";
      }
    }
  }
}

export const reactiveStorage = createFacade<Facade>("reactiveStorage", {});

export interface Facade {
  /**
   * Creates reactive object.
   *
   * @param obj - Object.
   * @returns Reactive object.
   */
  <T extends object>(obj: T): T;
  /**
   * Unsubscribes from changes.
   *
   * @param obj - Reactive object.
   * @param observer - Observer.
   */
  readonly unwatch: (obj: object, observer: Observer) => void;
  /**
   * Subscribes to changes.
   *
   * @param obj - Reactive object.
   * @param handler - Handles object change.
   * @param reducer - Reduces object for comparison.
   * @returns Observer.
   */
  readonly watch: <T extends object>(
    obj: T,
    handler: Handler<T>,
    reducer?: Reducer<T>
  ) => Observer;
}

export interface Handler<T extends object> {
  /**
   * Handles object change.
   *
   * @param obj - Object.
   */
  (obj: T): void;
}

export type Observer = facades.reactiveStorage.Observer;

export interface Reducer<T extends object> {
  /**
   * Reduces object for comparison.
   *
   * @param obj - Object.
   */
  (obj: T): unknown;
}
