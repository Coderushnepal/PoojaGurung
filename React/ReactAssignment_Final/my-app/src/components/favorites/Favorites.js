import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../common';

const Favorites = () => (
    <div class="wrapper">
        <Header />
        <p><Link to="/">Home</Link></p>
        <p><Link to="/favorites">Favorite</Link></p>
    </div>
);

export default Favorites;