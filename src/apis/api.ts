import type { TestData, TestParams } from './index';
import { post } from './http';

/**
 * 测试接口API
 * @param data 任意数据
 */
export const test = (data: TestParams): Promise<TestData> => post('/goods/goodAll', data);
