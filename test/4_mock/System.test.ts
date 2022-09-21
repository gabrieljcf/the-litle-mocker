import System from "../../src/System";
import AuthorizerMock from "./AuthorizerMock";

test("should be able to validate login (Mock)", async function () {
	const authorizerMock = new AuthorizerMock();
	const system = new System(authorizerMock);
	await system.login('gabrielnogueira', '123456');
	authorizerMock.verify();
});