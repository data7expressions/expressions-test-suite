import {
	AccessBuildTest, ArithmeticBuildTest, ArrayBuildTest, ArrowBuildTest, AssignmentBuildTest, BitwiseBuildTest,
	ComparisonBuildTest, ConstantsBuildTest, ConversionBuildTest, DateTimeBuildTest, FlowsBuildTest, GroupsBuildTest,
	LogicalBuildTest, NullableBuildTest, NumericBuildTest, ParametersBuildTest, QuickBuildTest, SetsBuildTest, StringBuildTest, TypeBuildTest

} from './builders'
import { h3lp } from 'h3lp'

; (async () => {
	await h3lp.test
		.createSuiteBuilder()
		.add(new AccessBuildTest())
		.add(new ArithmeticBuildTest())
		.add(new ArrayBuildTest())
		.add(new ArrowBuildTest())
		.add(new AssignmentBuildTest())
		.add(new BitwiseBuildTest())
		.add(new ComparisonBuildTest())
		.add(new ConstantsBuildTest())
		.add(new ConversionBuildTest())
		.add(new DateTimeBuildTest())
		.add(new FlowsBuildTest())
		.add(new GroupsBuildTest())
		.add(new LogicalBuildTest())
		.add(new NullableBuildTest())
		.add(new NumericBuildTest())
		.add(new ParametersBuildTest())
		.add(new QuickBuildTest())
		.add(new SetsBuildTest())
		.add(new StringBuildTest())
		.add(new TypeBuildTest())
		.build('./tests/v1')
})()