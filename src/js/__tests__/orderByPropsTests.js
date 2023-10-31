import orderByProps from "../orderByProps";

test("Проверка сортировки объекта", () => {
    const obj = {
        name: "мечник",
        health: 10,
        level: 2,
        attack: 80,
        deffence: 40,
    };
    const sortOrder = ["name", "level"];
    const correctResult = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "deffence", value: 40},
        {key: "health", value: 10},
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(correctResult);
});