console.log('App started')

function odejmowanie(val1, val2) {
  const wynik = val1 + val2
  console.log({wynik})
  // return wynik
}

const liczba1 = 17

const result = odejmowanie(liczba1, 2)

console.log({result})

const obj = {
  name: "Jan",
  lastName: "Kowalski"
}

console.log(obj["lastName"])

const itemsSSS = [1, 'item2E', 'item3', 'item4'] // array

for (let itemEEE of itemsSSS) {
  if (itemEEE === 'item2E') console.log("znalezione")
  else console.log("reszta")
}

