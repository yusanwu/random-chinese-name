import {
  human, animal, cheats, clothes, elixir, organize, place, plant, weapon
} from "../../src/index";

describe("RandomName", function () {
  it("Human", function () {
    expect(human.getName().length).toBe(10);

    /** @ts-ignore 强制传入错误类型进行参数校验 */
    expect(human.getName({ single: 1 }).length).toBe(1);

    expect(human.getName({ single: false }).length).toBe(10);
    expect(human.getName({ single: false, limit: 2 })[0].length).toBe(3);
    expect(human.getName({ single: false, limit: 4 })[0].length).toBe(4);
    expect(human.getName({ single: false, limit: 5 })[0].length).toBe(4);

    expect(human.getName({ limit: -1 })[0].length).toBe(2);
    expect(human.getName({ limit:  0 })[0].length).toBe(2);
    expect(human.getName({ limit:  4 })[0].length).toBe(4);
    expect(human.getName({ limit:  5 })[0].length).toBe(4);

    expect(human.getName({ count:  -1 }).length).toBe(1);
    expect(human.getName({ count:   0 }).length).toBe(1);
    expect(human.getName({ count:   1 }).length).toBe(1);
    expect(human.getName({ count: 100 }).length).toBe(100);
    expect(human.getName({ count: 101 }).length).toBe(100);
  });

  it("Animal Cheats Clothes Elixir Organize Place Plant Weapon", function () {
    expect(animal.getName().length).toBe(10);

    /** @ts-ignore 强制传入错误类型进行参数校验 */
    expect(cheats.getName({ limit: true }).length).toBe(1);

    expect( clothes.getName({ limit: -1 })[0].length).toBe(2);
    expect(  elixir.getName({ limit:  1 })[0].length).toBe(2);
    expect(organize.getName({ limit:  2 })[0].length).toBe(2);
    expect(   place.getName({ limit:  7 })[0].length).toBe(7);
    expect(   plant.getName({ limit:  9 })[0].length).toBe(7);

    expect( weapon.getName({ count:  -1 }).length).toBe(1);
    expect( animal.getName({ count:   0 }).length).toBe(1);
    expect( cheats.getName({ count:   1 }).length).toBe(1);
    expect(clothes.getName({ count: 100 }).length).toBe(100);
    expect( elixir.getName({ count: 101 }).length).toBe(100);
  });
});