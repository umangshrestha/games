import { fireEvent, render, screen } from '@testing-library/react';
import { History } from './History';
import jest from 'jest-mock';

describe('History', () => {
  it.each(['Go to #0', 'Go to #1', 'Go to #2', 'Go to #3'])(
    'History with text %p',
    (text) => {
      const onClick = jest.fn()
      render(<History onClick={onClick} text={text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent(text)
      fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    }
  )
})
