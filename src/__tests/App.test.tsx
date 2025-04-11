import {render, screen} from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

describe('App', () => {
  it("renders the demo Vite text", () => {
    render(<App />)
    const text = screen.getByText(/Hello vite app!/i)
    expect(text).toBeInTheDocument()
  })
})
