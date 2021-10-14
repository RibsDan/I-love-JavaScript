function multiplicator(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
};

const duplica = multiplicator(2);
const triplica = multiplicator(3);
const quadriplica = multiplicator(4);

console.log(duplica(6));
console.log(triplica(9));
console.log(quadriplica(10));