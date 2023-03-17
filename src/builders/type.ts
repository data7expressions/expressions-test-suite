/* eslint-disable no-template-curly-in-string */
import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class TypeBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'type',
			context: { },
			cases: [{
				name: 'lab',
				func: (expression: string) => exp.type(expression),
				tests: [
					'1 + a',
					'b + a',
					'nvl(a ,1)',
					'nvl(a ,"text")',
					'nvl(a , b * 5 )',
					'a.strCount("o")',
					'[1,2,3].map(p => nvl(a, p))',
					'a = max([1,2,3])',
					'a = max([1,2,3]) > c',
					'd=c.b*2',
					'd=`value of a is: ${a}`',
					'!(a=="1" || b>2)',
					'a = {firstName: "John", lastName: "Lennon", age: 40}',
					'ods.union(prime)',
					'cities.push(salta).name',
					'a = cities.push(salta).name'
				]
			}]
		}
	}
}
