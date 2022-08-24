import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

$('.close-instructions').on('click touchend', function() {
    $('.instructions').removeClass('instructions-open');
    $('.open-instructions').removeClass('tab-hidden');
    $(this).addClass('tab-hidden');
});

$('.open-instructions').on('click touchend', function() {
    $('.instructions').addClass('instructions-open');
    $('.close-instructions').removeClass('tab-hidden');
    $(this).addClass('tab-hidden');
});

setTimeout(() => {
    $('.instructions').addClass('instructions-open');

}, 1000);
