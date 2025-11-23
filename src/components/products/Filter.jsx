import { Button, FormControl, InputLabel, Select, MenuItem, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { FiRefreshCw, FiSearch } from "react-icons/fi";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosRefreshCircle } from "react-icons/io";

const Filter = () => {

    const categories = [
        { categoryID: 1, categoryName: "Electronics" },
        { categoryID: 2, categoryName: "Clothing" },
        { categoryID: 3, categoryName: "Furniture" },
        { categoryID: 4, categoryName: "Books" },
        { categoryID: 5, categoryName: "Foods" },
    ]; 

    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchterm] = useState("");
    
    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";
        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchterm(currentSearchTerm);
    }, [searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                searchParams.set("keyword", searchTerm);
            } else {
                searchParams.delete("keyword");
            }
            navigate(`${pathname}?${searchParams.toString()}`);
        }, 700);

        return () => {
            clearTimeout(handler);
        };
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathname}?${params.toString()}`);
        setCategory(event.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => {
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            params.set("sortby", newOrder);
            navigate(`${pathname}?${params.toString()}`);
            return newOrder;
        });
    };

    const handleClearFilters = () => {
        navigate({ pathname : window.location.pathname });
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* Search */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchterm(e.target.value)}
                    className="border border-gray-300 bg-gray-100 text-gray-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 transition-colors"
                />
                <FiSearch className="absolute left-3 text-gray-700" size={20} />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 items-center">
                {/* Category Select */}
                <FormControl variant="outlined" size="small">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                        className="min-w-[120px] bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    >
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((item) => (
                            <MenuItem key={item.categoryID} value={item.categoryID}>
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Tooltip title={`Sorted by price: ${sortOrder}`}>
                    <Button
                        variant="contained"
                        onClick={toggleSortOrder}
                        className="flex items-center gap-2 h-10 bg-gray-300 text-gray-800 hover:bg-gray-400"
                    >
                        Sort By
                        {sortOrder === "asc" ? <FaArrowUpWideShort size={20} /> : <FaArrowDownShortWide size={20} />}
                    </Button>
                </Tooltip>

                {/* Clear Filter */}
                <button
                    className="flex items-center gap-2 bg-gray-300 text-gray-800 px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-400 focus:outline-none"
                    onClick={handleClearFilters}
                >
                    <IoIosRefreshCircle className="font-semibold" size={16} />
                    <span className="font-semibold">Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;
