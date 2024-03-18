import { it, expect, describe, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, cleanup  } from "@testing-library/react";
import AutoComplete from "./autocomplete";
import data from '../data/data.json';

describe("autocomplete test", () => {
  beforeEach(() => {
    const selectedDataFn = () => void
    render(
      <AutoComplete options={data} selectedData={selectedDataFn}></AutoComplete>
  )
  });
  afterEach(cleanup);
  it("it should be load autocomplete", () => {
    expect(screen.findAllByTestId("autocomplete")).toBeTruthy()
    expect(screen.findAllByPlaceholderText("Type something...")).toBeTruthy()
  });

  it("it should be load autocomplete data when user type", () => {

    expect(screen.findAllByTestId("autocomplete")).toBeTruthy()
    const input:any = screen.findAllByRole("input").then(() => {fireEvent.change(input, {target: {value: 'te'}})});
    expect(screen.findAllByTestId("list")).toBeTruthy();
  });
});
