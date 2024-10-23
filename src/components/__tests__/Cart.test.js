import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_RES_MENU_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_RES_MENU_DATA)
    })
});

it("Should load Restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        
    ));

    const componentHeader = screen.getByText("Pizza Hut");
    expect(componentHeader).toBeInTheDocument();

});

it("Should open accordian with 8 items list", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        
    ));

    const accordianHeader = screen.getByText("Pasta (8)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(8);

});

it("Should add 1 item to cart when clicked on add button", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        
    ));

    const accordianHeader = screen.getByText("Pasta (8)");

    fireEvent.click(accordianHeader);

    const addBtn = screen.getAllByRole("button", {name: "ADD"});

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
});

it("Should add 2 item to cart when clicked on add button", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        
    ));

    const accordianHeader = screen.getByText("Pasta (8)");

    fireEvent.click(accordianHeader);

    const addBtn = screen.getAllByRole("button", {name: "ADD"});

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
});

