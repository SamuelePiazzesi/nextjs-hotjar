import { render } from "@testing-library/react";
import React from "react";
import { it } from "vitest";
import { Hotjar, WindowWithHotjar } from "./Hotjar";
import { expect } from "vitest";

it("renders Hotjar script", () => {
	render(<Hotjar id={"123"} sv={5} />);
	expect(document.getElementById("hotjar")).toBeTruthy();
});
