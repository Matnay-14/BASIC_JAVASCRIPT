var pilihan = 2 ;
/*
1. Light
2. Dark
3. Nocturne
4. Terminal
5. Indigo
*/
//cara 1
if (pilihan == 1)
console.log ('Light')
else if (pilihan == 2) {
    console.log ('Dark')
} else if (pilihan == 3) {
    console.log('Nocturne')
} else if (pilihan == 4) {
    console.log('Terminal')
} else {
    console.log('Indigo')
}

// Cara 2
switch (pilihan) {
    case 1 : console.log ('Light')
    break 

    case 2 : console.log ('Dark')
    break

    case 3 : console.log ('Nocturne')
    break

    case 4 : console.log ('Terminal')
    break

    default : console.log ('indigo')
}

//Cara 3
console.log(pilihan == 1 ? "Light" : 
(pilihan == 2 ? "Dark" : 
(pilihan == 3 ? "Nocturne" : 
(pilihan == 4 ? "Terminal" : "Indigo"))))