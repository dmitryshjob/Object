import attackOptions from '../attackOptions';

test(' Массив с нужными полями (id, name, description, icon)', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
        ],
    };

    const correctResult = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
        },
    ];
    const result = attackOptions(character);
    expect(result).toEqual(correctResult);
});

test('Массив без значения для поля description', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
            },
        ],
    };

    const correctResult = [
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно',
        },
    ];

    const result = attackOptions(character);
    expect(result).toEqual(correctResult);
});