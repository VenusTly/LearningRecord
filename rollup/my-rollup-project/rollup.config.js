//rollup.config.js
// 我们用 --config 或 -c 来使用配置文件：
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
export default {
	input:'src/main.js',
	output:{
		file:'bundle.js',
		format: 'cjs'//node 中使用格式
	},
	plugins:[json(),
	  resolve(),
	  babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      })
	]
}