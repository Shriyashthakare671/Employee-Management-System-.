import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Launcher from './launcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
              <Launcher/>

            </BrowserRouter>);