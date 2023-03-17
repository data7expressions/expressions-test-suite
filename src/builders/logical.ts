import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class LogicalBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'logical',
			context: { a: '1', b: 2, c: { a: 4, b: 5 }, d: 'house', e: 'car' },
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'a=="1" && b==2',
					'a=="1" && b>2',
					'a=="1" || b>2',
					'!(a=="1" || b>2)'
				]
			}]
		}
	}
}
