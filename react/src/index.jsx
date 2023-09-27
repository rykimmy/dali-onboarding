import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Components/home';

const root = createRoot(document.getElementById('main'));
root.render(<Home />);
