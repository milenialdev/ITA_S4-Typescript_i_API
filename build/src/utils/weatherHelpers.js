export function getWeatherDescription(code) {
    const descriptions = {
        0: 'Cel clar',
        1: 'Principalment clar',
        2: 'Parcialment ennuvolat',
        3: 'Ennuvolat',
        45: 'Boira',
        48: 'Boira amb gelada',
        51: 'Plugim lleuger',
        53: 'Plugim moderat',
        55: 'Plugim intens',
        61: 'Pluja lleugera',
        63: 'Pluja moderada',
        65: 'Pluja intensa',
        71: 'Neu lleugera',
        73: 'Neu moderada',
        75: 'Neu intensa',
        80: 'Xàfecs lleugers',
        81: 'Xàfecs moderats',
        82: 'Xàfecs intensos',
        95: 'Tempesta',
        96: 'Tempesta amb calamarsa lleugera',
        99: 'Tempesta amb calamarsa intensa'
    };
    return descriptions[code] || 'Desconegut';
}
//# sourceMappingURL=weatherHelpers.js.map