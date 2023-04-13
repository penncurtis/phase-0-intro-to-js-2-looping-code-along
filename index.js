function writeCards(names) {
    const finishedCards = []
    for(let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    console.log(finishedCards)
    return finishedCards
}

writeCards('Guadalupe', 'Ollie', 'Aki')


function countDown(){
    let count = 10
    while(count >= 0){
        console.log(count--)
    }
}