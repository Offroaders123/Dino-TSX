const prototypes = getPrototypes(File);
console.log(prototypes);

interface Constructor extends Function {
  prototype: Prototype | null;
}

interface Prototype {
  constructor: Constructor | undefined;
}

function getPrototypes(constructor: Constructor): Constructor[] {
  const constructors: Constructor[] = [];

  while (true){
    constructors.unshift(constructor);

    const { prototype } = constructor;
    if (prototype === null) break;

    const candidate: Constructor | undefined = (Object.getPrototypeOf(prototype) as Constructor["prototype"])?.constructor;
    if (candidate === undefined) break;

    constructor = candidate;
  }

  return constructors;
}