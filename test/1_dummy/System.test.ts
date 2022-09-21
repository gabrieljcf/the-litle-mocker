import System from "../../src/System";
import AuthorizerDummy from "./AuthorizerDummy";

test("should return zero while not logging in (dummy)", async function () {
	const authorizer = new AuthorizerDummy();
	const system = new System(authorizer);
	expect(system.loginCount()).toBe(0);
});
