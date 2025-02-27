import type { Equal, Expect } from "@type-challenges/utils";
type TupleToUnion<T extends any[]> = T extends Array<infer item> ? item : never;
type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
