function importAll(r) {
    return r.keys().map(r);
}

const Images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default Images;
