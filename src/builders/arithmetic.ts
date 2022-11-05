import { expressions  as exp } from 'js-expressions'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class ArithmeticBuildTest implements IBuildTest {

	public build(): TestSuiteRequest {
		return {
			name: 'arithmetic',
			context: { a: '1', b: 2, c: { a: 4, b: 5 } },
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'3+2-1',
					'3*4-1',
					'1-2-5',
					'(2+3)*2',
					'2*(3+2)',
					'1+2*3*4',
					'(1+(2**3)*4',
					'1+2**(3*4)',
					'(a*b)+(2*a+2*b)',
					'2**b+a'
				]
			}]
		}
	}
}
