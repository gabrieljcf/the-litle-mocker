import System from "../../src/System";
import AuthorizerFake from "./AuthorizerFake";

test("should be able to login with valid params (Fake)", async function () {
	const authorizerFake = new AuthorizerFake();
	const system = new System(authorizerFake);
	await system.login('gabrielnogueira', '123456');
	expect(system.loginCount()).toBe(1);
});

test("should not be able to login with invalid params (Fake)", async function () {
	const authorizerFake = new AuthorizerFake();
	const system = new System(authorizerFake);
	await system.login('', '');
	expect(system.loginCount()).toBe(0);
});