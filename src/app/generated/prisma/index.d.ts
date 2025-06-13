
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerPayment
 * 
 */
export type CustomerPayment = $Result.DefaultSelection<Prisma.$CustomerPaymentPayload>
/**
 * Model PaymentInstallment
 * 
 */
export type PaymentInstallment = $Result.DefaultSelection<Prisma.$PaymentInstallmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const CustomerType: {
  RETAILER: 'RETAILER',
  WHOLESALER: 'WHOLESALER',
  DISTRIBUTOR: 'DISTRIBUTOR',
  CONSUMER: 'CONSUMER'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_PAYMENT: 'MOBILE_PAYMENT',
  CREDIT: 'CREDIT'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PARTIAL: 'PARTIAL'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type CustomerType = $Enums.CustomerType

export const CustomerType: typeof $Enums.CustomerType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerPayment`: Exposes CRUD operations for the **CustomerPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerPayments
    * const customerPayments = await prisma.customerPayment.findMany()
    * ```
    */
  get customerPayment(): Prisma.CustomerPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentInstallment`: Exposes CRUD operations for the **PaymentInstallment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentInstallments
    * const paymentInstallments = await prisma.paymentInstallment.findMany()
    * ```
    */
  get paymentInstallment(): Prisma.PaymentInstallmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    CustomerPayment: 'CustomerPayment',
    PaymentInstallment: 'PaymentInstallment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "customerPayment" | "paymentInstallment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerPayment: {
        payload: Prisma.$CustomerPaymentPayload<ExtArgs>
        fields: Prisma.CustomerPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          findFirst: {
            args: Prisma.CustomerPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          findMany: {
            args: Prisma.CustomerPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>[]
          }
          create: {
            args: Prisma.CustomerPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          createMany: {
            args: Prisma.CustomerPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>[]
          }
          delete: {
            args: Prisma.CustomerPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          update: {
            args: Prisma.CustomerPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          deleteMany: {
            args: Prisma.CustomerPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>[]
          }
          upsert: {
            args: Prisma.CustomerPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          aggregate: {
            args: Prisma.CustomerPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerPayment>
          }
          groupBy: {
            args: Prisma.CustomerPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerPaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentInstallment: {
        payload: Prisma.$PaymentInstallmentPayload<ExtArgs>
        fields: Prisma.PaymentInstallmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentInstallmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentInstallmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          findFirst: {
            args: Prisma.PaymentInstallmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentInstallmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          findMany: {
            args: Prisma.PaymentInstallmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>[]
          }
          create: {
            args: Prisma.PaymentInstallmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          createMany: {
            args: Prisma.PaymentInstallmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentInstallmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>[]
          }
          delete: {
            args: Prisma.PaymentInstallmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          update: {
            args: Prisma.PaymentInstallmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentInstallmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentInstallmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentInstallmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentInstallmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInstallmentPayload>
          }
          aggregate: {
            args: Prisma.PaymentInstallmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentInstallment>
          }
          groupBy: {
            args: Prisma.PaymentInstallmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentInstallmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentInstallmentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentInstallmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    customerPayment?: CustomerPaymentOmit
    paymentInstallment?: PaymentInstallmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Customer: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | UserCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    CustomerPayment: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerPayment?: boolean | CustomerCountOutputTypeCountCustomerPaymentArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomerPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPaymentWhereInput
  }


  /**
   * Count Type CustomerPaymentCountOutputType
   */

  export type CustomerPaymentCountOutputType = {
    installments: number
  }

  export type CustomerPaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installments?: boolean | CustomerPaymentCountOutputTypeCountInstallmentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerPaymentCountOutputType without action
   */
  export type CustomerPaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPaymentCountOutputType
     */
    select?: CustomerPaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerPaymentCountOutputType without action
   */
  export type CustomerPaymentCountOutputTypeCountInstallmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentInstallmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    accessToken: string | null
    accessTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    accessToken: string | null
    accessTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    accessToken: number
    accessTokenExpiry: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    accessToken?: true
    accessTokenExpiry?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    accessToken?: true
    accessTokenExpiry?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    accessToken?: true
    accessTokenExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    role: $Enums.Role
    accessToken: string | null
    accessTokenExpiry: Date | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    createdAt?: boolean
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "accessToken" | "accessTokenExpiry" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      role: $Enums.Role
      accessToken: string | null
      accessTokenExpiry: Date | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends User$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly accessTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Customer
   */
  export type User$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    address: string | null
    cnic: string | null
    CustomerType: $Enums.CustomerType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    address: string | null
    cnic: string | null
    CustomerType: $Enums.CustomerType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    city: number
    address: number
    cnic: number
    CustomerType: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    address?: true
    cnic?: true
    CustomerType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    address?: true
    cnic?: true
    CustomerType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    address?: true
    cnic?: true
    CustomerType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    city: string | null
    address: string | null
    cnic: string | null
    CustomerType: $Enums.CustomerType
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    cnic?: boolean
    CustomerType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    CustomerPayment?: boolean | Customer$CustomerPaymentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    cnic?: boolean
    CustomerType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    cnic?: boolean
    CustomerType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    cnic?: boolean
    CustomerType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "city" | "address" | "cnic" | "CustomerType" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    CustomerPayment?: boolean | Customer$CustomerPaymentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      CustomerPayment: Prisma.$CustomerPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      city: string | null
      address: string | null
      cnic: string | null
      CustomerType: $Enums.CustomerType
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CustomerPayment<T extends Customer$CustomerPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Customer$CustomerPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly cnic: FieldRef<"Customer", 'String'>
    readonly CustomerType: FieldRef<"Customer", 'CustomerType'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly userId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.CustomerPayment
   */
  export type Customer$CustomerPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    where?: CustomerPaymentWhereInput
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    cursor?: CustomerPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerPayment
   */

  export type AggregateCustomerPayment = {
    _count: CustomerPaymentCountAggregateOutputType | null
    _avg: CustomerPaymentAvgAggregateOutputType | null
    _sum: CustomerPaymentSumAggregateOutputType | null
    _min: CustomerPaymentMinAggregateOutputType | null
    _max: CustomerPaymentMaxAggregateOutputType | null
  }

  export type CustomerPaymentAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    originalAmount: Decimal | null
    remainingAmount: Decimal | null
  }

  export type CustomerPaymentSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    originalAmount: Decimal | null
    remainingAmount: Decimal | null
  }

  export type CustomerPaymentMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    originalAmount: Decimal | null
    remainingAmount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionDate: Date | null
    dueDate: Date | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerPaymentMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    originalAmount: Decimal | null
    remainingAmount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionDate: Date | null
    dueDate: Date | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerPaymentCountAggregateOutputType = {
    id: number
    customerId: number
    originalAmount: number
    remainingAmount: number
    paymentMethod: number
    paymentStatus: number
    transactionDate: number
    dueDate: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerPaymentAvgAggregateInputType = {
    id?: true
    customerId?: true
    originalAmount?: true
    remainingAmount?: true
  }

  export type CustomerPaymentSumAggregateInputType = {
    id?: true
    customerId?: true
    originalAmount?: true
    remainingAmount?: true
  }

  export type CustomerPaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    originalAmount?: true
    remainingAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    transactionDate?: true
    dueDate?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerPaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    originalAmount?: true
    remainingAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    transactionDate?: true
    dueDate?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerPaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    originalAmount?: true
    remainingAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    transactionDate?: true
    dueDate?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPayment to aggregate.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerPayments
    **/
    _count?: true | CustomerPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerPaymentMaxAggregateInputType
  }

  export type GetCustomerPaymentAggregateType<T extends CustomerPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerPayment[P]>
      : GetScalarType<T[P], AggregateCustomerPayment[P]>
  }




  export type CustomerPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPaymentWhereInput
    orderBy?: CustomerPaymentOrderByWithAggregationInput | CustomerPaymentOrderByWithAggregationInput[]
    by: CustomerPaymentScalarFieldEnum[] | CustomerPaymentScalarFieldEnum
    having?: CustomerPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerPaymentCountAggregateInputType | true
    _avg?: CustomerPaymentAvgAggregateInputType
    _sum?: CustomerPaymentSumAggregateInputType
    _min?: CustomerPaymentMinAggregateInputType
    _max?: CustomerPaymentMaxAggregateInputType
  }

  export type CustomerPaymentGroupByOutputType = {
    id: number
    customerId: number
    originalAmount: Decimal
    remainingAmount: Decimal
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    transactionDate: Date
    dueDate: Date | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerPaymentCountAggregateOutputType | null
    _avg: CustomerPaymentAvgAggregateOutputType | null
    _sum: CustomerPaymentSumAggregateOutputType | null
    _min: CustomerPaymentMinAggregateOutputType | null
    _max: CustomerPaymentMaxAggregateOutputType | null
  }

  type GetCustomerPaymentGroupByPayload<T extends CustomerPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CustomerPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    originalAmount?: boolean
    remainingAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    transactionDate?: boolean
    dueDate?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installments?: boolean | CustomerPayment$installmentsArgs<ExtArgs>
    _count?: boolean | CustomerPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerPayment"]>

  export type CustomerPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    originalAmount?: boolean
    remainingAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    transactionDate?: boolean
    dueDate?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerPayment"]>

  export type CustomerPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    originalAmount?: boolean
    remainingAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    transactionDate?: boolean
    dueDate?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerPayment"]>

  export type CustomerPaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    originalAmount?: boolean
    remainingAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    transactionDate?: boolean
    dueDate?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "originalAmount" | "remainingAmount" | "paymentMethod" | "paymentStatus" | "transactionDate" | "dueDate" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["customerPayment"]>
  export type CustomerPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installments?: boolean | CustomerPayment$installmentsArgs<ExtArgs>
    _count?: boolean | CustomerPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerPayment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      installments: Prisma.$PaymentInstallmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      originalAmount: Prisma.Decimal
      remainingAmount: Prisma.Decimal
      paymentMethod: $Enums.PaymentMethod
      paymentStatus: $Enums.PaymentStatus
      transactionDate: Date
      dueDate: Date | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerPayment"]>
    composites: {}
  }

  type CustomerPaymentGetPayload<S extends boolean | null | undefined | CustomerPaymentDefaultArgs> = $Result.GetResult<Prisma.$CustomerPaymentPayload, S>

  type CustomerPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerPaymentCountAggregateInputType | true
    }

  export interface CustomerPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerPayment'], meta: { name: 'CustomerPayment' } }
    /**
     * Find zero or one CustomerPayment that matches the filter.
     * @param {CustomerPaymentFindUniqueArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerPaymentFindUniqueArgs>(args: SelectSubset<T, CustomerPaymentFindUniqueArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerPaymentFindUniqueOrThrowArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindFirstArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerPaymentFindFirstArgs>(args?: SelectSubset<T, CustomerPaymentFindFirstArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindFirstOrThrowArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerPayments
     * const customerPayments = await prisma.customerPayment.findMany()
     * 
     * // Get first 10 CustomerPayments
     * const customerPayments = await prisma.customerPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerPaymentWithIdOnly = await prisma.customerPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerPaymentFindManyArgs>(args?: SelectSubset<T, CustomerPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerPayment.
     * @param {CustomerPaymentCreateArgs} args - Arguments to create a CustomerPayment.
     * @example
     * // Create one CustomerPayment
     * const CustomerPayment = await prisma.customerPayment.create({
     *   data: {
     *     // ... data to create a CustomerPayment
     *   }
     * })
     * 
     */
    create<T extends CustomerPaymentCreateArgs>(args: SelectSubset<T, CustomerPaymentCreateArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerPayments.
     * @param {CustomerPaymentCreateManyArgs} args - Arguments to create many CustomerPayments.
     * @example
     * // Create many CustomerPayments
     * const customerPayment = await prisma.customerPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerPaymentCreateManyArgs>(args?: SelectSubset<T, CustomerPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerPayments and returns the data saved in the database.
     * @param {CustomerPaymentCreateManyAndReturnArgs} args - Arguments to create many CustomerPayments.
     * @example
     * // Create many CustomerPayments
     * const customerPayment = await prisma.customerPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerPayments and only return the `id`
     * const customerPaymentWithIdOnly = await prisma.customerPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerPayment.
     * @param {CustomerPaymentDeleteArgs} args - Arguments to delete one CustomerPayment.
     * @example
     * // Delete one CustomerPayment
     * const CustomerPayment = await prisma.customerPayment.delete({
     *   where: {
     *     // ... filter to delete one CustomerPayment
     *   }
     * })
     * 
     */
    delete<T extends CustomerPaymentDeleteArgs>(args: SelectSubset<T, CustomerPaymentDeleteArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerPayment.
     * @param {CustomerPaymentUpdateArgs} args - Arguments to update one CustomerPayment.
     * @example
     * // Update one CustomerPayment
     * const customerPayment = await prisma.customerPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerPaymentUpdateArgs>(args: SelectSubset<T, CustomerPaymentUpdateArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerPayments.
     * @param {CustomerPaymentDeleteManyArgs} args - Arguments to filter CustomerPayments to delete.
     * @example
     * // Delete a few CustomerPayments
     * const { count } = await prisma.customerPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerPaymentDeleteManyArgs>(args?: SelectSubset<T, CustomerPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerPayments
     * const customerPayment = await prisma.customerPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerPaymentUpdateManyArgs>(args: SelectSubset<T, CustomerPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerPayments and returns the data updated in the database.
     * @param {CustomerPaymentUpdateManyAndReturnArgs} args - Arguments to update many CustomerPayments.
     * @example
     * // Update many CustomerPayments
     * const customerPayment = await prisma.customerPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerPayments and only return the `id`
     * const customerPaymentWithIdOnly = await prisma.customerPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerPayment.
     * @param {CustomerPaymentUpsertArgs} args - Arguments to update or create a CustomerPayment.
     * @example
     * // Update or create a CustomerPayment
     * const customerPayment = await prisma.customerPayment.upsert({
     *   create: {
     *     // ... data to create a CustomerPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerPayment we want to update
     *   }
     * })
     */
    upsert<T extends CustomerPaymentUpsertArgs>(args: SelectSubset<T, CustomerPaymentUpsertArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentCountArgs} args - Arguments to filter CustomerPayments to count.
     * @example
     * // Count the number of CustomerPayments
     * const count = await prisma.customerPayment.count({
     *   where: {
     *     // ... the filter for the CustomerPayments we want to count
     *   }
     * })
    **/
    count<T extends CustomerPaymentCountArgs>(
      args?: Subset<T, CustomerPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerPaymentAggregateArgs>(args: Subset<T, CustomerPaymentAggregateArgs>): Prisma.PrismaPromise<GetCustomerPaymentAggregateType<T>>

    /**
     * Group by CustomerPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentGroupByArgs} args - Group by arguments.
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
      T extends CustomerPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CustomerPaymentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerPayment model
   */
  readonly fields: CustomerPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installments<T extends CustomerPayment$installmentsArgs<ExtArgs> = {}>(args?: Subset<T, CustomerPayment$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerPayment model
   */
  interface CustomerPaymentFieldRefs {
    readonly id: FieldRef<"CustomerPayment", 'Int'>
    readonly customerId: FieldRef<"CustomerPayment", 'Int'>
    readonly originalAmount: FieldRef<"CustomerPayment", 'Decimal'>
    readonly remainingAmount: FieldRef<"CustomerPayment", 'Decimal'>
    readonly paymentMethod: FieldRef<"CustomerPayment", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"CustomerPayment", 'PaymentStatus'>
    readonly transactionDate: FieldRef<"CustomerPayment", 'DateTime'>
    readonly dueDate: FieldRef<"CustomerPayment", 'DateTime'>
    readonly remarks: FieldRef<"CustomerPayment", 'String'>
    readonly createdAt: FieldRef<"CustomerPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerPayment findUnique
   */
  export type CustomerPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment findUniqueOrThrow
   */
  export type CustomerPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment findFirst
   */
  export type CustomerPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPayments.
     */
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment findFirstOrThrow
   */
  export type CustomerPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPayments.
     */
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment findMany
   */
  export type CustomerPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayments to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment create
   */
  export type CustomerPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerPayment.
     */
    data: XOR<CustomerPaymentCreateInput, CustomerPaymentUncheckedCreateInput>
  }

  /**
   * CustomerPayment createMany
   */
  export type CustomerPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerPayments.
     */
    data: CustomerPaymentCreateManyInput | CustomerPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerPayment createManyAndReturn
   */
  export type CustomerPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerPayments.
     */
    data: CustomerPaymentCreateManyInput | CustomerPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerPayment update
   */
  export type CustomerPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerPayment.
     */
    data: XOR<CustomerPaymentUpdateInput, CustomerPaymentUncheckedUpdateInput>
    /**
     * Choose, which CustomerPayment to update.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment updateMany
   */
  export type CustomerPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerPayments.
     */
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CustomerPayments to update
     */
    where?: CustomerPaymentWhereInput
    /**
     * Limit how many CustomerPayments to update.
     */
    limit?: number
  }

  /**
   * CustomerPayment updateManyAndReturn
   */
  export type CustomerPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * The data used to update CustomerPayments.
     */
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CustomerPayments to update
     */
    where?: CustomerPaymentWhereInput
    /**
     * Limit how many CustomerPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerPayment upsert
   */
  export type CustomerPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerPayment to update in case it exists.
     */
    where: CustomerPaymentWhereUniqueInput
    /**
     * In case the CustomerPayment found by the `where` argument doesn't exist, create a new CustomerPayment with this data.
     */
    create: XOR<CustomerPaymentCreateInput, CustomerPaymentUncheckedCreateInput>
    /**
     * In case the CustomerPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerPaymentUpdateInput, CustomerPaymentUncheckedUpdateInput>
  }

  /**
   * CustomerPayment delete
   */
  export type CustomerPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter which CustomerPayment to delete.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment deleteMany
   */
  export type CustomerPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPayments to delete
     */
    where?: CustomerPaymentWhereInput
    /**
     * Limit how many CustomerPayments to delete.
     */
    limit?: number
  }

  /**
   * CustomerPayment.installments
   */
  export type CustomerPayment$installmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    where?: PaymentInstallmentWhereInput
    orderBy?: PaymentInstallmentOrderByWithRelationInput | PaymentInstallmentOrderByWithRelationInput[]
    cursor?: PaymentInstallmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentInstallmentScalarFieldEnum | PaymentInstallmentScalarFieldEnum[]
  }

  /**
   * CustomerPayment without action
   */
  export type CustomerPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerPayment
     */
    omit?: CustomerPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentInstallment
   */

  export type AggregatePaymentInstallment = {
    _count: PaymentInstallmentCountAggregateOutputType | null
    _avg: PaymentInstallmentAvgAggregateOutputType | null
    _sum: PaymentInstallmentSumAggregateOutputType | null
    _min: PaymentInstallmentMinAggregateOutputType | null
    _max: PaymentInstallmentMaxAggregateOutputType | null
  }

  export type PaymentInstallmentAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: Decimal | null
  }

  export type PaymentInstallmentSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: Decimal | null
  }

  export type PaymentInstallmentMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: Decimal | null
    transactionDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentInstallmentMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: Decimal | null
    transactionDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentInstallmentCountAggregateOutputType = {
    id: number
    paymentId: number
    amount: number
    transactionDate: number
    paymentMethod: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentInstallmentAvgAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
  }

  export type PaymentInstallmentSumAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
  }

  export type PaymentInstallmentMinAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    transactionDate?: true
    paymentMethod?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentInstallmentMaxAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    transactionDate?: true
    paymentMethod?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentInstallmentCountAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    transactionDate?: true
    paymentMethod?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentInstallmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInstallment to aggregate.
     */
    where?: PaymentInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInstallments to fetch.
     */
    orderBy?: PaymentInstallmentOrderByWithRelationInput | PaymentInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentInstallments
    **/
    _count?: true | PaymentInstallmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentInstallmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentInstallmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentInstallmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentInstallmentMaxAggregateInputType
  }

  export type GetPaymentInstallmentAggregateType<T extends PaymentInstallmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentInstallment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentInstallment[P]>
      : GetScalarType<T[P], AggregatePaymentInstallment[P]>
  }




  export type PaymentInstallmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentInstallmentWhereInput
    orderBy?: PaymentInstallmentOrderByWithAggregationInput | PaymentInstallmentOrderByWithAggregationInput[]
    by: PaymentInstallmentScalarFieldEnum[] | PaymentInstallmentScalarFieldEnum
    having?: PaymentInstallmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentInstallmentCountAggregateInputType | true
    _avg?: PaymentInstallmentAvgAggregateInputType
    _sum?: PaymentInstallmentSumAggregateInputType
    _min?: PaymentInstallmentMinAggregateInputType
    _max?: PaymentInstallmentMaxAggregateInputType
  }

  export type PaymentInstallmentGroupByOutputType = {
    id: number
    paymentId: number
    amount: Decimal
    transactionDate: Date
    paymentMethod: $Enums.PaymentMethod
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentInstallmentCountAggregateOutputType | null
    _avg: PaymentInstallmentAvgAggregateOutputType | null
    _sum: PaymentInstallmentSumAggregateOutputType | null
    _min: PaymentInstallmentMinAggregateOutputType | null
    _max: PaymentInstallmentMaxAggregateOutputType | null
  }

  type GetPaymentInstallmentGroupByPayload<T extends PaymentInstallmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentInstallmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentInstallmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentInstallmentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentInstallmentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentInstallmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    transactionDate?: boolean
    paymentMethod?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInstallment"]>

  export type PaymentInstallmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    transactionDate?: boolean
    paymentMethod?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInstallment"]>

  export type PaymentInstallmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    transactionDate?: boolean
    paymentMethod?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInstallment"]>

  export type PaymentInstallmentSelectScalar = {
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    transactionDate?: boolean
    paymentMethod?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInstallmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "amount" | "transactionDate" | "paymentMethod" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentInstallment"]>
  export type PaymentInstallmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }
  export type PaymentInstallmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }
  export type PaymentInstallmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | CustomerPaymentDefaultArgs<ExtArgs>
  }

  export type $PaymentInstallmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentInstallment"
    objects: {
      payment: Prisma.$CustomerPaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      amount: Prisma.Decimal
      transactionDate: Date
      paymentMethod: $Enums.PaymentMethod
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentInstallment"]>
    composites: {}
  }

  type PaymentInstallmentGetPayload<S extends boolean | null | undefined | PaymentInstallmentDefaultArgs> = $Result.GetResult<Prisma.$PaymentInstallmentPayload, S>

  type PaymentInstallmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentInstallmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentInstallmentCountAggregateInputType | true
    }

  export interface PaymentInstallmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentInstallment'], meta: { name: 'PaymentInstallment' } }
    /**
     * Find zero or one PaymentInstallment that matches the filter.
     * @param {PaymentInstallmentFindUniqueArgs} args - Arguments to find a PaymentInstallment
     * @example
     * // Get one PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentInstallmentFindUniqueArgs>(args: SelectSubset<T, PaymentInstallmentFindUniqueArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentInstallment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentInstallmentFindUniqueOrThrowArgs} args - Arguments to find a PaymentInstallment
     * @example
     * // Get one PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentInstallmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentInstallmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInstallment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentFindFirstArgs} args - Arguments to find a PaymentInstallment
     * @example
     * // Get one PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentInstallmentFindFirstArgs>(args?: SelectSubset<T, PaymentInstallmentFindFirstArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInstallment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentFindFirstOrThrowArgs} args - Arguments to find a PaymentInstallment
     * @example
     * // Get one PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentInstallmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentInstallmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentInstallments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentInstallments
     * const paymentInstallments = await prisma.paymentInstallment.findMany()
     * 
     * // Get first 10 PaymentInstallments
     * const paymentInstallments = await prisma.paymentInstallment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentInstallmentWithIdOnly = await prisma.paymentInstallment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentInstallmentFindManyArgs>(args?: SelectSubset<T, PaymentInstallmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentInstallment.
     * @param {PaymentInstallmentCreateArgs} args - Arguments to create a PaymentInstallment.
     * @example
     * // Create one PaymentInstallment
     * const PaymentInstallment = await prisma.paymentInstallment.create({
     *   data: {
     *     // ... data to create a PaymentInstallment
     *   }
     * })
     * 
     */
    create<T extends PaymentInstallmentCreateArgs>(args: SelectSubset<T, PaymentInstallmentCreateArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentInstallments.
     * @param {PaymentInstallmentCreateManyArgs} args - Arguments to create many PaymentInstallments.
     * @example
     * // Create many PaymentInstallments
     * const paymentInstallment = await prisma.paymentInstallment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentInstallmentCreateManyArgs>(args?: SelectSubset<T, PaymentInstallmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentInstallments and returns the data saved in the database.
     * @param {PaymentInstallmentCreateManyAndReturnArgs} args - Arguments to create many PaymentInstallments.
     * @example
     * // Create many PaymentInstallments
     * const paymentInstallment = await prisma.paymentInstallment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentInstallments and only return the `id`
     * const paymentInstallmentWithIdOnly = await prisma.paymentInstallment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentInstallmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentInstallmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentInstallment.
     * @param {PaymentInstallmentDeleteArgs} args - Arguments to delete one PaymentInstallment.
     * @example
     * // Delete one PaymentInstallment
     * const PaymentInstallment = await prisma.paymentInstallment.delete({
     *   where: {
     *     // ... filter to delete one PaymentInstallment
     *   }
     * })
     * 
     */
    delete<T extends PaymentInstallmentDeleteArgs>(args: SelectSubset<T, PaymentInstallmentDeleteArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentInstallment.
     * @param {PaymentInstallmentUpdateArgs} args - Arguments to update one PaymentInstallment.
     * @example
     * // Update one PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentInstallmentUpdateArgs>(args: SelectSubset<T, PaymentInstallmentUpdateArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentInstallments.
     * @param {PaymentInstallmentDeleteManyArgs} args - Arguments to filter PaymentInstallments to delete.
     * @example
     * // Delete a few PaymentInstallments
     * const { count } = await prisma.paymentInstallment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentInstallmentDeleteManyArgs>(args?: SelectSubset<T, PaymentInstallmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInstallments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentInstallments
     * const paymentInstallment = await prisma.paymentInstallment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentInstallmentUpdateManyArgs>(args: SelectSubset<T, PaymentInstallmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInstallments and returns the data updated in the database.
     * @param {PaymentInstallmentUpdateManyAndReturnArgs} args - Arguments to update many PaymentInstallments.
     * @example
     * // Update many PaymentInstallments
     * const paymentInstallment = await prisma.paymentInstallment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentInstallments and only return the `id`
     * const paymentInstallmentWithIdOnly = await prisma.paymentInstallment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentInstallmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentInstallmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentInstallment.
     * @param {PaymentInstallmentUpsertArgs} args - Arguments to update or create a PaymentInstallment.
     * @example
     * // Update or create a PaymentInstallment
     * const paymentInstallment = await prisma.paymentInstallment.upsert({
     *   create: {
     *     // ... data to create a PaymentInstallment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentInstallment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentInstallmentUpsertArgs>(args: SelectSubset<T, PaymentInstallmentUpsertArgs<ExtArgs>>): Prisma__PaymentInstallmentClient<$Result.GetResult<Prisma.$PaymentInstallmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentInstallments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentCountArgs} args - Arguments to filter PaymentInstallments to count.
     * @example
     * // Count the number of PaymentInstallments
     * const count = await prisma.paymentInstallment.count({
     *   where: {
     *     // ... the filter for the PaymentInstallments we want to count
     *   }
     * })
    **/
    count<T extends PaymentInstallmentCountArgs>(
      args?: Subset<T, PaymentInstallmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentInstallmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentInstallment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentInstallmentAggregateArgs>(args: Subset<T, PaymentInstallmentAggregateArgs>): Prisma.PrismaPromise<GetPaymentInstallmentAggregateType<T>>

    /**
     * Group by PaymentInstallment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInstallmentGroupByArgs} args - Group by arguments.
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
      T extends PaymentInstallmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentInstallmentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentInstallmentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentInstallmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentInstallmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentInstallment model
   */
  readonly fields: PaymentInstallmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentInstallment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentInstallmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends CustomerPaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerPaymentDefaultArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentInstallment model
   */
  interface PaymentInstallmentFieldRefs {
    readonly id: FieldRef<"PaymentInstallment", 'Int'>
    readonly paymentId: FieldRef<"PaymentInstallment", 'Int'>
    readonly amount: FieldRef<"PaymentInstallment", 'Decimal'>
    readonly transactionDate: FieldRef<"PaymentInstallment", 'DateTime'>
    readonly paymentMethod: FieldRef<"PaymentInstallment", 'PaymentMethod'>
    readonly remarks: FieldRef<"PaymentInstallment", 'String'>
    readonly createdAt: FieldRef<"PaymentInstallment", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentInstallment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentInstallment findUnique
   */
  export type PaymentInstallmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInstallment to fetch.
     */
    where: PaymentInstallmentWhereUniqueInput
  }

  /**
   * PaymentInstallment findUniqueOrThrow
   */
  export type PaymentInstallmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInstallment to fetch.
     */
    where: PaymentInstallmentWhereUniqueInput
  }

  /**
   * PaymentInstallment findFirst
   */
  export type PaymentInstallmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInstallment to fetch.
     */
    where?: PaymentInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInstallments to fetch.
     */
    orderBy?: PaymentInstallmentOrderByWithRelationInput | PaymentInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInstallments.
     */
    cursor?: PaymentInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInstallments.
     */
    distinct?: PaymentInstallmentScalarFieldEnum | PaymentInstallmentScalarFieldEnum[]
  }

  /**
   * PaymentInstallment findFirstOrThrow
   */
  export type PaymentInstallmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInstallment to fetch.
     */
    where?: PaymentInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInstallments to fetch.
     */
    orderBy?: PaymentInstallmentOrderByWithRelationInput | PaymentInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInstallments.
     */
    cursor?: PaymentInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInstallments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInstallments.
     */
    distinct?: PaymentInstallmentScalarFieldEnum | PaymentInstallmentScalarFieldEnum[]
  }

  /**
   * PaymentInstallment findMany
   */
  export type PaymentInstallmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInstallments to fetch.
     */
    where?: PaymentInstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInstallments to fetch.
     */
    orderBy?: PaymentInstallmentOrderByWithRelationInput | PaymentInstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentInstallments.
     */
    cursor?: PaymentInstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInstallments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInstallments.
     */
    skip?: number
    distinct?: PaymentInstallmentScalarFieldEnum | PaymentInstallmentScalarFieldEnum[]
  }

  /**
   * PaymentInstallment create
   */
  export type PaymentInstallmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentInstallment.
     */
    data: XOR<PaymentInstallmentCreateInput, PaymentInstallmentUncheckedCreateInput>
  }

  /**
   * PaymentInstallment createMany
   */
  export type PaymentInstallmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentInstallments.
     */
    data: PaymentInstallmentCreateManyInput | PaymentInstallmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentInstallment createManyAndReturn
   */
  export type PaymentInstallmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentInstallments.
     */
    data: PaymentInstallmentCreateManyInput | PaymentInstallmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInstallment update
   */
  export type PaymentInstallmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentInstallment.
     */
    data: XOR<PaymentInstallmentUpdateInput, PaymentInstallmentUncheckedUpdateInput>
    /**
     * Choose, which PaymentInstallment to update.
     */
    where: PaymentInstallmentWhereUniqueInput
  }

  /**
   * PaymentInstallment updateMany
   */
  export type PaymentInstallmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentInstallments.
     */
    data: XOR<PaymentInstallmentUpdateManyMutationInput, PaymentInstallmentUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInstallments to update
     */
    where?: PaymentInstallmentWhereInput
    /**
     * Limit how many PaymentInstallments to update.
     */
    limit?: number
  }

  /**
   * PaymentInstallment updateManyAndReturn
   */
  export type PaymentInstallmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * The data used to update PaymentInstallments.
     */
    data: XOR<PaymentInstallmentUpdateManyMutationInput, PaymentInstallmentUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInstallments to update
     */
    where?: PaymentInstallmentWhereInput
    /**
     * Limit how many PaymentInstallments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInstallment upsert
   */
  export type PaymentInstallmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentInstallment to update in case it exists.
     */
    where: PaymentInstallmentWhereUniqueInput
    /**
     * In case the PaymentInstallment found by the `where` argument doesn't exist, create a new PaymentInstallment with this data.
     */
    create: XOR<PaymentInstallmentCreateInput, PaymentInstallmentUncheckedCreateInput>
    /**
     * In case the PaymentInstallment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentInstallmentUpdateInput, PaymentInstallmentUncheckedUpdateInput>
  }

  /**
   * PaymentInstallment delete
   */
  export type PaymentInstallmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
    /**
     * Filter which PaymentInstallment to delete.
     */
    where: PaymentInstallmentWhereUniqueInput
  }

  /**
   * PaymentInstallment deleteMany
   */
  export type PaymentInstallmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInstallments to delete
     */
    where?: PaymentInstallmentWhereInput
    /**
     * Limit how many PaymentInstallments to delete.
     */
    limit?: number
  }

  /**
   * PaymentInstallment without action
   */
  export type PaymentInstallmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInstallment
     */
    select?: PaymentInstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInstallment
     */
    omit?: PaymentInstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInstallmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    accessToken: 'accessToken',
    accessTokenExpiry: 'accessTokenExpiry',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    city: 'city',
    address: 'address',
    cnic: 'cnic',
    CustomerType: 'CustomerType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerPaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    originalAmount: 'originalAmount',
    remainingAmount: 'remainingAmount',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    transactionDate: 'transactionDate',
    dueDate: 'dueDate',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerPaymentScalarFieldEnum = (typeof CustomerPaymentScalarFieldEnum)[keyof typeof CustomerPaymentScalarFieldEnum]


  export const PaymentInstallmentScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    amount: 'amount',
    transactionDate: 'transactionDate',
    paymentMethod: 'paymentMethod',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentInstallmentScalarFieldEnum = (typeof PaymentInstallmentScalarFieldEnum)[keyof typeof PaymentInstallmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CustomerType'
   */
  export type EnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType'>
    


  /**
   * Reference to a field of type 'CustomerType[]'
   */
  export type ListEnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accessToken?: StringNullableFilter<"User"> | string | null
    accessTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Customer?: CustomerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Customer?: CustomerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accessToken?: StringNullableFilter<"User"> | string | null
    accessTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Customer?: CustomerListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    accessTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    cnic?: StringNullableFilter<"Customer"> | string | null
    CustomerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    userId?: IntFilter<"Customer"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CustomerPayment?: CustomerPaymentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cnic?: SortOrderInput | SortOrder
    CustomerType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    CustomerPayment?: CustomerPaymentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    cnic?: StringNullableFilter<"Customer"> | string | null
    CustomerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    userId?: IntFilter<"Customer"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CustomerPayment?: CustomerPaymentListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cnic?: SortOrderInput | SortOrder
    CustomerType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    cnic?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    CustomerType?: EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    userId?: IntWithAggregatesFilter<"Customer"> | number
  }

  export type CustomerPaymentWhereInput = {
    AND?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    OR?: CustomerPaymentWhereInput[]
    NOT?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    id?: IntFilter<"CustomerPayment"> | number
    customerId?: IntFilter<"CustomerPayment"> | number
    originalAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"CustomerPayment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"CustomerPayment"> | $Enums.PaymentStatus
    transactionDate?: DateTimeFilter<"CustomerPayment"> | Date | string
    dueDate?: DateTimeNullableFilter<"CustomerPayment"> | Date | string | null
    remarks?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installments?: PaymentInstallmentListRelationFilter
  }

  export type CustomerPaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    transactionDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    installments?: PaymentInstallmentOrderByRelationAggregateInput
  }

  export type CustomerPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    OR?: CustomerPaymentWhereInput[]
    NOT?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    customerId?: IntFilter<"CustomerPayment"> | number
    originalAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"CustomerPayment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"CustomerPayment"> | $Enums.PaymentStatus
    transactionDate?: DateTimeFilter<"CustomerPayment"> | Date | string
    dueDate?: DateTimeNullableFilter<"CustomerPayment"> | Date | string | null
    remarks?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installments?: PaymentInstallmentListRelationFilter
  }, "id">

  export type CustomerPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    transactionDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerPaymentCountOrderByAggregateInput
    _avg?: CustomerPaymentAvgOrderByAggregateInput
    _max?: CustomerPaymentMaxOrderByAggregateInput
    _min?: CustomerPaymentMinOrderByAggregateInput
    _sum?: CustomerPaymentSumOrderByAggregateInput
  }

  export type CustomerPaymentScalarWhereWithAggregatesInput = {
    AND?: CustomerPaymentScalarWhereWithAggregatesInput | CustomerPaymentScalarWhereWithAggregatesInput[]
    OR?: CustomerPaymentScalarWhereWithAggregatesInput[]
    NOT?: CustomerPaymentScalarWhereWithAggregatesInput | CustomerPaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerPayment"> | number
    customerId?: IntWithAggregatesFilter<"CustomerPayment"> | number
    originalAmount?: DecimalWithAggregatesFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalWithAggregatesFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"CustomerPayment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"CustomerPayment"> | $Enums.PaymentStatus
    transactionDate?: DateTimeWithAggregatesFilter<"CustomerPayment"> | Date | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"CustomerPayment"> | Date | string | null
    remarks?: StringNullableWithAggregatesFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerPayment"> | Date | string
  }

  export type PaymentInstallmentWhereInput = {
    AND?: PaymentInstallmentWhereInput | PaymentInstallmentWhereInput[]
    OR?: PaymentInstallmentWhereInput[]
    NOT?: PaymentInstallmentWhereInput | PaymentInstallmentWhereInput[]
    id?: IntFilter<"PaymentInstallment"> | number
    paymentId?: IntFilter<"PaymentInstallment"> | number
    amount?: DecimalFilter<"PaymentInstallment"> | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFilter<"PaymentInstallment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"PaymentInstallment"> | $Enums.PaymentMethod
    remarks?: StringNullableFilter<"PaymentInstallment"> | string | null
    createdAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
    payment?: XOR<CustomerPaymentScalarRelationFilter, CustomerPaymentWhereInput>
  }

  export type PaymentInstallmentOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    paymentMethod?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: CustomerPaymentOrderByWithRelationInput
  }

  export type PaymentInstallmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentInstallmentWhereInput | PaymentInstallmentWhereInput[]
    OR?: PaymentInstallmentWhereInput[]
    NOT?: PaymentInstallmentWhereInput | PaymentInstallmentWhereInput[]
    paymentId?: IntFilter<"PaymentInstallment"> | number
    amount?: DecimalFilter<"PaymentInstallment"> | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFilter<"PaymentInstallment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"PaymentInstallment"> | $Enums.PaymentMethod
    remarks?: StringNullableFilter<"PaymentInstallment"> | string | null
    createdAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
    payment?: XOR<CustomerPaymentScalarRelationFilter, CustomerPaymentWhereInput>
  }, "id">

  export type PaymentInstallmentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    paymentMethod?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentInstallmentCountOrderByAggregateInput
    _avg?: PaymentInstallmentAvgOrderByAggregateInput
    _max?: PaymentInstallmentMaxOrderByAggregateInput
    _min?: PaymentInstallmentMinOrderByAggregateInput
    _sum?: PaymentInstallmentSumOrderByAggregateInput
  }

  export type PaymentInstallmentScalarWhereWithAggregatesInput = {
    AND?: PaymentInstallmentScalarWhereWithAggregatesInput | PaymentInstallmentScalarWhereWithAggregatesInput[]
    OR?: PaymentInstallmentScalarWhereWithAggregatesInput[]
    NOT?: PaymentInstallmentScalarWhereWithAggregatesInput | PaymentInstallmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentInstallment"> | number
    paymentId?: IntWithAggregatesFilter<"PaymentInstallment"> | number
    amount?: DecimalWithAggregatesFilter<"PaymentInstallment"> | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeWithAggregatesFilter<"PaymentInstallment"> | Date | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"PaymentInstallment"> | $Enums.PaymentMethod
    remarks?: StringNullableWithAggregatesFilter<"PaymentInstallment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentInstallment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentInstallment"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    createdAt?: Date | string
    Customer?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    createdAt?: Date | string
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    CustomerPayment?: CustomerPaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    CustomerPayment?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    CustomerPayment?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    CustomerPayment?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerPaymentCreateInput = {
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerPaymentInput
    installments?: PaymentInstallmentCreateNestedManyWithoutPaymentInput
  }

  export type CustomerPaymentUncheckedCreateInput = {
    id?: number
    customerId: number
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    installments?: PaymentInstallmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type CustomerPaymentUpdateInput = {
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerPaymentNestedInput
    installments?: PaymentInstallmentUpdateManyWithoutPaymentNestedInput
  }

  export type CustomerPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: PaymentInstallmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type CustomerPaymentCreateManyInput = {
    id?: number
    customerId: number
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPaymentUpdateManyMutationInput = {
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: CustomerPaymentCreateNestedOneWithoutInstallmentsInput
  }

  export type PaymentInstallmentUncheckedCreateInput = {
    id?: number
    paymentId: number
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentInstallmentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CustomerPaymentUpdateOneRequiredWithoutInstallmentsNestedInput
  }

  export type PaymentInstallmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentCreateManyInput = {
    id?: number
    paymentId: number
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentInstallmentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CustomerPaymentListRelationFilter = {
    every?: CustomerPaymentWhereInput
    some?: CustomerPaymentWhereInput
    none?: CustomerPaymentWhereInput
  }

  export type CustomerPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cnic?: SortOrder
    CustomerType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cnic?: SortOrder
    CustomerType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cnic?: SortOrder
    CustomerType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PaymentInstallmentListRelationFilter = {
    every?: PaymentInstallmentWhereInput
    some?: PaymentInstallmentWhereInput
    none?: PaymentInstallmentWhereInput
  }

  export type PaymentInstallmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    transactionDate?: SortOrder
    dueDate?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type CustomerPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    transactionDate?: SortOrder
    dueDate?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    transactionDate?: SortOrder
    dueDate?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    originalAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CustomerPaymentScalarRelationFilter = {
    is?: CustomerPaymentWhereInput
    isNot?: CustomerPaymentWhereInput
  }

  export type PaymentInstallmentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    paymentMethod?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentInstallmentAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentInstallmentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    paymentMethod?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentInstallmentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    paymentMethod?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentInstallmentSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerPaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutCustomerInput | CustomerPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutCustomerInput | CustomerPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCustomerPaymentInput = {
    create?: XOR<CustomerCreateWithoutCustomerPaymentInput, CustomerUncheckedCreateWithoutCustomerPaymentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerPaymentInput
    connect?: CustomerWhereUniqueInput
  }

  export type PaymentInstallmentCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput> | PaymentInstallmentCreateWithoutPaymentInput[] | PaymentInstallmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentInstallmentCreateOrConnectWithoutPaymentInput | PaymentInstallmentCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentInstallmentCreateManyPaymentInputEnvelope
    connect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
  }

  export type PaymentInstallmentUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput> | PaymentInstallmentCreateWithoutPaymentInput[] | PaymentInstallmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentInstallmentCreateOrConnectWithoutPaymentInput | PaymentInstallmentCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentInstallmentCreateManyPaymentInputEnvelope
    connect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CustomerUpdateOneRequiredWithoutCustomerPaymentNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomerPaymentInput, CustomerUncheckedCreateWithoutCustomerPaymentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerPaymentInput
    upsert?: CustomerUpsertWithoutCustomerPaymentInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomerPaymentInput, CustomerUpdateWithoutCustomerPaymentInput>, CustomerUncheckedUpdateWithoutCustomerPaymentInput>
  }

  export type PaymentInstallmentUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput> | PaymentInstallmentCreateWithoutPaymentInput[] | PaymentInstallmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentInstallmentCreateOrConnectWithoutPaymentInput | PaymentInstallmentCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentInstallmentUpsertWithWhereUniqueWithoutPaymentInput | PaymentInstallmentUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentInstallmentCreateManyPaymentInputEnvelope
    set?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    disconnect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    delete?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    connect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    update?: PaymentInstallmentUpdateWithWhereUniqueWithoutPaymentInput | PaymentInstallmentUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentInstallmentUpdateManyWithWhereWithoutPaymentInput | PaymentInstallmentUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentInstallmentScalarWhereInput | PaymentInstallmentScalarWhereInput[]
  }

  export type PaymentInstallmentUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput> | PaymentInstallmentCreateWithoutPaymentInput[] | PaymentInstallmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentInstallmentCreateOrConnectWithoutPaymentInput | PaymentInstallmentCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentInstallmentUpsertWithWhereUniqueWithoutPaymentInput | PaymentInstallmentUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentInstallmentCreateManyPaymentInputEnvelope
    set?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    disconnect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    delete?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    connect?: PaymentInstallmentWhereUniqueInput | PaymentInstallmentWhereUniqueInput[]
    update?: PaymentInstallmentUpdateWithWhereUniqueWithoutPaymentInput | PaymentInstallmentUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentInstallmentUpdateManyWithWhereWithoutPaymentInput | PaymentInstallmentUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentInstallmentScalarWhereInput | PaymentInstallmentScalarWhereInput[]
  }

  export type CustomerPaymentCreateNestedOneWithoutInstallmentsInput = {
    create?: XOR<CustomerPaymentCreateWithoutInstallmentsInput, CustomerPaymentUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutInstallmentsInput
    connect?: CustomerPaymentWhereUniqueInput
  }

  export type CustomerPaymentUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutInstallmentsInput, CustomerPaymentUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutInstallmentsInput
    upsert?: CustomerPaymentUpsertWithoutInstallmentsInput
    connect?: CustomerPaymentWhereUniqueInput
    update?: XOR<XOR<CustomerPaymentUpdateToOneWithWhereWithoutInstallmentsInput, CustomerPaymentUpdateWithoutInstallmentsInput>, CustomerPaymentUncheckedUpdateWithoutInstallmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutUserInput = {
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerPayment?: CustomerPaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerPayment?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    cnic?: StringNullableFilter<"Customer"> | string | null
    CustomerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    userId?: IntFilter<"Customer"> | number
  }

  export type UserCreateWithoutCustomerInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPaymentCreateWithoutCustomerInput = {
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    installments?: PaymentInstallmentCreateNestedManyWithoutPaymentInput
  }

  export type CustomerPaymentUncheckedCreateWithoutCustomerInput = {
    id?: number
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    installments?: PaymentInstallmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type CustomerPaymentCreateOrConnectWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    create: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPaymentCreateManyCustomerInputEnvelope = {
    data: CustomerPaymentCreateManyCustomerInput | CustomerPaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    update: XOR<CustomerPaymentUpdateWithoutCustomerInput, CustomerPaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    data: XOR<CustomerPaymentUpdateWithoutCustomerInput, CustomerPaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerPaymentScalarWhereInput
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerPaymentScalarWhereInput = {
    AND?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
    OR?: CustomerPaymentScalarWhereInput[]
    NOT?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
    id?: IntFilter<"CustomerPayment"> | number
    customerId?: IntFilter<"CustomerPayment"> | number
    originalAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFilter<"CustomerPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"CustomerPayment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"CustomerPayment"> | $Enums.PaymentStatus
    transactionDate?: DateTimeFilter<"CustomerPayment"> | Date | string
    dueDate?: DateTimeNullableFilter<"CustomerPayment"> | Date | string | null
    remarks?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPayment"> | Date | string
  }

  export type CustomerCreateWithoutCustomerPaymentInput = {
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomerPaymentInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CustomerCreateOrConnectWithoutCustomerPaymentInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomerPaymentInput, CustomerUncheckedCreateWithoutCustomerPaymentInput>
  }

  export type PaymentInstallmentCreateWithoutPaymentInput = {
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentInstallmentUncheckedCreateWithoutPaymentInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentInstallmentCreateOrConnectWithoutPaymentInput = {
    where: PaymentInstallmentWhereUniqueInput
    create: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentInstallmentCreateManyPaymentInputEnvelope = {
    data: PaymentInstallmentCreateManyPaymentInput | PaymentInstallmentCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutCustomerPaymentInput = {
    update: XOR<CustomerUpdateWithoutCustomerPaymentInput, CustomerUncheckedUpdateWithoutCustomerPaymentInput>
    create: XOR<CustomerCreateWithoutCustomerPaymentInput, CustomerUncheckedCreateWithoutCustomerPaymentInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomerPaymentInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomerPaymentInput, CustomerUncheckedUpdateWithoutCustomerPaymentInput>
  }

  export type CustomerUpdateWithoutCustomerPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomerPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentInstallmentUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentInstallmentWhereUniqueInput
    update: XOR<PaymentInstallmentUpdateWithoutPaymentInput, PaymentInstallmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentInstallmentCreateWithoutPaymentInput, PaymentInstallmentUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentInstallmentUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentInstallmentWhereUniqueInput
    data: XOR<PaymentInstallmentUpdateWithoutPaymentInput, PaymentInstallmentUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentInstallmentUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentInstallmentScalarWhereInput
    data: XOR<PaymentInstallmentUpdateManyMutationInput, PaymentInstallmentUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentInstallmentScalarWhereInput = {
    AND?: PaymentInstallmentScalarWhereInput | PaymentInstallmentScalarWhereInput[]
    OR?: PaymentInstallmentScalarWhereInput[]
    NOT?: PaymentInstallmentScalarWhereInput | PaymentInstallmentScalarWhereInput[]
    id?: IntFilter<"PaymentInstallment"> | number
    paymentId?: IntFilter<"PaymentInstallment"> | number
    amount?: DecimalFilter<"PaymentInstallment"> | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFilter<"PaymentInstallment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"PaymentInstallment"> | $Enums.PaymentMethod
    remarks?: StringNullableFilter<"PaymentInstallment"> | string | null
    createdAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentInstallment"> | Date | string
  }

  export type CustomerPaymentCreateWithoutInstallmentsInput = {
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerPaymentInput
  }

  export type CustomerPaymentUncheckedCreateWithoutInstallmentsInput = {
    id?: number
    customerId: number
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPaymentCreateOrConnectWithoutInstallmentsInput = {
    where: CustomerPaymentWhereUniqueInput
    create: XOR<CustomerPaymentCreateWithoutInstallmentsInput, CustomerPaymentUncheckedCreateWithoutInstallmentsInput>
  }

  export type CustomerPaymentUpsertWithoutInstallmentsInput = {
    update: XOR<CustomerPaymentUpdateWithoutInstallmentsInput, CustomerPaymentUncheckedUpdateWithoutInstallmentsInput>
    create: XOR<CustomerPaymentCreateWithoutInstallmentsInput, CustomerPaymentUncheckedCreateWithoutInstallmentsInput>
    where?: CustomerPaymentWhereInput
  }

  export type CustomerPaymentUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: CustomerPaymentWhereInput
    data: XOR<CustomerPaymentUpdateWithoutInstallmentsInput, CustomerPaymentUncheckedUpdateWithoutInstallmentsInput>
  }

  export type CustomerPaymentUpdateWithoutInstallmentsInput = {
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerPaymentNestedInput
  }

  export type CustomerPaymentUncheckedUpdateWithoutInstallmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyUserInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    city?: string | null
    address?: string | null
    cnic?: string | null
    CustomerType?: $Enums.CustomerType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerPayment?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerPayment?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cnic?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentCreateManyCustomerInput = {
    id?: number
    originalAmount: Decimal | DecimalJsLike | number | string
    remainingAmount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    transactionDate?: Date | string
    dueDate?: Date | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPaymentUpdateWithoutCustomerInput = {
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: PaymentInstallmentUpdateManyWithoutPaymentNestedInput
  }

  export type CustomerPaymentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: PaymentInstallmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentCreateManyPaymentInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    transactionDate?: Date | string
    paymentMethod?: $Enums.PaymentMethod
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentInstallmentUpdateWithoutPaymentInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentInstallmentUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}