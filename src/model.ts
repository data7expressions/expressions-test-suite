import { TestSuiteRequest } from 'h3lp'

export interface IBuildTest {
	build(): TestSuiteRequest 
}