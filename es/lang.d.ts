import type { NumStr, Rec } from "@skylib/functions/es/types/core";
declare global {
    namespace facades {
        namespace lang {
            interface Context {
            }
            interface Word {
            }
        }
    }
}
export declare const lang: import("@skylib/functions/es/helpers").Facade<Facade, object>;
export declare type Context = keyof facades.lang.Context;
export interface Dictionary {
    /**
     * Sets context.
     *
     * @param context - Context.
     * @returns Dictionary.
     */
    readonly context: (context: Context) => Facade;
    /**
     * Returns word based on context and count (applies replacements).
     *
     * @param key - Word ID.
     * @returns Word.
     */
    readonly get: (key: string) => string;
    /**
     * Checks that word exists.
     *
     * @param key - Word ID.
     * @returns _True_ if word exists, _false_ otherwise.
     */
    readonly has: (key: string) => key is Transforms<Word>;
    /**
     * Sets count for plural form.
     *
     * @param count - Count for plural form.
     * @returns Dictionary.
     */
    readonly plural: (count: number) => Facade;
    /**
     * Adds replacement.
     *
     * @param search - Search term.
     * @param replace - Replacement.
     * @returns Dictionary.
     */
    readonly with: (search: string, replace: NumStr) => Facade;
}
export declare type DictionaryAndWords<T extends Word> = Dictionary & Rec<Transforms<T>, string>;
export declare type Facade = DictionaryAndWords<Word>;
export declare type Transforms<T extends string> = Capitalize<T> | Lowercase<T> | Uncapitalize<T> | Uppercase<T>;
export declare type Word = keyof facades.lang.Word;
//# sourceMappingURL=lang.d.ts.map