/** @format */

const Item = new NativeClass("Terraria", "Item");
const SetDefaults =
	Item["void SetDefaults(int Type, bool noMatCheck, ItemVariant variant)"];

/**
 * @param {Item} item - The item instance being modified.
 * @param {number} useTime - The new use time for the item.
 *
 * @returns item.useTime = useTime
 */

function ChangeSummonSpeed(item, useTime) {
	if (item.summon && !item.sentry) item.useTime = useTime;
}

SetDefaults.hook((original, self, Type, noMatCheck, variant) => {
	original(self, Type, noMatCheck, variant);

	ChangeSummonSpeed(self, 2);
});
