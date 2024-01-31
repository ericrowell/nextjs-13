   npm install --save-dev typescript @types/react @types/node
   ```

2. Rename an existing `.js` or `.jsx` file to `.ts` or `.tsx`. For example, you can rename `index.js` to `index.tsx`. Next.js will automatically detect this change and start the TypeScript setup process for you.

3. A `tsconfig.json` file should be created in your project root directory. This file contains all the TypeScript compilation options.

In addition, you can add the `withTypescript` plugin to your Next.js configuration but this requires installation of `@zeit/next-typescript` which is now deprecated as Next.js supports TypeScript out of the box.

You can only ensure that Next.js handles .ts and .tsx files by following the steps mentioned above as these enable TypeScript compilation in Next.js.

Your existing `next.config.js` would remain the same - no changes in that file are needed to enable TypeScript in Next.js, it is more about the project configuration files and file extensions. In your given code, it would remain as is, no changes are needed:
