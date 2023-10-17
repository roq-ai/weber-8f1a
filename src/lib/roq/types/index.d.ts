/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model event
 *
 */
export type event = $Result.DefaultSelection<Prisma.$eventPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model publication
 *
 */
export type publication = $Result.DefaultSelection<Prisma.$publicationPayload>;
/**
 * Model research
 *
 */
export type research = $Result.DefaultSelection<Prisma.$researchPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.eventDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **publication** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Publications
   * const publications = await prisma.publication.findMany()
   * ```
   */
  get publication(): Prisma.publicationDelegate<ExtArgs>;

  /**
   * `prisma.research`: Exposes CRUD operations for the **research** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Research
   * const research = await prisma.research.findMany()
   * ```
   */
  get research(): Prisma.researchDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    event: 'event';
    organization: 'organization';
    project: 'project';
    publication: 'publication';
    research: 'research';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'event' | 'organization' | 'project' | 'publication' | 'research' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      event: {
        payload: Prisma.$eventPayload<ExtArgs>;
        fields: Prisma.eventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.eventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.eventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          findFirst: {
            args: Prisma.eventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.eventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          findMany: {
            args: Prisma.eventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>[];
          };
          create: {
            args: Prisma.eventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          createMany: {
            args: Prisma.eventCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.eventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          update: {
            args: Prisma.eventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          deleteMany: {
            args: Prisma.eventDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.eventUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.eventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.eventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.eventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      publication: {
        payload: Prisma.$publicationPayload<ExtArgs>;
        fields: Prisma.publicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.publicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.publicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          findFirst: {
            args: Prisma.publicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.publicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          findMany: {
            args: Prisma.publicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>[];
          };
          create: {
            args: Prisma.publicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          createMany: {
            args: Prisma.publicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.publicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          update: {
            args: Prisma.publicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          deleteMany: {
            args: Prisma.publicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.publicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.publicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePublication>;
          };
          groupBy: {
            args: Prisma.publicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PublicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.publicationCountArgs<ExtArgs>;
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number;
          };
        };
      };
      research: {
        payload: Prisma.$researchPayload<ExtArgs>;
        fields: Prisma.researchFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.researchFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.researchFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          findFirst: {
            args: Prisma.researchFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.researchFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          findMany: {
            args: Prisma.researchFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>[];
          };
          create: {
            args: Prisma.researchCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          createMany: {
            args: Prisma.researchCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.researchDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          update: {
            args: Prisma.researchUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          deleteMany: {
            args: Prisma.researchDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.researchUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.researchUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          aggregate: {
            args: Prisma.ResearchAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateResearch>;
          };
          groupBy: {
            args: Prisma.researchGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ResearchGroupByOutputType>[];
          };
          count: {
            args: Prisma.researchCountArgs<ExtArgs>;
            result: $Utils.Optional<ResearchCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    event: number;
    project: number;
    research: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | OrganizationCountOutputTypeCountEventArgs;
    project?: boolean | OrganizationCountOutputTypeCountProjectArgs;
    research?: boolean | OrganizationCountOutputTypeCountResearchArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: eventWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountResearchArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: researchWhereInput;
  };

  /**
   * Count Type ResearchCountOutputType
   */

  export type ResearchCountOutputType = {
    publication: number;
  };

  export type ResearchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | ResearchCountOutputTypeCountPublicationArgs;
  };

  // Custom InputTypes

  /**
   * ResearchCountOutputType without action
   */
  export type ResearchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchCountOutputType
     */
    select?: ResearchCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ResearchCountOutputType without action
   */
  export type ResearchCountOutputTypeCountPublicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: publicationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    event: number;
    organization: number;
    project: number;
    publication: number;
    research: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | UserCountOutputTypeCountEventArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    project?: boolean | UserCountOutputTypeCountProjectArgs;
    publication?: boolean | UserCountOutputTypeCountPublicationArgs;
    research?: boolean | UserCountOutputTypeCountResearchArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: projectWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: publicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: researchWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    event_date: Date | null;
    location: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    event_date: Date | null;
    location: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    event_date: number;
    location: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    location?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    location?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    location?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event to aggregate.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventWhereInput;
    orderBy?: eventOrderByWithAggregationInput | eventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: eventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    event_date: Date | null;
    location: string | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EventGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EventGroupByOutputType[P]>
          : GetScalarType<T[P], EventGroupByOutputType[P]>;
      }
    >
  >;

  export type eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      event_date?: boolean;
      location?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type eventSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    event_date?: boolean;
    location?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'event';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        event_date: Date | null;
        location: string | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['event']
    >;
    composites: {};
  };

  type eventGetPayload<S extends boolean | null | undefined | eventDefaultArgs> = $Result.GetResult<
    Prisma.$eventPayload,
    S
  >;

  type eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    eventFindManyArgs,
    'select' | 'include'
  > & {
    select?: EventCountAggregateInputType | true;
  };

  export interface eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event']; meta: { name: 'event' } };
    /**
     * Find zero or one Event that matches the filter.
     * @param {eventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends eventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, eventFindUniqueArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {eventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends eventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends eventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindFirstArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends eventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends eventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Event.
     * @param {eventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     **/
    create<T extends eventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, eventCreateArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Events.
     *     @param {eventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends eventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Event.
     * @param {eventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     **/
    delete<T extends eventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, eventDeleteArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Event.
     * @param {eventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends eventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpdateArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Events.
     * @param {eventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends eventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends eventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Event.
     * @param {eventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     **/
    upsert<T extends eventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpsertArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends eventCountArgs>(
      args?: Subset<T, eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends eventGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventGroupByArgs['orderBy'] }
        : { orderBy?: eventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, eventGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the event model
     */
    readonly fields: eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the event model
   */
  interface eventFieldRefs {
    readonly id: FieldRef<'event', 'String'>;
    readonly title: FieldRef<'event', 'String'>;
    readonly description: FieldRef<'event', 'String'>;
    readonly event_date: FieldRef<'event', 'DateTime'>;
    readonly location: FieldRef<'event', 'String'>;
    readonly user_id: FieldRef<'event', 'String'>;
    readonly organization_id: FieldRef<'event', 'String'>;
    readonly created_at: FieldRef<'event', 'DateTime'>;
    readonly updated_at: FieldRef<'event', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * event findUnique
   */
  export type eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event findUniqueOrThrow
   */
  export type eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event findFirst
   */
  export type eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event findFirstOrThrow
   */
  export type eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event findMany
   */
  export type eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which events to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event create
   */
  export type eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The data needed to create a event.
     */
    data: XOR<eventCreateInput, eventUncheckedCreateInput>;
  };

  /**
   * event createMany
   */
  export type eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventCreateManyInput | eventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * event update
   */
  export type eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The data needed to update a event.
     */
    data: XOR<eventUpdateInput, eventUncheckedUpdateInput>;
    /**
     * Choose, which event to update.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event updateMany
   */
  export type eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyInput>;
    /**
     * Filter which events to update
     */
    where?: eventWhereInput;
  };

  /**
   * event upsert
   */
  export type eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The filter to search for the event to update in case it exists.
     */
    where: eventWhereUniqueInput;
    /**
     * In case the event found by the `where` argument doesn't exist, create a new event with this data.
     */
    create: XOR<eventCreateInput, eventUncheckedCreateInput>;
    /**
     * In case the event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventUpdateInput, eventUncheckedUpdateInput>;
  };

  /**
   * event delete
   */
  export type eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter which event to delete.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event deleteMany
   */
  export type eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventWhereInput;
  };

  /**
   * event without action
   */
  export type eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        event?: boolean | organization$eventArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        project?: boolean | organization$projectArgs<ExtArgs>;
        research?: boolean | organization$researchArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | organization$eventArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    project?: boolean | organization$projectArgs<ExtArgs>;
    research?: boolean | organization$researchArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      event: Prisma.$eventPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>[];
      research: Prisma.$researchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends organization$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$eventArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends organization$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    research<T extends organization$researchArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$researchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.event
   */
  export type organization$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    where?: eventWhereInput;
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    cursor?: eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * organization.project
   */
  export type organization$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * organization.research
   */
  export type organization$researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    where?: researchWhereInput;
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    cursor?: researchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    start_date: number;
    end_date: number;
    status: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput;
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
      }
    >
  >;

  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['project']
  >;

  export type projectSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        status: string | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project']
    >;
    composites: {};
  };

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<
    Prisma.$projectPayload,
    S
  >;

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    projectFindManyArgs,
    'select' | 'include'
  > & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project']; meta: { name: 'project' } };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<'project', 'String'>;
    readonly title: FieldRef<'project', 'String'>;
    readonly description: FieldRef<'project', 'String'>;
    readonly start_date: FieldRef<'project', 'DateTime'>;
    readonly end_date: FieldRef<'project', 'DateTime'>;
    readonly status: FieldRef<'project', 'String'>;
    readonly user_id: FieldRef<'project', 'String'>;
    readonly organization_id: FieldRef<'project', 'String'>;
    readonly created_at: FieldRef<'project', 'DateTime'>;
    readonly updated_at: FieldRef<'project', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null;
    _min: PublicationMinAggregateOutputType | null;
    _max: PublicationMaxAggregateOutputType | null;
  };

  export type PublicationMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    publication_date: Date | null;
    publisher: string | null;
    user_id: string | null;
    research_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PublicationMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    publication_date: Date | null;
    publisher: string | null;
    user_id: string | null;
    research_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PublicationCountAggregateOutputType = {
    id: number;
    title: number;
    abstract: number;
    publication_date: number;
    publisher: number;
    user_id: number;
    research_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PublicationMinAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PublicationMaxAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PublicationCountAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publication to aggregate.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned publications
     **/
    _count?: true | PublicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PublicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PublicationMaxAggregateInputType;
  };

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
    [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>;
  };

  export type publicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithAggregationInput | publicationOrderByWithAggregationInput[];
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum;
    having?: publicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublicationCountAggregateInputType | true;
    _min?: PublicationMinAggregateInputType;
    _max?: PublicationMaxAggregateInputType;
  };

  export type PublicationGroupByOutputType = {
    id: string;
    title: string;
    abstract: string | null;
    publication_date: Date | null;
    publisher: string | null;
    user_id: string;
    research_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PublicationCountAggregateOutputType | null;
    _min: PublicationMinAggregateOutputType | null;
    _max: PublicationMaxAggregateOutputType | null;
  };

  type GetPublicationGroupByPayload<T extends publicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PublicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
          : GetScalarType<T[P], PublicationGroupByOutputType[P]>;
      }
    >
  >;

  export type publicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        abstract?: boolean;
        publication_date?: boolean;
        publisher?: boolean;
        user_id?: boolean;
        research_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        research?: boolean | researchDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['publication']
    >;

  export type publicationSelectScalar = {
    id?: boolean;
    title?: boolean;
    abstract?: boolean;
    publication_date?: boolean;
    publisher?: boolean;
    user_id?: boolean;
    research_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type publicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    research?: boolean | researchDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $publicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'publication';
    objects: {
      research: Prisma.$researchPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        abstract: string | null;
        publication_date: Date | null;
        publisher: string | null;
        user_id: string;
        research_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['publication']
    >;
    composites: {};
  };

  type publicationGetPayload<S extends boolean | null | undefined | publicationDefaultArgs> = $Result.GetResult<
    Prisma.$publicationPayload,
    S
  >;

  type publicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    publicationFindManyArgs,
    'select' | 'include'
  > & {
    select?: PublicationCountAggregateInputType | true;
  };

  export interface publicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publication']; meta: { name: 'publication' } };
    /**
     * Find zero or one Publication that matches the filter.
     * @param {publicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends publicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, publicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Publication that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {publicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends publicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends publicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindFirstArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends publicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     *
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends publicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Publication.
     * @param {publicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     *
     **/
    create<T extends publicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, publicationCreateArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Publications.
     *     @param {publicationCreateManyArgs} args - Arguments to create many Publications.
     *     @example
     *     // Create many Publications
     *     const publication = await prisma.publication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends publicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Publication.
     * @param {publicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     *
     **/
    delete<T extends publicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, publicationDeleteArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Publication.
     * @param {publicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends publicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpdateArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Publications.
     * @param {publicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends publicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends publicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Publication.
     * @param {publicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     **/
    upsert<T extends publicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpsertArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
     **/
    count<T extends publicationCountArgs>(
      args?: Subset<T, publicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PublicationAggregateArgs>(
      args: Subset<T, PublicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetPublicationAggregateType<T>>;

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends publicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicationGroupByArgs['orderBy'] }
        : { orderBy?: publicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, publicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the publication model
     */
    readonly fields: publicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    research<T extends researchDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, researchDefaultArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the publication model
   */
  interface publicationFieldRefs {
    readonly id: FieldRef<'publication', 'String'>;
    readonly title: FieldRef<'publication', 'String'>;
    readonly abstract: FieldRef<'publication', 'String'>;
    readonly publication_date: FieldRef<'publication', 'DateTime'>;
    readonly publisher: FieldRef<'publication', 'String'>;
    readonly user_id: FieldRef<'publication', 'String'>;
    readonly research_id: FieldRef<'publication', 'String'>;
    readonly created_at: FieldRef<'publication', 'DateTime'>;
    readonly updated_at: FieldRef<'publication', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * publication findUnique
   */
  export type publicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication findUniqueOrThrow
   */
  export type publicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication findFirst
   */
  export type publicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication findFirstOrThrow
   */
  export type publicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication findMany
   */
  export type publicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication create
   */
  export type publicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a publication.
     */
    data: XOR<publicationCreateInput, publicationUncheckedCreateInput>;
  };

  /**
   * publication createMany
   */
  export type publicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publications.
     */
    data: publicationCreateManyInput | publicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * publication update
   */
  export type publicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a publication.
     */
    data: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>;
    /**
     * Choose, which publication to update.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication updateMany
   */
  export type publicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publications.
     */
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyInput>;
    /**
     * Filter which publications to update
     */
    where?: publicationWhereInput;
  };

  /**
   * publication upsert
   */
  export type publicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the publication to update in case it exists.
     */
    where: publicationWhereUniqueInput;
    /**
     * In case the publication found by the `where` argument doesn't exist, create a new publication with this data.
     */
    create: XOR<publicationCreateInput, publicationUncheckedCreateInput>;
    /**
     * In case the publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>;
  };

  /**
   * publication delete
   */
  export type publicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter which publication to delete.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication deleteMany
   */
  export type publicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publications to delete
     */
    where?: publicationWhereInput;
  };

  /**
   * publication without action
   */
  export type publicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
  };

  /**
   * Model research
   */

  export type AggregateResearch = {
    _count: ResearchCountAggregateOutputType | null;
    _min: ResearchMinAggregateOutputType | null;
    _max: ResearchMaxAggregateOutputType | null;
  };

  export type ResearchMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    keywords: string | null;
    publication_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResearchMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    keywords: string | null;
    publication_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResearchCountAggregateOutputType = {
    id: number;
    title: number;
    abstract: number;
    keywords: number;
    publication_date: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ResearchMinAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    keywords?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResearchMaxAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    keywords?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResearchCountAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    keywords?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ResearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research to aggregate.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned research
     **/
    _count?: true | ResearchCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ResearchMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ResearchMaxAggregateInputType;
  };

  export type GetResearchAggregateType<T extends ResearchAggregateArgs> = {
    [P in keyof T & keyof AggregateResearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearch[P]>
      : GetScalarType<T[P], AggregateResearch[P]>;
  };

  export type researchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: researchWhereInput;
    orderBy?: researchOrderByWithAggregationInput | researchOrderByWithAggregationInput[];
    by: ResearchScalarFieldEnum[] | ResearchScalarFieldEnum;
    having?: researchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResearchCountAggregateInputType | true;
    _min?: ResearchMinAggregateInputType;
    _max?: ResearchMaxAggregateInputType;
  };

  export type ResearchGroupByOutputType = {
    id: string;
    title: string;
    abstract: string | null;
    keywords: string | null;
    publication_date: Date | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ResearchCountAggregateOutputType | null;
    _min: ResearchMinAggregateOutputType | null;
    _max: ResearchMaxAggregateOutputType | null;
  };

  type GetResearchGroupByPayload<T extends researchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ResearchGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ResearchGroupByOutputType[P]>
          : GetScalarType<T[P], ResearchGroupByOutputType[P]>;
      }
    >
  >;

  export type researchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        abstract?: boolean;
        keywords?: boolean;
        publication_date?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        publication?: boolean | research$publicationArgs<ExtArgs>;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | ResearchCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['research']
    >;

  export type researchSelectScalar = {
    id?: boolean;
    title?: boolean;
    abstract?: boolean;
    keywords?: boolean;
    publication_date?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type researchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | research$publicationArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | ResearchCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $researchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'research';
    objects: {
      publication: Prisma.$publicationPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        abstract: string | null;
        keywords: string | null;
        publication_date: Date | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['research']
    >;
    composites: {};
  };

  type researchGetPayload<S extends boolean | null | undefined | researchDefaultArgs> = $Result.GetResult<
    Prisma.$researchPayload,
    S
  >;

  type researchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    researchFindManyArgs,
    'select' | 'include'
  > & {
    select?: ResearchCountAggregateInputType | true;
  };

  export interface researchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['research']; meta: { name: 'research' } };
    /**
     * Find zero or one Research that matches the filter.
     * @param {researchFindUniqueArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends researchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, researchFindUniqueArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Research that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {researchFindUniqueOrThrowArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends researchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Research that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindFirstArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends researchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindFirstArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Research that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindFirstOrThrowArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends researchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Research that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Research
     * const research = await prisma.research.findMany()
     *
     * // Get first 10 Research
     * const research = await prisma.research.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const researchWithIdOnly = await prisma.research.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends researchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Research.
     * @param {researchCreateArgs} args - Arguments to create a Research.
     * @example
     * // Create one Research
     * const Research = await prisma.research.create({
     *   data: {
     *     // ... data to create a Research
     *   }
     * })
     *
     **/
    create<T extends researchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, researchCreateArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Research.
     *     @param {researchCreateManyArgs} args - Arguments to create many Research.
     *     @example
     *     // Create many Research
     *     const research = await prisma.research.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends researchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Research.
     * @param {researchDeleteArgs} args - Arguments to delete one Research.
     * @example
     * // Delete one Research
     * const Research = await prisma.research.delete({
     *   where: {
     *     // ... filter to delete one Research
     *   }
     * })
     *
     **/
    delete<T extends researchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, researchDeleteArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Research.
     * @param {researchUpdateArgs} args - Arguments to update one Research.
     * @example
     * // Update one Research
     * const research = await prisma.research.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends researchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpdateArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Research.
     * @param {researchDeleteManyArgs} args - Arguments to filter Research to delete.
     * @example
     * // Delete a few Research
     * const { count } = await prisma.research.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends researchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Research
     * const research = await prisma.research.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends researchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Research.
     * @param {researchUpsertArgs} args - Arguments to update or create a Research.
     * @example
     * // Update or create a Research
     * const research = await prisma.research.upsert({
     *   create: {
     *     // ... data to create a Research
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Research we want to update
     *   }
     * })
     **/
    upsert<T extends researchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpsertArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchCountArgs} args - Arguments to filter Research to count.
     * @example
     * // Count the number of Research
     * const count = await prisma.research.count({
     *   where: {
     *     // ... the filter for the Research we want to count
     *   }
     * })
     **/
    count<T extends researchCountArgs>(
      args?: Subset<T, researchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ResearchAggregateArgs>(
      args: Subset<T, ResearchAggregateArgs>,
    ): Prisma.PrismaPromise<GetResearchAggregateType<T>>;

    /**
     * Group by Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends researchGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: researchGroupByArgs['orderBy'] }
        : { orderBy?: researchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, researchGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetResearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the research model
     */
    readonly fields: researchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for research.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__researchClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publication<T extends research$publicationArgs<ExtArgs> = {}>(
      args?: Subset<T, research$publicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the research model
   */
  interface researchFieldRefs {
    readonly id: FieldRef<'research', 'String'>;
    readonly title: FieldRef<'research', 'String'>;
    readonly abstract: FieldRef<'research', 'String'>;
    readonly keywords: FieldRef<'research', 'String'>;
    readonly publication_date: FieldRef<'research', 'DateTime'>;
    readonly user_id: FieldRef<'research', 'String'>;
    readonly organization_id: FieldRef<'research', 'String'>;
    readonly created_at: FieldRef<'research', 'DateTime'>;
    readonly updated_at: FieldRef<'research', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * research findUnique
   */
  export type researchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research findUniqueOrThrow
   */
  export type researchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research findFirst
   */
  export type researchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research.
     */
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research findFirstOrThrow
   */
  export type researchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research.
     */
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research findMany
   */
  export type researchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research create
   */
  export type researchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The data needed to create a research.
     */
    data: XOR<researchCreateInput, researchUncheckedCreateInput>;
  };

  /**
   * research createMany
   */
  export type researchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many research.
     */
    data: researchCreateManyInput | researchCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * research update
   */
  export type researchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The data needed to update a research.
     */
    data: XOR<researchUpdateInput, researchUncheckedUpdateInput>;
    /**
     * Choose, which research to update.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research updateMany
   */
  export type researchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update research.
     */
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyInput>;
    /**
     * Filter which research to update
     */
    where?: researchWhereInput;
  };

  /**
   * research upsert
   */
  export type researchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The filter to search for the research to update in case it exists.
     */
    where: researchWhereUniqueInput;
    /**
     * In case the research found by the `where` argument doesn't exist, create a new research with this data.
     */
    create: XOR<researchCreateInput, researchUncheckedCreateInput>;
    /**
     * In case the research was found with the provided `where` argument, update it with this data.
     */
    update: XOR<researchUpdateInput, researchUncheckedUpdateInput>;
  };

  /**
   * research delete
   */
  export type researchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter which research to delete.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research deleteMany
   */
  export type researchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research to delete
     */
    where?: researchWhereInput;
  };

  /**
   * research.publication
   */
  export type research$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    cursor?: publicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * research without action
   */
  export type researchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      event?: boolean | user$eventArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      project?: boolean | user$projectArgs<ExtArgs>;
      publication?: boolean | user$publicationArgs<ExtArgs>;
      research?: boolean | user$researchArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | user$eventArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    project?: boolean | user$projectArgs<ExtArgs>;
    publication?: boolean | user$publicationArgs<ExtArgs>;
    research?: boolean | user$researchArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      event: Prisma.$eventPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      project: Prisma.$projectPayload<ExtArgs>[];
      publication: Prisma.$publicationPayload<ExtArgs>[];
      research: Prisma.$researchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends user$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, user$eventArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    project<T extends user$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, user$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    publication<T extends user$publicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$publicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    research<T extends user$researchArgs<ExtArgs> = {}>(
      args?: Subset<T, user$researchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.event
   */
  export type user$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    where?: eventWhereInput;
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    cursor?: eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * user.publication
   */
  export type user$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    cursor?: publicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * user.research
   */
  export type user$researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    where?: researchWhereInput;
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    cursor?: researchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EventScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    event_date: 'event_date';
    location: 'location';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const PublicationScalarFieldEnum: {
    id: 'id';
    title: 'title';
    abstract: 'abstract';
    publication_date: 'publication_date';
    publisher: 'publisher';
    user_id: 'user_id';
    research_id: 'research_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum];

  export const ResearchScalarFieldEnum: {
    id: 'id';
    title: 'title';
    abstract: 'abstract';
    keywords: 'keywords';
    publication_date: 'publication_date';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ResearchScalarFieldEnum = (typeof ResearchScalarFieldEnum)[keyof typeof ResearchScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type eventWhereInput = {
    AND?: eventWhereInput | eventWhereInput[];
    OR?: eventWhereInput[];
    NOT?: eventWhereInput | eventWhereInput[];
    id?: UuidFilter<'event'> | string;
    title?: StringFilter<'event'> | string;
    description?: StringNullableFilter<'event'> | string | null;
    event_date?: DateTimeNullableFilter<'event'> | Date | string | null;
    location?: StringNullableFilter<'event'> | string | null;
    user_id?: UuidFilter<'event'> | string;
    organization_id?: UuidFilter<'event'> | string;
    created_at?: DateTimeFilter<'event'> | Date | string;
    updated_at?: DateTimeFilter<'event'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type eventOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    event_date?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type eventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: eventWhereInput | eventWhereInput[];
      OR?: eventWhereInput[];
      NOT?: eventWhereInput | eventWhereInput[];
      title?: StringFilter<'event'> | string;
      description?: StringNullableFilter<'event'> | string | null;
      event_date?: DateTimeNullableFilter<'event'> | Date | string | null;
      location?: StringNullableFilter<'event'> | string | null;
      user_id?: UuidFilter<'event'> | string;
      organization_id?: UuidFilter<'event'> | string;
      created_at?: DateTimeFilter<'event'> | Date | string;
      updated_at?: DateTimeFilter<'event'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type eventOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    event_date?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: eventCountOrderByAggregateInput;
    _max?: eventMaxOrderByAggregateInput;
    _min?: eventMinOrderByAggregateInput;
  };

  export type eventScalarWhereWithAggregatesInput = {
    AND?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[];
    OR?: eventScalarWhereWithAggregatesInput[];
    NOT?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'event'> | string;
    title?: StringWithAggregatesFilter<'event'> | string;
    description?: StringNullableWithAggregatesFilter<'event'> | string | null;
    event_date?: DateTimeNullableWithAggregatesFilter<'event'> | Date | string | null;
    location?: StringNullableWithAggregatesFilter<'event'> | string | null;
    user_id?: UuidWithAggregatesFilter<'event'> | string;
    organization_id?: UuidWithAggregatesFilter<'event'> | string;
    created_at?: DateTimeWithAggregatesFilter<'event'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'event'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    event?: EventListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    project?: ProjectListRelationFilter;
    research?: ResearchListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    event?: eventOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    project?: projectOrderByRelationAggregateInput;
    research?: researchOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      event?: EventListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      project?: ProjectListRelationFilter;
      research?: ResearchListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    id?: UuidFilter<'project'> | string;
    title?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    status?: StringNullableFilter<'project'> | string | null;
    user_id?: UuidFilter<'project'> | string;
    organization_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type projectOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      title?: StringFilter<'project'> | string;
      description?: StringNullableFilter<'project'> | string | null;
      start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      status?: StringNullableFilter<'project'> | string | null;
      user_id?: UuidFilter<'project'> | string;
      organization_id?: UuidFilter<'project'> | string;
      created_at?: DateTimeFilter<'project'> | Date | string;
      updated_at?: DateTimeFilter<'project'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project'> | string;
    title?: StringWithAggregatesFilter<'project'> | string;
    description?: StringNullableWithAggregatesFilter<'project'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'project'> | string | null;
    user_id?: UuidWithAggregatesFilter<'project'> | string;
    organization_id?: UuidWithAggregatesFilter<'project'> | string;
    created_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
  };

  export type publicationWhereInput = {
    AND?: publicationWhereInput | publicationWhereInput[];
    OR?: publicationWhereInput[];
    NOT?: publicationWhereInput | publicationWhereInput[];
    id?: UuidFilter<'publication'> | string;
    title?: StringFilter<'publication'> | string;
    abstract?: StringNullableFilter<'publication'> | string | null;
    publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
    publisher?: StringNullableFilter<'publication'> | string | null;
    user_id?: UuidFilter<'publication'> | string;
    research_id?: UuidFilter<'publication'> | string;
    created_at?: DateTimeFilter<'publication'> | Date | string;
    updated_at?: DateTimeFilter<'publication'> | Date | string;
    research?: XOR<ResearchRelationFilter, researchWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type publicationOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrderInput | SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    research?: researchOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type publicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: publicationWhereInput | publicationWhereInput[];
      OR?: publicationWhereInput[];
      NOT?: publicationWhereInput | publicationWhereInput[];
      title?: StringFilter<'publication'> | string;
      abstract?: StringNullableFilter<'publication'> | string | null;
      publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
      publisher?: StringNullableFilter<'publication'> | string | null;
      user_id?: UuidFilter<'publication'> | string;
      research_id?: UuidFilter<'publication'> | string;
      created_at?: DateTimeFilter<'publication'> | Date | string;
      updated_at?: DateTimeFilter<'publication'> | Date | string;
      research?: XOR<ResearchRelationFilter, researchWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type publicationOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrderInput | SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: publicationCountOrderByAggregateInput;
    _max?: publicationMaxOrderByAggregateInput;
    _min?: publicationMinOrderByAggregateInput;
  };

  export type publicationScalarWhereWithAggregatesInput = {
    AND?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[];
    OR?: publicationScalarWhereWithAggregatesInput[];
    NOT?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'publication'> | string;
    title?: StringWithAggregatesFilter<'publication'> | string;
    abstract?: StringNullableWithAggregatesFilter<'publication'> | string | null;
    publication_date?: DateTimeNullableWithAggregatesFilter<'publication'> | Date | string | null;
    publisher?: StringNullableWithAggregatesFilter<'publication'> | string | null;
    user_id?: UuidWithAggregatesFilter<'publication'> | string;
    research_id?: UuidWithAggregatesFilter<'publication'> | string;
    created_at?: DateTimeWithAggregatesFilter<'publication'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'publication'> | Date | string;
  };

  export type researchWhereInput = {
    AND?: researchWhereInput | researchWhereInput[];
    OR?: researchWhereInput[];
    NOT?: researchWhereInput | researchWhereInput[];
    id?: UuidFilter<'research'> | string;
    title?: StringFilter<'research'> | string;
    abstract?: StringNullableFilter<'research'> | string | null;
    keywords?: StringNullableFilter<'research'> | string | null;
    publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
    user_id?: UuidFilter<'research'> | string;
    organization_id?: UuidFilter<'research'> | string;
    created_at?: DateTimeFilter<'research'> | Date | string;
    updated_at?: DateTimeFilter<'research'> | Date | string;
    publication?: PublicationListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type researchOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrderInput | SortOrder;
    keywords?: SortOrderInput | SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    publication?: publicationOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type researchWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: researchWhereInput | researchWhereInput[];
      OR?: researchWhereInput[];
      NOT?: researchWhereInput | researchWhereInput[];
      title?: StringFilter<'research'> | string;
      abstract?: StringNullableFilter<'research'> | string | null;
      keywords?: StringNullableFilter<'research'> | string | null;
      publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
      user_id?: UuidFilter<'research'> | string;
      organization_id?: UuidFilter<'research'> | string;
      created_at?: DateTimeFilter<'research'> | Date | string;
      updated_at?: DateTimeFilter<'research'> | Date | string;
      publication?: PublicationListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type researchOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrderInput | SortOrder;
    keywords?: SortOrderInput | SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: researchCountOrderByAggregateInput;
    _max?: researchMaxOrderByAggregateInput;
    _min?: researchMinOrderByAggregateInput;
  };

  export type researchScalarWhereWithAggregatesInput = {
    AND?: researchScalarWhereWithAggregatesInput | researchScalarWhereWithAggregatesInput[];
    OR?: researchScalarWhereWithAggregatesInput[];
    NOT?: researchScalarWhereWithAggregatesInput | researchScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'research'> | string;
    title?: StringWithAggregatesFilter<'research'> | string;
    abstract?: StringNullableWithAggregatesFilter<'research'> | string | null;
    keywords?: StringNullableWithAggregatesFilter<'research'> | string | null;
    publication_date?: DateTimeNullableWithAggregatesFilter<'research'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'research'> | string;
    organization_id?: UuidWithAggregatesFilter<'research'> | string;
    created_at?: DateTimeWithAggregatesFilter<'research'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'research'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    event?: EventListRelationFilter;
    organization?: OrganizationListRelationFilter;
    project?: ProjectListRelationFilter;
    publication?: PublicationListRelationFilter;
    research?: ResearchListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    event?: eventOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    project?: projectOrderByRelationAggregateInput;
    publication?: publicationOrderByRelationAggregateInput;
    research?: researchOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      event?: EventListRelationFilter;
      organization?: OrganizationListRelationFilter;
      project?: ProjectListRelationFilter;
      publication?: PublicationListRelationFilter;
      research?: ResearchListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type eventCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEventInput;
    user: userCreateNestedOneWithoutEventInput;
  };

  export type eventUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEventNestedInput;
    user?: userUpdateOneRequiredWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutOrganizationInput;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutOrganizationNestedInput;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type projectCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutProjectInput;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutProjectNestedInput;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    research: researchCreateNestedOneWithoutPublicationInput;
    user: userCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    user_id: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    research?: researchUpdateOneRequiredWithoutPublicationNestedInput;
    user?: userUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateManyInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    user_id: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchCreateInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    organization: organizationCreateNestedOneWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchCreateManyInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type eventCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    event_date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type eventMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    event_date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type eventMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    event_date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EventListRelationFilter = {
    every?: eventWhereInput;
    some?: eventWhereInput;
    none?: eventWhereInput;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type ResearchListRelationFilter = {
    every?: researchWhereInput;
    some?: researchWhereInput;
    none?: researchWhereInput;
  };

  export type eventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type researchOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ResearchRelationFilter = {
    is?: researchWhereInput;
    isNot?: researchWhereInput;
  };

  export type publicationCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type publicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type publicationMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type PublicationListRelationFilter = {
    every?: publicationWhereInput;
    some?: publicationWhereInput;
    none?: publicationWhereInput;
  };

  export type publicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type researchCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    keywords?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type researchMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    keywords?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type researchMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    keywords?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutEventInput = {
    create?: XOR<organizationCreateWithoutEventInput, organizationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEventInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEventInput = {
    create?: XOR<userCreateWithoutEventInput, userUncheckedCreateWithoutEventInput>;
    connectOrCreate?: userCreateOrConnectWithoutEventInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<organizationCreateWithoutEventInput, organizationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEventInput;
    upsert?: organizationUpsertWithoutEventInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutEventInput, organizationUpdateWithoutEventInput>,
      organizationUncheckedUpdateWithoutEventInput
    >;
  };

  export type userUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<userCreateWithoutEventInput, userUncheckedCreateWithoutEventInput>;
    connectOrCreate?: userCreateOrConnectWithoutEventInput;
    upsert?: userUpsertWithoutEventInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEventInput, userUpdateWithoutEventInput>,
      userUncheckedUpdateWithoutEventInput
    >;
  };

  export type eventCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>
      | eventCreateWithoutOrganizationInput[]
      | eventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: eventCreateOrConnectWithoutOrganizationInput | eventCreateOrConnectWithoutOrganizationInput[];
    createMany?: eventCreateManyOrganizationInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type projectCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type researchCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type eventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>
      | eventCreateWithoutOrganizationInput[]
      | eventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: eventCreateOrConnectWithoutOrganizationInput | eventCreateOrConnectWithoutOrganizationInput[];
    createMany?: eventCreateManyOrganizationInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type researchUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type eventUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>
      | eventCreateWithoutOrganizationInput[]
      | eventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: eventCreateOrConnectWithoutOrganizationInput | eventCreateOrConnectWithoutOrganizationInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutOrganizationInput | eventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: eventCreateManyOrganizationInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutOrganizationInput | eventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: eventUpdateManyWithWhereWithoutOrganizationInput | eventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type projectUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutOrganizationInput
      | projectUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutOrganizationInput
      | projectUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutOrganizationInput
      | projectUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type researchUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | researchUpsertWithWhereUniqueWithoutOrganizationInput
      | researchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?:
      | researchUpdateWithWhereUniqueWithoutOrganizationInput
      | researchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | researchUpdateManyWithWhereWithoutOrganizationInput
      | researchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type eventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>
      | eventCreateWithoutOrganizationInput[]
      | eventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: eventCreateOrConnectWithoutOrganizationInput | eventCreateOrConnectWithoutOrganizationInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutOrganizationInput | eventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: eventCreateManyOrganizationInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutOrganizationInput | eventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: eventUpdateManyWithWhereWithoutOrganizationInput | eventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutOrganizationInput
      | projectUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutOrganizationInput
      | projectUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutOrganizationInput
      | projectUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type researchUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | researchUpsertWithWhereUniqueWithoutOrganizationInput
      | researchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?:
      | researchUpdateWithWhereUniqueWithoutOrganizationInput
      | researchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | researchUpdateManyWithWhereWithoutOrganizationInput
      | researchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type organizationCreateNestedOneWithoutProjectInput = {
    create?: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProjectInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProjectInput;
    upsert?: organizationUpsertWithoutProjectInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutProjectInput, organizationUpdateWithoutProjectInput>,
      organizationUncheckedUpdateWithoutProjectInput
    >;
  };

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    upsert?: userUpsertWithoutProjectInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>,
      userUncheckedUpdateWithoutProjectInput
    >;
  };

  export type researchCreateNestedOneWithoutPublicationInput = {
    create?: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: researchCreateOrConnectWithoutPublicationInput;
    connect?: researchWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPublicationInput = {
    create?: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublicationInput;
    connect?: userWhereUniqueInput;
  };

  export type researchUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: researchCreateOrConnectWithoutPublicationInput;
    upsert?: researchUpsertWithoutPublicationInput;
    connect?: researchWhereUniqueInput;
    update?: XOR<
      XOR<researchUpdateToOneWithWhereWithoutPublicationInput, researchUpdateWithoutPublicationInput>,
      researchUncheckedUpdateWithoutPublicationInput
    >;
  };

  export type userUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublicationInput;
    upsert?: userUpsertWithoutPublicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPublicationInput, userUpdateWithoutPublicationInput>,
      userUncheckedUpdateWithoutPublicationInput
    >;
  };

  export type publicationCreateNestedManyWithoutResearchInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutResearchInput = {
    create?: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutResearchInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutResearchInput = {
    create?: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutResearchInput;
    connect?: userWhereUniqueInput;
  };

  export type publicationUncheckedCreateNestedManyWithoutResearchInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type publicationUpdateManyWithoutResearchNestedInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    upsert?:
      | publicationUpsertWithWhereUniqueWithoutResearchInput
      | publicationUpsertWithWhereUniqueWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?:
      | publicationUpdateWithWhereUniqueWithoutResearchInput
      | publicationUpdateWithWhereUniqueWithoutResearchInput[];
    updateMany?:
      | publicationUpdateManyWithWhereWithoutResearchInput
      | publicationUpdateManyWithWhereWithoutResearchInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutResearchNestedInput = {
    create?: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutResearchInput;
    upsert?: organizationUpsertWithoutResearchInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutResearchInput, organizationUpdateWithoutResearchInput>,
      organizationUncheckedUpdateWithoutResearchInput
    >;
  };

  export type userUpdateOneRequiredWithoutResearchNestedInput = {
    create?: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutResearchInput;
    upsert?: userUpsertWithoutResearchInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutResearchInput, userUpdateWithoutResearchInput>,
      userUncheckedUpdateWithoutResearchInput
    >;
  };

  export type publicationUncheckedUpdateManyWithoutResearchNestedInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    upsert?:
      | publicationUpsertWithWhereUniqueWithoutResearchInput
      | publicationUpsertWithWhereUniqueWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?:
      | publicationUpdateWithWhereUniqueWithoutResearchInput
      | publicationUpdateWithWhereUniqueWithoutResearchInput[];
    updateMany?:
      | publicationUpdateManyWithWhereWithoutResearchInput
      | publicationUpdateManyWithWhereWithoutResearchInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type eventCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>
      | eventCreateWithoutUserInput[]
      | eventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: eventCreateOrConnectWithoutUserInput | eventCreateOrConnectWithoutUserInput[];
    createMany?: eventCreateManyUserInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type projectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type publicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type researchCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type eventUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>
      | eventCreateWithoutUserInput[]
      | eventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: eventCreateOrConnectWithoutUserInput | eventCreateOrConnectWithoutUserInput[];
    createMany?: eventCreateManyUserInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type publicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type researchUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type eventUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>
      | eventCreateWithoutUserInput[]
      | eventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: eventCreateOrConnectWithoutUserInput | eventCreateOrConnectWithoutUserInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutUserInput | eventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: eventCreateManyUserInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutUserInput | eventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: eventUpdateManyWithWhereWithoutUserInput | eventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type projectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type publicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    upsert?: publicationUpsertWithWhereUniqueWithoutUserInput | publicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?: publicationUpdateWithWhereUniqueWithoutUserInput | publicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publicationUpdateManyWithWhereWithoutUserInput | publicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type researchUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    upsert?: researchUpsertWithWhereUniqueWithoutUserInput | researchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?: researchUpdateWithWhereUniqueWithoutUserInput | researchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: researchUpdateManyWithWhereWithoutUserInput | researchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type eventUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>
      | eventCreateWithoutUserInput[]
      | eventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: eventCreateOrConnectWithoutUserInput | eventCreateOrConnectWithoutUserInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutUserInput | eventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: eventCreateManyUserInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutUserInput | eventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: eventUpdateManyWithWhereWithoutUserInput | eventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type publicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    upsert?: publicationUpsertWithWhereUniqueWithoutUserInput | publicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?: publicationUpdateWithWhereUniqueWithoutUserInput | publicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publicationUpdateManyWithWhereWithoutUserInput | publicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type researchUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    upsert?: researchUpsertWithWhereUniqueWithoutUserInput | researchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?: researchUpdateWithWhereUniqueWithoutUserInput | researchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: researchUpdateManyWithWhereWithoutUserInput | researchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutEventInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutEventInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutEventInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutEventInput, organizationUncheckedCreateWithoutEventInput>;
  };

  export type userCreateWithoutEventInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEventInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEventInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEventInput, userUncheckedCreateWithoutEventInput>;
  };

  export type organizationUpsertWithoutEventInput = {
    update: XOR<organizationUpdateWithoutEventInput, organizationUncheckedUpdateWithoutEventInput>;
    create: XOR<organizationCreateWithoutEventInput, organizationUncheckedCreateWithoutEventInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutEventInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutEventInput, organizationUncheckedUpdateWithoutEventInput>;
  };

  export type organizationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutEventInput = {
    update: XOR<userUpdateWithoutEventInput, userUncheckedUpdateWithoutEventInput>;
    create: XOR<userCreateWithoutEventInput, userUncheckedCreateWithoutEventInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEventInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEventInput, userUncheckedUpdateWithoutEventInput>;
  };

  export type userUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type eventCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEventInput;
  };

  export type eventUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventCreateOrConnectWithoutOrganizationInput = {
    where: eventWhereUniqueInput;
    create: XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>;
  };

  export type eventCreateManyOrganizationInputEnvelope = {
    data: eventCreateManyOrganizationInput | eventCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateOrConnectWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectCreateManyOrganizationInputEnvelope = {
    data: projectCreateManyOrganizationInput | projectCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type researchCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchCreateOrConnectWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>;
  };

  export type researchCreateManyOrganizationInputEnvelope = {
    data: researchCreateManyOrganizationInput | researchCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type eventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: eventWhereUniqueInput;
    update: XOR<eventUpdateWithoutOrganizationInput, eventUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<eventCreateWithoutOrganizationInput, eventUncheckedCreateWithoutOrganizationInput>;
  };

  export type eventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: eventWhereUniqueInput;
    data: XOR<eventUpdateWithoutOrganizationInput, eventUncheckedUpdateWithoutOrganizationInput>;
  };

  export type eventUpdateManyWithWhereWithoutOrganizationInput = {
    where: eventScalarWhereInput;
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type eventScalarWhereInput = {
    AND?: eventScalarWhereInput | eventScalarWhereInput[];
    OR?: eventScalarWhereInput[];
    NOT?: eventScalarWhereInput | eventScalarWhereInput[];
    id?: UuidFilter<'event'> | string;
    title?: StringFilter<'event'> | string;
    description?: StringNullableFilter<'event'> | string | null;
    event_date?: DateTimeNullableFilter<'event'> | Date | string | null;
    location?: StringNullableFilter<'event'> | string | null;
    user_id?: UuidFilter<'event'> | string;
    organization_id?: UuidFilter<'event'> | string;
    created_at?: DateTimeFilter<'event'> | Date | string;
    updated_at?: DateTimeFilter<'event'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type projectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutOrganizationInput, projectUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutOrganizationInput, projectUncheckedUpdateWithoutOrganizationInput>;
  };

  export type projectUpdateManyWithWhereWithoutOrganizationInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    id?: UuidFilter<'project'> | string;
    title?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    status?: StringNullableFilter<'project'> | string | null;
    user_id?: UuidFilter<'project'> | string;
    organization_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
  };

  export type researchUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    update: XOR<researchUpdateWithoutOrganizationInput, researchUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>;
  };

  export type researchUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    data: XOR<researchUpdateWithoutOrganizationInput, researchUncheckedUpdateWithoutOrganizationInput>;
  };

  export type researchUpdateManyWithWhereWithoutOrganizationInput = {
    where: researchScalarWhereInput;
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type researchScalarWhereInput = {
    AND?: researchScalarWhereInput | researchScalarWhereInput[];
    OR?: researchScalarWhereInput[];
    NOT?: researchScalarWhereInput | researchScalarWhereInput[];
    id?: UuidFilter<'research'> | string;
    title?: StringFilter<'research'> | string;
    abstract?: StringNullableFilter<'research'> | string | null;
    keywords?: StringNullableFilter<'research'> | string | null;
    publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
    user_id?: UuidFilter<'research'> | string;
    organization_id?: UuidFilter<'research'> | string;
    created_at?: DateTimeFilter<'research'> | Date | string;
    updated_at?: DateTimeFilter<'research'> | Date | string;
  };

  export type organizationCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutProjectInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
  };

  export type userCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
  };

  export type organizationUpsertWithoutProjectInput = {
    update: XOR<organizationUpdateWithoutProjectInput, organizationUncheckedUpdateWithoutProjectInput>;
    create: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutProjectInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutProjectInput, organizationUncheckedUpdateWithoutProjectInput>;
  };

  export type organizationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
  };

  export type userUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type researchCreateWithoutPublicationInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutPublicationInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateOrConnectWithoutPublicationInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
  };

  export type userCreateWithoutPublicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPublicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPublicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
  };

  export type researchUpsertWithoutPublicationInput = {
    update: XOR<researchUpdateWithoutPublicationInput, researchUncheckedUpdateWithoutPublicationInput>;
    create: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    where?: researchWhereInput;
  };

  export type researchUpdateToOneWithWhereWithoutPublicationInput = {
    where?: researchWhereInput;
    data: XOR<researchUpdateWithoutPublicationInput, researchUncheckedUpdateWithoutPublicationInput>;
  };

  export type researchUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutPublicationInput = {
    update: XOR<userUpdateWithoutPublicationInput, userUncheckedUpdateWithoutPublicationInput>;
    create: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPublicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPublicationInput, userUncheckedUpdateWithoutPublicationInput>;
  };

  export type userUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type publicationCreateWithoutResearchInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateWithoutResearchInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateOrConnectWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    create: XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>;
  };

  export type publicationCreateManyResearchInputEnvelope = {
    data: publicationCreateManyResearchInput | publicationCreateManyResearchInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutResearchInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutResearchInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutOrganizationInput;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutResearchInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
  };

  export type userCreateWithoutResearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutResearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event?: eventUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutResearchInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
  };

  export type publicationUpsertWithWhereUniqueWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    update: XOR<publicationUpdateWithoutResearchInput, publicationUncheckedUpdateWithoutResearchInput>;
    create: XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>;
  };

  export type publicationUpdateWithWhereUniqueWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    data: XOR<publicationUpdateWithoutResearchInput, publicationUncheckedUpdateWithoutResearchInput>;
  };

  export type publicationUpdateManyWithWhereWithoutResearchInput = {
    where: publicationScalarWhereInput;
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyWithoutResearchInput>;
  };

  export type publicationScalarWhereInput = {
    AND?: publicationScalarWhereInput | publicationScalarWhereInput[];
    OR?: publicationScalarWhereInput[];
    NOT?: publicationScalarWhereInput | publicationScalarWhereInput[];
    id?: UuidFilter<'publication'> | string;
    title?: StringFilter<'publication'> | string;
    abstract?: StringNullableFilter<'publication'> | string | null;
    publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
    publisher?: StringNullableFilter<'publication'> | string | null;
    user_id?: UuidFilter<'publication'> | string;
    research_id?: UuidFilter<'publication'> | string;
    created_at?: DateTimeFilter<'publication'> | Date | string;
    updated_at?: DateTimeFilter<'publication'> | Date | string;
  };

  export type organizationUpsertWithoutResearchInput = {
    update: XOR<organizationUpdateWithoutResearchInput, organizationUncheckedUpdateWithoutResearchInput>;
    create: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutResearchInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutResearchInput, organizationUncheckedUpdateWithoutResearchInput>;
  };

  export type organizationUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutOrganizationNestedInput;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutResearchInput = {
    update: XOR<userUpdateWithoutResearchInput, userUncheckedUpdateWithoutResearchInput>;
    create: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutResearchInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutResearchInput, userUncheckedUpdateWithoutResearchInput>;
  };

  export type userUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type eventCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEventInput;
  };

  export type eventUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventCreateOrConnectWithoutUserInput = {
    where: eventWhereUniqueInput;
    create: XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>;
  };

  export type eventCreateManyUserInputEnvelope = {
    data: eventCreateManyUserInput | eventCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutOrganizationInput;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type projectCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type publicationCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    research: researchCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateOrConnectWithoutUserInput = {
    where: publicationWhereUniqueInput;
    create: XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>;
  };

  export type publicationCreateManyUserInputEnvelope = {
    data: publicationCreateManyUserInput | publicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type researchCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    organization: organizationCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchCreateOrConnectWithoutUserInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>;
  };

  export type researchCreateManyUserInputEnvelope = {
    data: researchCreateManyUserInput | researchCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type eventUpsertWithWhereUniqueWithoutUserInput = {
    where: eventWhereUniqueInput;
    update: XOR<eventUpdateWithoutUserInput, eventUncheckedUpdateWithoutUserInput>;
    create: XOR<eventCreateWithoutUserInput, eventUncheckedCreateWithoutUserInput>;
  };

  export type eventUpdateWithWhereUniqueWithoutUserInput = {
    where: eventWhereUniqueInput;
    data: XOR<eventUpdateWithoutUserInput, eventUncheckedUpdateWithoutUserInput>;
  };

  export type eventUpdateManyWithWhereWithoutUserInput = {
    where: eventScalarWhereInput;
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
  };

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>;
  };

  export type publicationUpsertWithWhereUniqueWithoutUserInput = {
    where: publicationWhereUniqueInput;
    update: XOR<publicationUpdateWithoutUserInput, publicationUncheckedUpdateWithoutUserInput>;
    create: XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>;
  };

  export type publicationUpdateWithWhereUniqueWithoutUserInput = {
    where: publicationWhereUniqueInput;
    data: XOR<publicationUpdateWithoutUserInput, publicationUncheckedUpdateWithoutUserInput>;
  };

  export type publicationUpdateManyWithWhereWithoutUserInput = {
    where: publicationScalarWhereInput;
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type researchUpsertWithWhereUniqueWithoutUserInput = {
    where: researchWhereUniqueInput;
    update: XOR<researchUpdateWithoutUserInput, researchUncheckedUpdateWithoutUserInput>;
    create: XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>;
  };

  export type researchUpdateWithWhereUniqueWithoutUserInput = {
    where: researchWhereUniqueInput;
    data: XOR<researchUpdateWithoutUserInput, researchUncheckedUpdateWithoutUserInput>;
  };

  export type researchUpdateManyWithWhereWithoutUserInput = {
    where: researchScalarWhereInput;
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyWithoutUserInput>;
  };

  export type eventCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateManyOrganizationInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateManyResearchInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date?: Date | string | null;
    location?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type projectCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateManyUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    publication_date?: Date | string | null;
    publisher?: string | null;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateManyUserInput = {
    id?: string;
    title: string;
    abstract?: string | null;
    keywords?: string | null;
    publication_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutOrganizationNestedInput;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    research?: researchUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ResearchCountOutputTypeDefaultArgs instead
   */
  export type ResearchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ResearchCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use eventDefaultArgs instead
   */
  export type eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use projectDefaultArgs instead
   */
  export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    projectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use publicationDefaultArgs instead
   */
  export type publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    publicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use researchDefaultArgs instead
   */
  export type researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    researchDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
