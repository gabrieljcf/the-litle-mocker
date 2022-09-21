import RealAuthorizer from "../../src/RealAuthorizer";
import System from "../../src/System";
import AuthorizerSpy from "./AuthorizerSpy";
import AuthorizerStub from "./AuthorizerStub";

test("should be able to validate that the login function was called with the correct parameters (spy)", async function () {
	const realAuthorizer = new RealAuthorizer()
	const authorizerSpy = new AuthorizerSpy(realAuthorizer);
	const system = new System(authorizerSpy);
	await system.login('gabrielnogueira', '123456');
	expect(authorizerSpy.once()).toBe(true);
	expect(authorizerSpy.withParams('gabrielnogueira', '123456')).toBe(true);
});

test("should be able to validate that the login function was called with the correct parameters (spy and stub)", async function () {
	const authorizerStub = new AuthorizerStub()
	const authorizerSpy = new AuthorizerSpy(authorizerStub);
	const system = new System(authorizerSpy);
	await system.login('gabrielnogueira', '123456');
	expect(authorizerSpy.once()).toBe(true);
	expect(authorizerSpy.withParams('gabrielnogueira', '123456')).toBe(true);
});