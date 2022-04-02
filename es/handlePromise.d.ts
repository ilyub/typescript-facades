import * as is from "@skylib/functions/es/guards";
import type { ValidationObject } from "@skylib/functions/es/helpers";
import type { AsyncPromise } from "@skylib/functions/es/types/function";
export declare const handlePromise: import("@skylib/functions/es/helpers").Facade<Facade, Extension>;
export interface Extension {
    TaskTypeVO: ValidationObject<TaskType>;
    isTaskType: is.Guard<TaskType>;
    isTaskTypeU: is.Guard<TaskType | undefined>;
}
export interface Facade {
    /**
     * Waits for all active promises.
     *
     * @returns Promise.
     */
    readonly runAll: () => Promise<void>;
    /**
     * Checks that there are active promises.
     *
     * @returns _True_ if there are active promises, _false_ otherwise.
     */
    readonly running: () => boolean;
    /**
     * Handles promise.
     *
     * @param promiseAsync - Promise or asynchronous function.
     * @param errorMessage - Error message (used to alert user on error).
     */
    readonly silent: <T>(promiseAsync: AsyncPromise<T>, errorMessage?: string) => void;
    /**
     * Handles promise with progress reporting.
     *
     * @param promiseAsync - Promise or asynchronous function.
     * @param type - Type (determines expected duration for progress reporting).
     * @param errorMessage - Error message (used to alert user on error).
     */
    readonly verbose: <T>(promiseAsync: AsyncPromise<T>, type: TaskType, errorMessage?: string) => void;
}
export declare type TaskType = "createDb" | "dbRequest" | "destroyDb" | "httpRequest" | "navigation";
//# sourceMappingURL=handlePromise.d.ts.map