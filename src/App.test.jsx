import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App Theme Toggle Feature', () => {
  beforeEach(() => {
    // Reset document body class
    document.body.className = '';
    
    // Mock localStorage
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: vi.fn(key => store[key] || null),
        setItem: vi.fn((key, value) => {
          store[key] = value.toString();
        }),
        clear: vi.fn(() => {
          store = {};
        }),
      };
    })();
    
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
  });

  it('renders with default light theme if nothing in localStorage', () => {
    render(<App />);
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('initializes with dark theme if stored in localStorage', () => {
    window.localStorage.setItem('theme', 'dark');
    render(<App />);
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('renders a theme toggle button', () => {
    render(<App />);
    const toggleButton = screen.getByRole('button', { name: /toggle theme|theme toggle/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles theme when button is clicked and saves to localStorage', () => {
    render(<App />);
    
    // We expect the user to add a 'aria-label="Toggle Theme"' or similar text
    const toggleButton = screen.getByRole('button', { name: /toggle theme|theme toggle/i });
    
    // Initially light mode
    expect(document.body.classList.contains('dark')).toBe(false);
    
    // Click -> Dark mode
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    
    // Click -> Light mode
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
