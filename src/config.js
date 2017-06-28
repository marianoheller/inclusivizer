
export const initialLevel = 0;

export const initialText = `Aquí me pongo á cantar
al compás de la vigüela,
que el hombre que lo desvela
una pena estrordinaria,
como la ave solitaria
con el cantar se consuela.`

export const pelotudezLevel = [
  {
    name: "Básico",
    value: 0,
    parser: (text) => {
      const ret = text
      .split(/[^a-zA-Z\d\n.,;:]/)
      .map( (e) => {
        return e.split("").reverse().join("").replace(/[ao]/, "x").split("").reverse().join("");
      })
      .join(" ")
      return ret;
    },
  },
  {
    name: "Pasado de Rosca",
    value: 1,
    parser: (text) => {
      const ret = text
      .split(/[^a-zA-Z\d\n.,;:]/)
      .map( (e) => {
        return e.replace(/[ao]/g, "x");
      })
      .join(" ")
      return ret;
    },
  },
  {
    name: "Full Blown Pelotudo",
    value: 2,
    parser: (text) => {
      return text.replace(/[aeiou]/g, "x")
    },
  },
]