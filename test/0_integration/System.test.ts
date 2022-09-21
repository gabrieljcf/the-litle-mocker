import RealAuthorizer from "../../src/RealAuthorizer";
import System from "../../src/System";

test("should be able to success login", async function () {
	const realAuthorizer = new RealAuthorizer();
	const system = new System(realAuthorizer);
	const loggedIn = await system.login("gabrielnogueira", "123456");
	expect(loggedIn).toBe(true);
});

test("Should not be able to login with incorrect password", async function () {
	const realAuthorizer = new RealAuthorizer();
	const system = new System(realAuthorizer);
	const loggedIn = await system.login("gabrielnogueira", "1234567");
	expect(loggedIn).toBe(false);
});
