declare global {
    namespace facades {
        namespace icons {
            interface Facade {
                readonly sampleIcon: string;
            }
        }
    }
}
export declare const icons: import("@skylib/functions/es/helpers").Facade<facades.icons.Facade, Extension>;
export interface Extension {
    /**
     * Creates facade excerpt.
     *
     * @param keys - Keys.
     * @param dev - Development mode.
     * @returns Facade excerpt.
     */
    readonly createExcerpt: <T extends Icon>(keys: readonly T[], dev: boolean) => Record<T, string>;
}
export declare type Facade = facades.icons.Facade;
export declare type Icon = keyof Facade;
//# sourceMappingURL=icons.d.ts.map