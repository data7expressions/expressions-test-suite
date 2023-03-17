import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class NumericBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'numeric',
			context: { a: '1', b: 2, c: { a: 4, b: 5 } },
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'c.b',
					'abs(-9)',
					'acos(0.434)',
					'asin(0.434)',
					'atan(2)',
					'atan2(90, 15)',
					'ceil(2)',
					'cos(2)',
					'cosh(2)',
					'exp(7)',
					'floor(7)',
					'ln(7)',
					'log(7,10)',
					'log10(7)',
					'remainder(7,2)',
					'round(7.984938,2)',
					'sign(-7)',
					'sin(7)',
					'sinh(7)',
					'tan(7)',
					'tanh(7)',
					'trunc(7.984938,2)'
				]
			}]
		}
	}
}
