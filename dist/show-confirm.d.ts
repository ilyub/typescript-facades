export declare const showConfirm: import("@skylib/functions").Facade<showConfirm.Facade, unknown>;
export declare namespace showConfirm {
    interface Facade {
        /**
         * Shows confirmation dialog.
         *
         * @param message - Message.
         * @param success - Success callback.
         * @param failure - Failure callback.
         */
        (message: string, success?: () => void, failure?: () => void): void;
        /**
         * Shows confirmation dialog.
         *
         * @param message - Message.
         * @returns _True_ if accepted, _false_ if rejected.
         */
        readonly async: (message: string) => Promise<boolean>;
    }
}
//# sourceMappingURL=show-confirm.d.ts.map