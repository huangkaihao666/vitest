import { describe, expect, it } from 'vitest';
import { calculateTotal } from '../src/priceCalculator';

describe("购物车计价器", () => {
  // 测试正常计算
  it("计算含税总价", () => {
    const items = [{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }];
    expect(calculateTotal(items)).toBeCloseTo((250 * 1.1)); // 250 + 10%税
  });

  // 测试折扣逻辑
  it("应用20%折扣", () => {
    const items = [{ price: 100, quantity: 1 }];
    expect(calculateTotal(items, 0.2)).toBeCloseTo(100 * 0.8 * 1.1);
  });

  // 测试异常输入
  it("折扣值无效时抛出错误", () => {
    expect(() => calculateTotal([], 1.5)).toThrowError("折扣值必须在 0~1 之间");
  });
});