import React from 'react';
function Header() {
    return (
        <header className='header'>
            <strong>Header</strong>
            <ul>
                <li>
                    <a href='/'>홈</a>
                </li>
                <li>
                    <a href='/profile'>프로필1</a>
                </li>
            </ul>
        </header>);
}
export default Header;
