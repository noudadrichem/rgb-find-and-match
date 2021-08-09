import typescript from "rollup-plugin-typescript2";
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [{
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    json(),
    typescript({
      typescript: require("typescript"),
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
      main: false
    })

  ],
};
