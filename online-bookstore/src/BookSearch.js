import React, { useState } from 'react';
import axios from 'axios';
import './BookSearch.css';
import westernLogo from './western_logo.webp';

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:4000/api/books`, {
                params: {
                    q: searchTerm
                }
            });
            setBooks(response.data.items || []);
        } catch (error) {
            console.error('Error fetching books:', error);
            setBooks([]);
        }
    };

    return (
        <div>
            <img src={westernLogo} alt="Western Logo" className="westernLogo" />
            <div className='searchBar'>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for books"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div>
                {/* Display search results */}
                <div className='results'>
                {books.map((book, index) => (
                    <div key={book.id + index}>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(', ')}</p>
                        {/* Other book details */}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default BookSearch;
