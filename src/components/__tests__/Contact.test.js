import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact page Test cases", () => {
    it("Should load contact page component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name inside contact component", () => {
        render(<Contact/>);
    
        const name = screen.getByPlaceholderText("Name");
    
        expect(name).toBeInTheDocument();
    });
    
    it("Should load my all input boxes", () => {
        //render
        render(<Contact/>);
        
        //query
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assert
        expect(inputBoxes.length).toBe(2);
    });
});

