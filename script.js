// Funkce, která spočítá ciferný součet čísla pomocí cyklu for.
function digitSum(c) {
    let numStr = c.toString();                    // převedeme číslo na řetězec, abychom mohli
                                                  // procházet jednotlivé jeho číselné znaky
    let s = 0;
    for (let i = 0; i < numStr.length; i++) {     // projdeme všechny znaky řetězce
      s += Number(numStr[i]);                     // vezmeme itý znak, převedeme ho na číslený typ a následně ho přičteme k cifernému součtu
    }
    return s;                                     // funkce vrací výsledný ciferný součet
  }

// Funkce, která spočítá ciferný součet čísla pomocí cyklu while.
function digitSum2(c) {
    let numStr = c.toString();
    let s = 0;
    let i = 0;
    while (i < numStr.length) {
      s += Number(numStr[i]);
      i++;
    }
    return s;
  }

// Funkce události kliknutí na tlačítko přečte hodnotu zadanou do pole, zavolá funkci digitSum a výsledek vypíše do divu.  
document.querySelector('button').onclick = function() {
    const cislo = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');

    // Pokud uživatel nezadal číslo, vypiš chybovou hlášku.
    if (cislo === '') {
      resultDiv.innerHTML = '<div class="w3-red w3-padding">Zadej prosím číslo.</div>';
      return;
    }

    // Zavolání funkce digitSum a vypsání výsledku do divu.

    const soucet = digitSum(cislo);
    // nebo
    // const sum = digitSum2(number);
    resultDiv.innerHTML = '<div class="w3-green w3-padding">Ciferný součet čísla ' + cislo + ' je ' + soucet + '.</div>';
  }
