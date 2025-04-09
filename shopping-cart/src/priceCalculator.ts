// 购物车计价函数
export function calculateTotal(
    items: { price: number; quantity: number }[],
    discount: number = 0,
    taxRate: number = 0.1
  ): number {
    if (discount < 0 || discount > 1) throw new Error("折扣值必须在 0~1 之间");
    
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discounted = subtotal * (1 - discount);
    return discounted * (1 + taxRate);
  }