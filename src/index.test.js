/** make sure we export properly */
import { Nav, NavIcon, NavText, SideNav } from "./index";

describe("checking exports ", () => {
  it("exports SideNav, { SideNav, Nav, NavIcon, NavText }", () => {
    expect(SideNav).toBeDefined();
    expect(Nav).toBeDefined();
    expect(NavIcon).toBeDefined();
    expect(NavText).toBeDefined();
  });
});
