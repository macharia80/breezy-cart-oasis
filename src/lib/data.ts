
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Minimalist Chair",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Furniture",
    description: "A sleek, minimalist chair designed for both comfort and style. Perfect for modern living spaces and offices.",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Wooden Coffee Table",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Furniture",
    description: "Handcrafted wooden coffee table with a smooth finish. Features ample surface area and a lower shelf for storage.",
    rating: 4.7,
    reviews: 95
  },
  {
    id: 3,
    name: "Ceramic Plant Pot",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Home Decor",
    description: "Elegant ceramic pot for indoor plants. Available in multiple colors and sizes to match your home decor.",
    rating: 4.3,
    reviews: 67
  },
  {
    id: 4,
    name: "Modern Floor Lamp",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Lighting",
    description: "Stylish floor lamp with adjustable height and direction. Energy-efficient LED bulb included.",
    rating: 4.6,
    reviews: 52
  },
  {
    id: 5,
    name: "Natural Linen Cushion",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1584705982168-3a4536b7631c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Home Decor",
    description: "Soft, natural linen cushion with a minimalist design. Perfect for sofas, chairs, or beds.",
    rating: 4.4,
    reviews: 43
  },
  {
    id: 6,
    name: "Pendant Ceiling Light",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Lighting",
    description: "Modern pendant ceiling light with a metal finish. Adds a contemporary touch to any room.",
    rating: 4.8,
    reviews: 37
  },
  {
    id: 7,
    name: "Wall-Mounted Bookshelf",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Furniture",
    description: "Stylish wall-mounted bookshelf with multiple compartments. Perfect for displaying books and decorative items.",
    rating: 4.2,
    reviews: 29
  },
  {
    id: 8,
    name: "Glass Vase Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1501613814515-c0dc8207c960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Home Decor",
    description: "Set of three glass vases in varying sizes. Perfect for fresh or dried flowers.",
    rating: 4.5,
    reviews: 24
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-44e3e9919c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];
