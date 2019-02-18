#!/usr/bin/env node
// 计算器脚本
var argv = require('yargs')
.alias('r', 'reduce')			//约分
.argv;

// console.log('argv', argv);
// console.log('argv._', argv._);

/**
 * 约分
 */
let reduce = (numerator, denominator)=>{
	numerator = Number(numerator);
	denominator = Number(denominator);

	if(isNaN(numerator) || isNaN(denominator)){
		return;
	}

	numerator = Math.round(numerator);
	denominator = Math.round(denominator);

	let u = numerator;
	let v = denominator;
    let temp;

	if(u == 0)
	{
		return;
	}
	else if(u < 0)
	{
		u = -u;
	}

	while(v != 0)
	{
		temp = u % v;
		u = v;
		v = temp;
	}

	numerator /= u;
	denominator /= u;
	console.log(numerator, denominator);
}

if(argv.reduce){
	reduce(argv.reduce, argv._[0]);
}