export const properties = [
  {
    id: 1,
    title: "Ocean View Penthouse",
    location: "Camps Bay",
    price: 4500,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
    available: true,
  },
  {
    id: 2,
    title: "Heritage Cottage",
    location: "Bo-Kaap",
    price: 1800,
    type: "House",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600",
    available: true,
  },
  {
    id: 3,
    title: "Modern Waterfront Studio",
    location: "V&A Waterfront",
    price: 3200,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600",
    available: false,
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Constantia",
    price: 5500,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
    available: true,
  },
  {
    id: 5,
    title: "City Centre Loft",
    location: "City Bowl",
    price: 2200,
    type: "Loft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
    available: true,
  },
  {
    id: 6,
    title: "Beachfront Bungalow",
    location: "Clifton",
    price: 6800,
    type: "House",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
    available: false,
  },
  {
    id: 7,
    title: "Garden Flat",
    location: "Rondebosch",
    price: 1400,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    available: true,
  },
  {
    id: 8,
    title: "Seaside Villa",
    location: "Llandudno",
    price: 7200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600",
    available: true,
  },
];

export function getPriceRange(propertyList) {
  const prices = propertyList.map((p) => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
