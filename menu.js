// Datos del menú. Para poner precios: cambia price: null por el número, ej. price: 8.50
window.MENU = {
  currency: "$",
  tagline: { es: "Come hungry, leave happy", en: "Come hungry, leave happy" },
  sections: [
    {
      id: "pancakes", color: "orange",
      name: { es: "Pancakes & French Toasts", en: "Pancakes & French Toasts" },
      items: [
        { img: "all-american", price: 7.50, name: { es: "All American Breakfast", en: "All American Breakfast" },
          desc: { es: "Pancakes dorados con mantequilla y miel de abeja, huevos revueltos cremosos y bacon crujiente.",
                  en: "Golden pancakes with butter and honey, creamy scrambled eggs and crispy bacon." } },
        { img: "banana-sesame", price: 6.50, name: { es: "Banana Sesame Crunch Pancakes", en: "Banana Sesame Crunch Pancakes" },
          desc: { es: "Pancakes esponjosos coronados con crema batida, banana fresca, crocante de sésamo y un toque de miel de abeja.",
                  en: "Fluffy pancakes topped with whipped cream, fresh banana, sesame brittle and a touch of honey." } },
        { img: "strawberry-cream", price: 6.50, name: { es: "Strawberry Cream Pancakes", en: "Strawberry Cream Pancakes" },
          desc: { es: "Pancakes esponjosos coronados con crema batida y conserva casera de fresa.",
                  en: "Fluffy pancakes topped with whipped cream and homemade strawberry preserve." } },
        { img: "blueberry-vanilla", price: 6.50, name: { es: "Blueberry Vanilla Crunch Pancakes", en: "Blueberry Vanilla Crunch Pancakes" },
          desc: { es: "Pancakes esponjosos coronados con crema batida, conserva de blueberries, crumble de vainilla y un toque de miel de abeja.",
                  en: "Fluffy pancakes topped with whipped cream, blueberry preserve, vanilla crumble and a touch of honey." } },
        { img: "creme-brulee", price: 7.50, name: { es: "Crème Brûlée French Toast", en: "Crème Brûlée French Toast" },
          desc: { es: "French toast rellena de crema estilo crème brûlée, cubierta con caramelo flameado y acompañada de crema batida, fresas, banano y blueberries.",
                  en: "French toast filled with crème brûlée–style custard, finished with torched caramel and served with whipped cream, strawberries, banana and blueberries." } }
      ]
    },
    {
      id: "bowls", color: "green",
      name: { es: "Bowls", en: "Bowls" },
      items: [
        { img: "honey-berry-bowl", price: 5.95, name: { es: "Honey Berry Bowl", en: "Honey Berry Bowl" },
          desc: { es: "Yogurt griego con banana, fresas, blueberries, granola, nueces y miel de abeja.",
                  en: "Greek yogurt with banana, strawberries, blueberries, granola, walnuts and honey." } }
      ]
    },
    {
      id: "tostadas", color: "blue",
      name: { es: "Tostadas & Croissants", en: "Toasts & Croissants" },
      items: [
        { img: "loaded-avocado", price: 7.50, name: { es: "Loaded Avocado Toast", en: "Loaded Avocado Toast" },
          desc: { es: "Pan de masa madre tostado con aguacate, mozzarella gratinada, tomate cherry, cebolla morada encurtida, huevo y verdes frescos.",
                  en: "Toasted sourdough with avocado, melted mozzarella, cherry tomatoes, pickled red onion, egg and fresh greens." } },
        { img: "mediterranea", price: 7.50, name: { es: "Tostada Mediterránea", en: "Mediterranean Toast" },
          desc: { es: "Masa madre tostada con pollo a la plancha, mozzarella gratinada, hongos, tomate cherry y albahaca fresca.",
                  en: "Toasted sourdough with grilled chicken, melted mozzarella, mushrooms, cherry tomatoes and fresh basil." } },
        { img: "bruschetta", price: 6.50, name: { es: "Bruschetta", en: "Bruschetta" },
          desc: { es: "Pan de masa madre tostado con pesto, tomates cherry, mozzarella gratinada, albahaca fresca y un toque de aceite de oliva.",
                  en: "Toasted sourdough with pesto, cherry tomatoes, melted mozzarella, fresh basil and a drizzle of olive oil." } },
        { img: "croissant-royale", price: 5.95, name: { es: "Croissant Royale", en: "Croissant Royale" },
          desc: { es: "Croissant de mantequilla relleno de omelet, jamón, tomate, lechuga y mozzarella fundida, acompañado de salsa de la casa.",
                  en: "Butter croissant filled with omelet, ham, tomato, lettuce and melted mozzarella, served with house sauce." } },
        { img: "croissant-italiano", price: 5.95, name: { es: "Croissant Italiano", en: "Italian Croissant" },
          desc: { es: "Croissant de mantequilla con jamón de pollo, pepperoni, tomate, mozzarella rallada y pesto.",
                  en: "Butter croissant with chicken ham, pepperoni, tomato, shredded mozzarella and pesto." } }
      ]
    },
    {
      id: "sandwiches", color: "red",
      name: { es: "Sandwiches & Burgers", en: "Sandwiches & Burgers" },
      items: [
        { img: "chicken-wrap", price: 7.50, name: { es: "Crunchy Chicken Wrap", en: "Crunchy Chicken Wrap" },
          desc: { es: "Wrap tostado relleno de pollo crispy, lechuga fresca, tomate y salsa de la casa, acompañado de papas fritas sazonadas.",
                  en: "Toasted wrap filled with crispy chicken, fresh lettuce, tomato and house sauce, served with seasoned fries." } },
        { img: "house-burger", price: 9.50, name: { es: "Malabar House Burger", en: "Malabar House Burger" },
          desc: { es: "Combinación de carne de res 100% Angus y cerdo, queso, cebolla caramelizada, tomate, lechuga y salsa de la casa, acompañada de papas fritas sazonadas.",
                  en: "Blend of 100% Angus beef and pork, cheese, caramelized onion, tomato, lettuce and house sauce, served with seasoned fries." } },
        { img: "morning-burger", price: 7.50, name: { es: "Morning Burger", en: "Morning Burger" },
          desc: { es: "Pan artesanal con huevos revueltos, bacon crujiente, queso amarillo fundido, tomate, lechuga y salsa de la casa, coronado con microgreens.",
                  en: "Artisan bun with scrambled eggs, crispy bacon, melted American cheese, tomato, lettuce and house sauce, topped with microgreens." } }
      ]
    },
    {
      id: "clasicos", color: "purple",
      name: { es: "Clásicos", en: "Classics" },
      items: [
        { img: "sabores-panama", price: 7.50, name: { es: "Sabores de Panamá", en: "Flavors of Panama" },
          desc: { es: "Dos hojaldras doradas, huevos al gusto y salchichitas guisadas en salsa criolla.",
                  en: "Two golden hojaldras (Panamanian fry bread), eggs your way and sausages stewed in creole sauce." } },
        { img: "panama-classic", price: 7.50, name: { es: "Panamá Classic", en: "Panama Classic" },
          desc: { es: "Dos tortillas de maíz con queso amarillo fundido, huevo frito, cebolla morada encurtida y microgreens, acompañadas de carne guisada encebollada.",
                  en: "Two corn tortillas with melted American cheese, fried egg, pickled red onion and microgreens, served with stewed beef and onions." } },
        { img: "huevos-rancheros", price: 7.50, name: { es: "Huevos Rancheros", en: "Huevos Rancheros" },
          desc: { es: "Huevos cocinados en salsa de tomate especiada, terminados con microgreens y acompañados de tostadas de masa madre.",
                  en: "Eggs cooked in spiced tomato sauce, finished with microgreens and served with sourdough toast." } }
      ]
    }
  ]
};
