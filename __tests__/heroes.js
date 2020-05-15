const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll( async () => {
    await db.destroy()
})

describe("Heroes integration tests", () => {
    it("Creates a new Hero", async () => {
        const data = { name:"Punisher" }
        const res = await supertest(server).post("/heroes").send(data)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Punisher")
    })

    it("Fails to create Hero", async () => {
        const data = { name: "DareDevil" }
        const res = await supertest(server).post("/hero").send(data)
        expect(res.statusCode).toBe(404)
    })

    it("Deletes a Hero", async () => {
        const res = await supertest(server).delete("/heroes/1")
        expect(res.body.name).toBeFalsy()
        expect(res.statusCode).toBe(204)
    })

    it("Does not Delete hero", async () => {
        const res = await supertest(server).delete("/heroes/5")
        expect(res.statusCode).toBe(404)
    })
})