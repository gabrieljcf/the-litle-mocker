import Authorizer from "../../src/Authorizer";

export default class AuthorizerSpy implements Authorizer {
  private numberOfCall = 0;
  private calls: { params: string[] }[] = [];

  constructor(readonly authorizer: Authorizer) {}

  async authorize(username: string, password: string): Promise<any> {
    this.numberOfCall++;
    const params = [];
    params.push(username);
    params.push(password);
    this.calls.push({ params });
    return this.authorizer.authorize(username, password);
  }

  once() {
    return this.numberOfCall === 1;
  }

  twice() {
    return this.numberOfCall === 2;
  }

  withParams(...params: string[]) {
    for (const call of this.calls) {
      let hasParams = true;
      for (const param of params) {
        if (!call.params.includes(param)) {
          hasParams = false;
          continue;
        }
      }
      if (hasParams) return true;
    }
    return false;
  }
}
