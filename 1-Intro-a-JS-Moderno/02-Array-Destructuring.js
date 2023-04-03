//Array Destructuring

const values = [1, 2, 12, 34, 45, 68, 96, 100, 236];

const [v1, v2, v3, v4, v5, v6, v7, v8, v9] = values;

console.log(v2, v5, v9);

const useState = value => {
    return [
        value,
        newValue => {
            value = newValue;
        },
    ];
};

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre('Vegeta');
console.log(nombre);
