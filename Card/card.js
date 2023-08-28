class Card {
    // CARD PROPERTIES
    #name = "";
    #frameType= "";
    #race = "";
    #desc = "";

    // CONSTRUCTORS
    // Spell/Trap
    constructor(name, frameType, race, desc) { this.#name = name; this.#frameType = frameType; this.#race = race; this.#desc = desc; }

    // Link monster
    constructor(name, frameType, race, desc, attribute, atk, linkval) { this.#name = name; this.#frameType = frameType; this.#race = race; this.#desc = desc; this.#attribute = attribute; this.#atk = atk; this.#linkval = linkval; }

    // METHODS
    get name() { return this.#name; }
    get frame() { return this.#frameType; }
    get race() { return this.#race; }
    get desc() { return this.#desc; }

    toString() {
        return `${this.#name}\n${this.#frameType}\n${this.#race}\n${this.#desc}`;
    }
}

class SpellCard extends Card {
    super();
}

class TrapCard extends Card {
    super()
}

class MonsterCard extends Card {
    #attribute = "";
    #atk = short;
    #def = short;
    #level = short;

    constructor(attribute, atk, def, level) {
        super()
        this.#attribute = attribute; this.#atk = atk; this.#def = def; this.#level = level;
    }

    get attribute() { return this.#attribute; }
    get atk() { return this.#atk; }
    get def() { return this.#def; }
    get level() { return this.#level; }
}

class LinkMonsterCard extends Card {
    #attribute = "";
    #atk = short;
    #linkval = short;
    #linkmarkers = [];

    constructor(attribute, atk, linkval, linkmarkers) {
        super()
        this.#attribute = attribute; this.#atk = atk; this.#linkval = linkval; this.#linkmarkers = levlinkmarkersel;
    }

    get attribute() { return this.#attribute; }
    get atk() { return this.#atk; }
    get linkval() { return this.#linkval; }
    get linkmarkers() { return this.#linkmarkers; }
}