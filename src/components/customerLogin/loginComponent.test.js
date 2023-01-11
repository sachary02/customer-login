import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"
import Login from "./LoginComponent"


describe('Login Form', () => {
    test('should have 3 text input fields with texts Name, email and password', () => {
        render(<App/>)

        const renderInputFields = screen.getAllByRole('textbox')
        const renderNameText = screen.getByPlaceholderText('Enter Name')
        const renderEmailText = screen.getByPlaceholderText('Enter Email')
        const renderPwdText = screen.getByPlaceholderText('Enter Password')


        expect(renderInputFields.length).toBe(3)
        expect(renderNameText).toBeInTheDocument()
        expect(renderEmailText).toBeInTheDocument()
        expect(renderPwdText).toBeInTheDocument()
        
    })

    test("should have 2 buttons with texts Create Account and Login", ()=>{
        render(<App/>)

        const renderedButtons = screen.getAllByRole('button')
        const accountText = screen.getByText('Create Account')
        const loginText = screen.getByText('Log In')

        expect(renderedButtons.length).toBe(2)
        expect(accountText).toBeInTheDocument()
        expect(loginText).toBeInTheDocument()
    })

    test('should display an error message "Complete all required fields" when no required fields',() => {
        render(<Login/>)

        const createButton = screen.getByText('Create Account')
        userEvent.type(screen.getByPlaceholderText('Enter Email'), 'email@me.com')
        userEvent.type(screen.getByPlaceholderText('Enter Password'), '12345')

        userEvent.click(createButton)

        expect(screen.getByText('Please complete all required fields.')).toBeVisible()
    })

    test('should display an error message when password is less than 8 characters',() => {
        render(<Login/>)

        const createButton = screen.getByText('Create Account')
        userEvent.type(screen.getByPlaceholderText('Enter Name'), 'Test User')
        userEvent.type(screen.getByPlaceholderText('Enter Email'), 'email@me.com')
        userEvent.type(screen.getByPlaceholderText('Enter Password'), '12345')

        userEvent.click(createButton)

        expect(screen.getByText('Password should be at least 8 characters long.')).toBeVisible()
    })

    test('should display user was created when all required values are entered',()=>{
        
    })
})