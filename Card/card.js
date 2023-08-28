class Card {
    // CARD PROPERTIES
    #name = "";
    #frameType= "";
    #desc = "";
    #race = "";

    // Monster card exclusive properties
    #attribute = "";
    #atk = short;

    // Link doesn't have
    #def = short;
    #level = short;

    #linkval = short; // Link exclusive

    // CONSTRUCTORS
    // Spell/Trap
    constructor(name, frameType, race, desc) { this.#name = name; this.#frameType = frameType; this.#race = race; this.#desc = desc; }

    // Monster
    constructor(name, frameType, race, desc, attribute, atk, def, level) { this.#name = name; this.#frameType = frameType; this.#race = race; this.#desc = desc; this.#attribute = attribute; this.#atk = atk; this.#def = def; this.#level = level; }

    // Link monster
    constructor(name, frameType, race, desc, attribute, atk, linkval) { this.#name = name; this.#frameType = frameType; this.#race = race; this.#desc = desc; this.#attribute = attribute; this.#atk = atk; this.#linkval = linkval; }


}