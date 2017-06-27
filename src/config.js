
export const initialLevel = 0;

export const initialText = `Traductor gratuito online en elmundo.es. Traductor de Inglés, italiano francés y alemán. Traducción de texto y páginas web.`

export const pelotudezLevel = [
  {
    name: "Básico",
    value: 0,
    parser: (text) => {
      const ret = text
      .split(/[^a-zA-Z\d:]/)
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
      .split(/[^a-zA-Z\d:]/)
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