export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw new Error('Cannor process');
    }
    map.forEach((value, key) => {
        if (value === 1) {
            map.set(key, 100);
        }
    });
}
