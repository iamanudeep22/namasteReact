import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const resName = screen.getByText("Pizza Hut");

    expect(resName).toBeInTheDocument();
})