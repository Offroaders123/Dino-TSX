const prototypes = getPrototypes(File);
console.log(prototypes);

const immutableProperties = getImmutableProperties(prototypes);
// immutableProperties.forEach(descriptor => console.log(descriptor));
console.log(immutableProperties);

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

function getImmutableProperties(constructors: Constructor[]): Record<string, string[]> {
  const descriptors: Record<string, string[]> = Object.fromEntries(constructors.map(constructor => [
    constructor.name,
    Object.entries(Object.getOwnPropertyDescriptors(constructor.prototype))
      .filter(([_,value]) => value.set === undefined || value.value === undefined)
      .map(([key]) => key)
  ]));
  return descriptors;
}