import shuffle from 'lodash.shuffle'
import FontAwesonmeClasses from '../../../../../utils/fontAwesonmeClasses'

const NUMERO_DE_CARTAS = 18;

const construirBaraja = () => {
    const fontAwesonmeClasses = FontAwesonmeClasses();
    let cartas = [];

    while (cartas.length < NUMERO_DE_CARTAS) {
        const index = Math.floor(Math.random() * fontAwesonmeClasses.length);
        const carta = {
            icono: fontAwesonmeClasses.splice(index, 1)[0],
            fueAdivinada: false
        };

        cartas.push(carta);
        cartas.push({ ...carta });

    }
    return shuffle(cartas);
};

export default construirBaraja