const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

people.forEach((curName, i) => {
  console.log(curName.name)
});

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'