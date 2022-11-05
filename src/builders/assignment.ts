import { expressions  as exp } from 'js-expressions'
import { TestSuiteRequest, IBuildTest } from 'h3lp'
export class AssignmentBuildTest implements IBuildTest {

	public build(): TestSuiteRequest {
		return {
			name: 'assignment',
			context: { a: '1', b: 2, c: { a: 4, b: 5 } },
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'a=8',
					'c.a=1',
					'd=c.b*2',
					'd=`value of a is: ${a}`'
				]
			}]
		}
	}
}
