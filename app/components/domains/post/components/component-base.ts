export type ComponentBase<Variant extends string = never> = {
  children: string;
} & { [K in Variant]?: boolean };
