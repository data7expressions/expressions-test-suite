import { expressions  as exp } from 'js-expressions'
import { TestSuiteRequest } from 'h3lp'
import { IBuildTest } from '../model'

export class ConversionBuildTest implements IBuildTest {

	public build(): TestSuiteRequest {
		return {
			name: 'conversion',
			context: {
				customer: { firstName: 'Juan', lastName: 'Lopez', birthday: '1975-03-20T23:45:11' },
				data: '{"b":1}'
			},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'toString(month(customer.birthday))',
					'toNumber("3.141516")',
					'dateToString(dateTime(customer.birthday))',
					'keys(customer)',
					'values(customer)',
					'entries(customer)',
					'fromEntries(entries(customer))',
					'stringify(customer)',
					'parse(data).b'
				]
			}]
		}
	}
}