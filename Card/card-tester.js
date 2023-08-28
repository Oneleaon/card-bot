require('./card.js');

async function populate() {
    const requestURL = "https://raw.githubusercontent.com/Oneleaon/card-bot/card-implementation/ygo-cards.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    return await response.json();
}

function convert(dataArray) {
    const cards = [];
    for (const card of dataArray) {
        if (card.frameType = "spell")
            cards.push(new Card(card.name, card.frameType, card.race, card.desc));
    }
    return cards;
}

async function main() {
    const cardsRaw = await populate();
    const cards = convert(cardsRaw.data);

    console.log(cards[0].toString());
    console.log(cards.length);
}

main();