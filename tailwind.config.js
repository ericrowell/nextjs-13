{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "preserve",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "removeComments": false,
    "preserveConstEnums": true,
    "sourceMap": true,
    "isolatedModules": true,
    "declaration": true,
    "outDir": "dist",
    "baseUrl": "./",
    "paths": {
      "*": ["types/*"],
      "~/*": ["./*"],
      "@/*": ["src/*"],
      "@es/*": ["src/*"]
    },
    "lib": [
      "es6",
      "dom"
    ],
    "typeRoots": [
      "./node_modules/@types",
      "./types"
    ],
    "types": [
      "node"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.d.ts",
    "types"
  ],
  "exclude": [
    "dist",
    "node_modules",
    "**/*.spec.ts"
  ]
}