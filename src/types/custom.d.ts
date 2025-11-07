// Allow importing .jsx and .js files when using TypeScript in this project
declare module "*.jsx" {
  import React from "react";
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module "*.js" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}
