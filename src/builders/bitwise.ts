import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class BitwiseBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'bitwise',
			context: {},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'5 & 1',
					'5 | 1',
					'~ 5',
					'5 << 1',
					'5 ^ 1',
					'5 >> 1'
				]
			}]
		}
	}
}
