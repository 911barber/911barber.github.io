// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';

declare module "@mdx-js/react" {
  type MDXProps = {
    children: React.ReactNode;
    components: any;
  };
  export class MDXProvider extends React.Component<MDXProps> {}
}

declare module "@mdx-js/mdx";
declare module "@theme-ui/match-media";
declare module "*.svg";
declare module "gatsby-plugin-mdx";

type next<T> = (props: Partial<T>) => void;
