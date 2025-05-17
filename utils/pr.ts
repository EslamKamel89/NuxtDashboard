export default function pr<T>(value: T, title: string = ""): T {
  console.log(` -=-=-=-=-${title}-=-=-=-=- `);
  console.log(value);
  return value;
}
