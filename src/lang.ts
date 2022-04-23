import { createFacade } from "@skylib/functions";
import type { NumStr, Rec, PickKeys } from "@skylib/functions";

declare global {
  namespace facades {
    namespace lang {
      interface Context {
        readonly _placeholder?: never;
      }

      interface Word {
        readonly _placeholder?: never;
      }
    }
  }
}

export const lang = createFacade<lang.Facade>("lang", {});

export namespace lang {
  export type Context = PickKeys<facades.lang.Context, true, "extends->">;

  export interface Dictionary<C extends Context> {
    /**
     * Sets context.
     *
     * @param context - Context.
     * @returns Dictionary.
     */
    readonly context: (context: C) => Facade;
    /**
     * Returns word. Uses previosly set context, count and replacements.
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
    readonly has: (key: string) => boolean;
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
     * @param name - Name.
     * @param replacement - Value or word ID.
     * @returns Dictionary.
     */
    readonly with: (name: string, replacement: NumStr) => Facade;
  }

  export type Facade = Lang<Word, Context>;

  export type Lang<W extends Word, C extends Context> = Dictionary<C> &
    Rec<Capitalize<W> | Lowercase<W> | Uncapitalize<W> | Uppercase<W>, string>;

  export type Word = PickKeys<facades.lang.Word, true, "extends->">;
}
