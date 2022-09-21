import System from "../../src/System";
import AuthorizerStub from "./AuthorizerStub";

test("should return one after login (stub)", async function () {
	const authorizer = new AuthorizerStub();
	const system = new System(authorizer);
	await system.login('gabrielnogueira', '123456');
	expect(system.loginCount()).toBe(1);
});
