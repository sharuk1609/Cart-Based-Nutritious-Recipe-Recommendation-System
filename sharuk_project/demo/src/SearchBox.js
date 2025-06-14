import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Pass the search term back to the parent component
    };

    return (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={handleInputChange}
                style={{
                    width: "300px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                }}
            />
        </div>
    );
};

export default SearchBox;