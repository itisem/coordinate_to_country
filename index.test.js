const lookup = require("./index");

test("Groningen is in the Netherlands", () => {
	expect(lookup(53.218620, 6.567365)).toStrictEqual(["NLD"]);
});

test("Groningen is in the Netherlands (alpha-2)", () => {
	expect(lookup(53.218620, 6.567365, true)).toStrictEqual(["NL"]);
});

test("The ocean is nowhere", () => {
	expect(lookup(0, 0)).toStrictEqual([]);
});

test("Baarle-Nassau is in the Netherlands", () => {
	expect(lookup(51.439391, 4.931514)).toStrictEqual(["NLD"]);
});

test("Baarle-Hertog is in Belgium", () => {
	expect(lookup(51.445161, 4.941440)).toStrictEqual(["BEL"]);
});

test("Maseru is only in Lesotho", () => {
	expect(lookup(-29.311089, 27.501524)).toStrictEqual(["LSO"]);
});

test("The Croatian-Serbian border dispute works", () => {
	expect(new Set(lookup(45.739518, 18.953996))).toStrictEqual(new Set(["HRV", "SRB"]));
});