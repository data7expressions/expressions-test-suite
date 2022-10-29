import { IBuildTest } from './model'
import { 
	AccessBuildTest, ArithmeticBuildTest, ArrayBuildTest, ArrowBuildTest, AssignmentBuildTest, BitwiseBuildTest,
	ComparisonBuildTest, ConstantsBuildTest, ConversionBuildTest, DateTimeBuildTest, FlowsBuildTest, GroupsBuildTest,
	LogicalBuildTest, NullableBuildTest, ParametersBuildTest, QuickBuildTest, SetsBuildTest, StringBuildTest, TypeBuildTest

} from './builders'
import { h3lp } from 'h3lp'

export class TestBuilder {

	private tests:IBuildTest[] 

	public constructor () {
		this.tests = [
			new AccessBuildTest(),
			new ArithmeticBuildTest(),
			new ArrayBuildTest(),
			new ArrowBuildTest(),
			new AssignmentBuildTest(),
			new BitwiseBuildTest(),
			new ComparisonBuildTest(),
			new ConstantsBuildTest(),
			new ConversionBuildTest(),
			new DateTimeBuildTest(),
			new FlowsBuildTest(),
			new GroupsBuildTest(),
			new LogicalBuildTest(),
			new NullableBuildTest(),
			new ParametersBuildTest(),
			new QuickBuildTest(),
			new SetsBuildTest(),
			new StringBuildTest(),
			new TypeBuildTest()
		]
	}

	public add(test:IBuildTest): void {
		this.tests.push(test)
	}

	public async build(): Promise<void> {
		for( const test of this.tests) {
			const suite = h3lp.test.buildSuite(test.build())
			await h3lp.fs.write(`./tests/v1/${suite.name}.json`, JSON.stringify(suite, null, 2))
		}
	}
}