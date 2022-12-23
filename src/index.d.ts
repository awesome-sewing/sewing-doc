declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'sewing-doc' {
  import type { DefineComponent, VueElementConstructor } from 'vue';
  const SewingDocElement: VueElementConstructor<{
    id: string;
    prefix?: string;
  }>;
  const SewingDoc: DefineComponent<
    {
      id: string;
      prefix?: string;
    },
    {},
    any
  >;
  export { SewingDocElement, SewingDoc };
}
