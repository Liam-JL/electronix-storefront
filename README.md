# Electronix: E-Commerce App (React)

A front-end electronics store built with React. Portfolio project based on the “Shopping Cart” assignment from The Odin Project. ([theodinproject.com](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart))

![Screenshot of Electronix Store page](./public/Screenshot%202025-10-03%20104819.png)

## Features
- Product listing with card layout
- Category filtering
- Search bar
- Shopping cart with quantity controls (increment, decrement, manual input)
- Real-time cart count indicator in navbar
- Responsive layout
- No checkout or payment integration

## Data and Assets
- Products from [DummyJSON](https://dummyjson.com/)
- Logo from [Logoipsum](https://logoipsum.com/)
- Styled as a contemporary electronics retailer with a clean, minimal interface

## Architecture
- Five pages: Landing, Shop, Product, Cart, Error
- Navbar persistent across pages with dynamic cart indicator
- Cart page supports quantity adjustment and item removal
- Component-based structure (ProductCard, CartItem, Navbar)
- State management with React Context and hooks
- Scoped styling with CSS Modules

## Tech Stack
- React
- React Router
- Context API / Hooks
- CSS Modules

## Setup
`git clone https://github.com/Liam-JL/electronix-storefront && cd electronix-storefront && npm install && npm start`

## Limitations
- No real backend or database
- No payment or checkout
- Future additions could include authentication, product details pages, and persistence

## License
MIT
