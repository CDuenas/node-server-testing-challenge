exports.seed = async function(knex) {
	await knex("heroes").truncate()
	await knex("heroes").insert([
		{ name: "Iron Man" },
		{ name: "Captain America" },
		{ name: "Scarlet Widow" },
		{ name: "Spider-man" },
	])
}
