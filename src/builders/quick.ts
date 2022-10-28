import { expressions  as exp } from 'js-expressions'
import { TestSuiteRequest } from 'h3lp'
import { IBuildTest } from '../model'

export class QuickBuildTest implements IBuildTest {

	public build(): TestSuiteRequest {
		return {
			name: 'quick',
			context: {
				name: 'Spain',
				region: 'Europe',
				phoneCode: '34',
				timezones: [
					{ name: 'Madrid', offset: 1, pos: { lat: 40.4165, log: -3.70256 } },
					{ name: 'Ceuta', offset: 1, pos: { lat: 35.8883, log: -5.3162 } },
					{ name: 'Canary', offset: 0, pos: { lat: 28.1248, log: -15.43 } }
				]
			},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'5*(7+9)==(5*7+5*9)',
					'toNumber(phoneCode) <= 30',
					'`${name} belongs to ${region}`',
					'timezones.filter(p => substring(p.name,0,1)=="C")',
					'timezones.filter(p => p.offset == 1).sort(p => p.pos.lat).name',
					'stringify(timezones.first(p => p.name == "Madrid").pos)',
					'timezones.filter(p => p.pos.lat > 30 && p.pos.log > -4).pos.lat',
					'sort(timezones.name)',
					'timezones[0].name',
					// 'timezones.pop()',
					'round(timezones.first(p=> p.name =="Madrid").pos.lat - timezones.first(p=> p.name =="Ceuta").pos.lat,2)',
					'timezones.each(p => p.pos={lat:round(p.pos.lat,2),log:round(p.pos.log,2)}).map(p=> stringify(p))'
					// `
					// list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
					// total = 0;
					// for (i = 0; i < list.length(); i += 1) {
					// total += list[i];
					// };
					// `,
					// TODO: agregar return como corte de control
					// `
					// list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
					// total = 0;
					// for (i = 0; i < list.length(); i += 1) {
					// total += list[i];
					// }
					// return total;
					// `,
					// `
					// while (p=timezones.pop()) {
					// console(p);
					// };
					// `
				]
			}]
		}
	}
}

