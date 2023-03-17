import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class NullableBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'nullable',
			context: { a: 1, b: null, c: '', e: 'hello' },
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'nvl(a,2)',
					'nvl(b,2)',
					'nvl2(b,"is not null","is null")',
					'nvl2(c,"is not null","is null")',
					'nvl2(d,"is not null","is null")'
				]
			}]
		}
	}
}
