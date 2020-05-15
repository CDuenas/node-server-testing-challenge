const db = require("../data/config")

async function create(data) {
	const [id] = await db("heroes").insert(data)
	return findById(id)
}

async function update(id, data) {
	return null
}

function remove(id) {
    return db("heroes")
        .where({ id })
        .delete()
}

function find() {
	return db("heroes")
}

function findById(id) {
	return db("heroes")
		.where({ id })
		.first()
}

module.exports = {
	create,
	update,
	remove,
	find,
	findById,
}