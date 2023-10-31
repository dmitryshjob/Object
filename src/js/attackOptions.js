export default function attackParameters({special = []}) {
    special.forEach((element) => {
        if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
            element.description = 'Описание недоступно';
        }
    });
    return special;
}