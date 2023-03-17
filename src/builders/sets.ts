import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class SetsBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'sets',
			context: {
				ods: [1, 3, 5, 7, 9],
				prime: [2, 3, 5, 7],
				orders: [
					{
						number: '20003',
						details: [
							{ article: 'Pear', qty: 2 },
							{ article: 'Banana', qty: 2 },
							{ article: 'White grape', qty: 1 },
							{ article: 'Apple', qty: 1 }
						]
					},
					{
						number: '20004',
						details: [
							{ article: 'Apple', qty: 1 },
							{ article: 'Banana', qty: 2 },
							{ article: 'Pear', qty: 1 }
						]
					}
				]
			},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'ods.union(prime)',
					'ods.intersection(prime)',
					'ods.difference(prime)',
					'ods.symmetricDifference(prime)',
					'orders[0].details.union(orders[1].details)',
					'orders[0].details.intersection(orders[1].details)',
					'orders[0].details.difference(orders[1].details)',
					'orders[0].details.symmetricDifference(orders[1].details)'
				]
			}]
		}
	}
}
