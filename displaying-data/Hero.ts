// It might not look like the class has properties, 
// but it does. The declaration of the constructor p
// parameters takes advantage of a TypeScript shortcut.
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

const heroes:Hero[] = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];