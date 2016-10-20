// Type definitions for fraction.js 3.3.1
// Project: fraction.js
// Definitions by: akotynski <https://github.com/akotynski>

export as namespace Fraction;

export declare class Fraction {
    constructor(number: number | string | Fraction);

    /**
     * nominator
     */
    n: number;

    /**
     * denominator
     */
    d: number;

    /**
     * sign
     */
    s: number;

    /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     */
    abs(): Fraction;

    /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     */
    neg(): Fraction;

    /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     */
    add(nominator: number, denominator?: number): Fraction;

    /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     */
    sub(nominator: number, denominator?: number): Fraction;

    /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     */
    mul(nominator: number, denominator?: number): Fraction;

    /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     */
    div(nominator: number, denominator?: number): Fraction;

    /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     */
    clone(): Fraction;

    /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     */
    mod(nominator: number, denominator?: number): Fraction;

    /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */
    gcb(nominator: number, denominator?: number): Fraction;

    /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */
    lcm(nominator: number, denominator?: number): Fraction;

    /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil(0) => (5 / 1)
     **/
    ceil(places?: number): Fraction;

    /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor(0) => (4 / 1)
     **/
    floor(places?: number): Fraction;

    /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round(0) => (4 / 1)
     **/
    round(places?: number): Fraction;

    /**
     * Gets the inverse of the fraction, means numerator and denumerator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     */
    inverse(): Fraction;

    /**
     * Calculates the fraction to some integer exponent
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */
    pow(exponent: number): Fraction;

    /**
     * Check if two rational numbers are the same
     * Same as compare() === 0
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    equals(nominator: number, denominator?: number): boolean;

    compare(nominator: number, denominator?: number): number;

    /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */
    divisible(nominator: number, denominator?: number): boolean;

    /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     */
    valueOf(): number;

    /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
     */
    toFraction(): string;

    /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     */
    toLatex(): string;

    /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */
    toContinued(): Array<number>;

    /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     */
    toString(): string;
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace Fraction {
}