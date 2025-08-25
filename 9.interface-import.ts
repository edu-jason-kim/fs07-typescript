//  "verbatimModuleSyntax": true 인 경우 반드시 타입 임포트 방식을 사용해야 함
import type { Product } from "./9.interface-export.js";

const product: Product = {
  id: "c001",
  name: "바람막이",
  price: 129000,
  // isMemberOnly: true,
};
