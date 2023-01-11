import { render, screen } from '@testing-library/react';
import App from './App';


describe('Login application form',()=>{
  test("should have three input fields Name, Password and Email", () =>{
render(<App/>)
  const renderInputfields=screen.getAllByRole('textbox')
  const renderNameText=screen.getByPlaceholderText('Name *')
  const renderEmailText=screen.getByPlaceholderText('Email *')
  const renderPasswordText=screen.getByPlaceholderText('Password *')
  expect(renderInputfields.length).toBe(3)
  expect(renderEmailText).toBeInTheDocument()
  expect(renderNameText).toBeInTheDocument()
  expect(renderPasswordText).toBeInTheDocument()

  })
  
  test("should have two buttons with Create Account and Login", () =>{
    render(<App/>)
      const renderInputfields=screen.getAllByRole('button')
      const renderCreateAccountBtn=screen.getByText("Create account")
      const renderCreateLoginBtn=screen.getByText("Log In")
    
     expect(renderInputfields.length).toBe(2)
      expect(renderCreateAccountBtn).toBeInTheDocument()
      expect(renderCreateLoginBtn).toBeInTheDocument()
     
      })
     
      test("should have a heading Login/Registration page", () =>{
        render(<App/>)
        const renderHeading =screen.getByRole('heading')
        const renderText= screen.getByText('Login/Registration Page')

        expect(renderHeading).toBeInTheDocument()
        expect(renderText).toBeInTheDocument()

      })}
      

)