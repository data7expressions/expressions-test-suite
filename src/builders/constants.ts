import { expressions  as exp } from 'js-expressions'
import { TestSuiteRequest } from 'h3lp'
import { IBuildTest } from '../model'

export class ConstantsBuildTest implements IBuildTest {

	public build(): TestSuiteRequest {
		return {
			name: 'constants',
			context: {},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'a = true',
					'a = 1',
					'pi = 3.14159',
					'musician = "Charly Garcia" ',
					'a = nvl(null,false)'
				]
			}]
		}
	}
}