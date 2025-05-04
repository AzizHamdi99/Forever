import React, { useState } from 'react';
import { assetsAdmin } from '../assets/admin_assets/assets';
import { useAdminStore } from '../stores/useAdminStore';

function AddProduct() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
const{addProduct}=useAdminStore()

  const [product, setProduct] = useState({
    images: [null,null,null,null], 
    name: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    sizes: [],
    bestseller: false,
  });


  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setProduct((prev) => {
        const newImages = [...prev.images];
        newImages[index] = reader.result; 
        return { ...prev, images: newImages };
      });
    };
  };

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, 
    }));
  };

 
  const handleSizeClick = (size) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size) 
        : [...prev.sizes, size], 
    }));
  };
  console.log(product)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields before submitting
    if (!product.name || !product.description || !product.category || !product.subcategory || !product.price || product.sizes.length === 0 || product.images.every((img) => !img)) {
      alert("All fields are required!");
      return;
    }

    try {
      await addProduct({
        ...product,
        price: parseFloat(product.price), // Ensure price is a number
      });

      // Reset form after submission
      setProduct({
        images: [null, null, null, null],
        name: "",
        description: "",
        category: "",
        subcategory: "",
        price: "",
        sizes: [],
        bestseller: false,
      });

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to add product. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 ml-10">
      {/* Upload Images */}
      <div>
        <p>Upload Images</p>
        <div className="flex gap-4 my-3">
          {product.images.map((img, index) => (
            <label key={index} className="cursor-pointer">
              <img
                className="w-20 h-20 object-cover border border-gray-300 rounded-md"
                src={img || assetsAdmin.upload_area}
                alt="Upload"
              />
              <input
                type="file"
                accept="image/*"
                className="hidden" 
                onChange={(e) => handleImageUpload(e, index)}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div>
        <p>Product Name</p>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          className="text-gray-500 my-2 px-3 py-2 w-[400px] outline-none border border-gray-400"
          type="text"
          placeholder="Type here"
        />
      </div>

      {/* Product Description */}
      <div>
        <p>Product Description</p>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="text-gray-500 my-2 px-3 py-2 w-[400px] outline-none border border-gray-400"
          placeholder="Write content here"
        />
      </div>

      {/* Category & Subcategory */}
      <div className="flex gap-6">
        <div>
          <p>Product Category</p>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="text-gray-500 my-2 px-3 py-1 w-32 outline-none border border-gray-400"
          >
            <option value=""> Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p>Sub Category</p>
          <select
            name="subCategory"
            value={product.subcategory}
            onChange={handleChange}
            className="text-gray-500 my-2 px-3 py-1 outline-none border border-gray-400"
          >
            <option value=""> Subcategory</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input
            name="price"
            value={product.price}
            onChange={handleChange}
            className="text-gray-500 my-2 px-3 py-1 w-32 outline-none border border-gray-400"
            type="number"
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-1">
        <p>Product Sizes</p>
        <div className="flex gap-3 mt-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleSizeClick(size)}
              className={`p-1 w-10 ${
                product.sizes.includes(size) ? "bg-[#cda1a1] text-white" : "bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex gap-2 my-4">
        <input
          name="bestseller"
          checked={product.bestseller}
          onChange={handleChange}
          type="checkbox"
        />
        <p>Add to Bestseller</p>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-black text-white py-3 px-10 mt-3">Add</button>
    </form>
  );
}

export default AddProduct;
