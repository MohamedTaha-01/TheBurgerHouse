import { useState, useEffect } from "react";
import MenuLink from "./MenuLink";
import MenuItem from "./MenuItem";
import "./menu.css";

export default function Menu() {
  const menuTabs = [
    {
      type: "burger",
      name: "Hamburguesas",
    },
    {
      type: "side",
      name: "Acompañantes",
    },
    {
      type: "drink",
      name: "Bebidas",
    },
    {
      type: "dessert",
      name: "Postres",
    },
    {
      type: "sauce",
      name: "Salsas",
    },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const [foodItems, setFoodItems] = useState([
    {
      type: "burger",
      name: "Clásica",
      description:
        "La hamburguesa clásica es una opción segura para cualquier amante de las hamburguesas. Con una generosa porción de carne de res, queso cheddar fundido, lechuga fresca, tomate fresco y nuestra deliciosa salsa especial, ¡es una opción deliciosa para cualquier ocasión!",
      ingredients: [
        "Carne de res",
        "Queso cheddar",
        "Lechuga",
        "Tomate",
        "Salsa especial",
      ],
      price: 6.95,
    },
    {
      type: "burger",
      name: "Big Burger",
      description:
        "La hamburguesa Big Burger es un monstruo de carne con una generosa porción de carne de res, queso cheddar fundido, tomate fresco, lechuga crujiente y cebolla caramelizada. ¡Todos los ingredientes se combinan a la perfección en este plato que es una explosión de sabor en cada bocado!",
      ingredients: [
        "Carne de res",
        "Queso cheddar",
        "Tomate",
        "Lechuga",
        "Cebolla",
      ],
      price: 8.95,
    },
    {
      type: "burger",
      name: "Veggie Burger",
      description:
        "Nuestra hamburguesa vegetariana, la Veggie Delight, está hecha con una deliciosa mezcla de verduras frescas y proteína vegetal. Cubierta con queso feta y aderezada con nuestra salsa especial de ajo y hierbas, ¡está seguro de satisfacer a cualquier amante de la comida vegetariana!",
      ingredients: [
        "Mezcla de verduras frescas (como zanahorias ralladas, espinacas y champiñones)",
        "Proteína vegetal (como frijoles o tofu)",
        "Queso feta",
        "Salsa de ajo y hierbas",
      ],
      price: 7.95,
    },
    {
      type: "burger",
      name: "BBQ bacon",
      description:
        "La hamburguesa BBQ Bacon es una explosión de sabor ahumado y dulce. Con una generosa porción de tocino ahumado, queso cheddar fundido y nuestra deliciosa salsa BBQ, ¡está seguro de convertirse en tu nueva hamburguesa favorita!",
      ingredients: [
        "Carne de res",
        "Tocino ahumado",
        "Queso cheddar",
        "Salsa BBQ",
      ],
      price: 9.95,
    },
    {
      type: "burger",
      name: "El As de la Carne",
      description:
        "Hamburguesa con dos gruesas capas de carne de alta calidad, lechuga fresca, tomate fresco, tiras crujientes de bacon y nuestra deliciosa salsa de ajo y queso casera. ¡Una opción de lujo para los verdaderos amantes de la carne!",
      ingredients: [
        "Carne de res",
        "Lechuga",
        "Tomate",
        "Bacon",
        "Salsa de ajo y queso casera",
      ],
      price: 11.95,
    },
    {
      type: "burger",
      name: "El Smash King",
      description:
        "Hamburguesa con carne estilo smash, cebolla a la plancha, tiras crujientes de bacon y nuestro especial aderezo de tomate y cebolla. ¡Un sabor espectacular que hará reinar tu paladar!",
      ingredients: [
        "Carne de res al estilo smash",
        "Cebola",
        "Bacon",
        "Aderezo de tomate y cebolla",
      ],
      price: 9.95,
    },
    {
      type: "burger",
      name: "Pollo a la parrilla",
      description:
        "La hamburguesa de pollo a la parrilla es una opción más ligera para aquellos que buscan una opción más saludable. Con una pechuga de pollo a la parrilla y aderezada con nuestra salsa especial de ajo y hierbas, ¡es una opción deliciosa para cualquier ocasión!",
      ingredients: [
        "Pechuga de pollo a la parrilla",
        "Queso cheddar",
        "Lechuga",
        "Tomate",
        "Salsa de ajo y hierbas",
      ],
      price: 7.95,
    },
    {
      type: "burger",
      name: "Pollo picante",
      description:
        "La hamburguesa de pollo picante es para aquellos con un paladar más atrevido. Con pechuga de pollo marinada en nuestra salsa picante especial y cubierta con queso cheddar fundido, ¡está seguro de ser un plato popular!",
      ingredients: [
        "Pechuga de pollo marinada en salsa picante especial",
        "Queso cheddar",
        "Lechuga",
        "Tomate",
        "Cebolla",
      ],
      price: 8.45,
    },
    {
      type: "burger",
      name: "La Huevo-matic",
      description:
        "¡Pon un poco de sorpresa en tu hamburguesa con La Huevo-matic! Esta deliciosa hamburguesa viene con un huevo fresco y crujiente encima de nuestra carne de alta calidad y verduras frescas. El huevo se cocina a la perfección en nuestra parrilla de carbón para darle ese delicioso sabor ahumado. ¡Ven a probar La Huevo-matic hoy mismo en The Burger House y sorprende a tus amigos con esta deliciosa opción de hamburguesa con huevo! La Huevo-matic es una hamburguesa que te dejará sin aliento!",
      ingredients: [
        "Carne de res",
        "Huevo",
        "Bacon",
        "Tomate",
        "Cebolla frita",
        "Mayonesa",
      ],
      price: 8.95,
    },
    {
      type: "burger",
      name: "Infantil",
      description:
        "Una hamburguesa pequeña hecha con carne de alta calidad y verduras frescas. ¡Ven a probar nuestro menú infantil hoy mismo en The Burger House y déjate sorprender por la sonrisa de tus pequeños!",
      ingredients: ["Carne de res", "Lechuga", "Tomate", "Mayonesa"],
      price: 5.45,
    },
    {
      type: "side",
      name: "Patatas M",
      description:
        "Nuestras patatas fritas crujientes y deliciosas son el acompañamiento perfecto para cualquiera de nuestras hamburguesas o para disfrutar solas. ¡Ven a probar nuestras patatas fritas hoy mismo en The Burger House!",
      ingredients: [],
      price: 2,
    },
    {
      type: "side",
      name: "Patatas XL",
      description:
        "Nuestras patatas fritas crujientes y deliciosas son el acompañamiento perfecto para cualquiera de nuestras hamburguesas o para disfrutar solas. ¡Ven a probar nuestras patatas fritas hoy mismo en The Burger House!",
      ingredients: [],
      price: 2.75,
    },
    {
      type: "side",
      name: "Patatas gajo M",
      description:
        "Nuestras patatas de gajo son el acompañamiento perfecto para cualquiera de nuestras hamburguesas o para disfrutar solas. ¡Ven a probar nuestras patatas de gajo hoy mismo en The Burger House!",
      ingredients: [],
      price: 2,
    },
    {
      type: "side",
      name: "Patatas gajo XL",
      description:
        "Nuestras patatas de gajo son el acompañamiento perfecto para cualquiera de nuestras hamburguesas o para disfrutar solas. ¡Ven a probar nuestras patatas de gajo hoy mismo en The Burger House!",
      ingredients: [],
      price: 2.75,
    },
    {
      type: "side",
      name: "Cubo de nuggets (12 Uds.)",
      description:
        "Nuestro cubo de nuggets es la opción perfecta para los amantes de la comida rápida. Estos nuggets crujientes y deliciosos están hechos con pollo de alta calidad y se fríen a la perfección para darles ese sabor crujiente y delicioso. ¡Ven a probar nuestro cubo de nuggets hoy mismo en The Burger House!",
      ingredients: [],
      price: 6.5,
    },
    {
      type: "side",
      name: "Cubo de alitas (8 Uds.)",
      description:
        "Nuestro cubo de alitas es la opción perfecta para los amantes de la comida rápida. Estas alitas crujientes y deliciosas están hechas con pollo de alta calidad y se fríen a la perfección para darles ese sabor crujiente y delicioso. ¡Ven a probar nuestro cubo de alitas hoy mismo en The Burger House!",
      ingredients: [],
      price: 8.5,
    },
    {
      type: "side",
      name: "Ensalada",
      description:
        "Nuestra ensalada fresca y crujiente es la opción perfecta para aquellos que buscan algo ligero y saludable. Esta ensalada viene con una mezcla de verduras frescas, como lechuga, tomate y pepino, y se sirve con nuestra deliciosa vinagreta casera. También puedes añadir proteína a tu ensalada con nuestras opciones de pollo o tofu. ¡Ven a probar nuestra ensalada hoy mismo en The Burger House y siente el poder de la verdura fresca!",
      ingredients: [],
      price: 6,
    },
    {
      type: "drink",
      name: "Coca Cola",
      description: "",
      ingredients: [],
      price: 2.95,
    },
    {
      type: "drink",
      name: "Coca Cola Zero",
      description: "",
      ingredients: [],
      price: 2.95,
    },
    {
      type: "drink",
      name: "Fanta",
      description: "",
      ingredients: [],
      price: 2.95,
    },
    {
      type: "drink",
      name: "Fanta Zero",
      description: "",
      ingredients: [],
      price: 2.95,
    },
    {
      type: "drink",
      name: "Nestea",
      description: "",
      ingredients: [],
      price: 3,
    },
    {
      type: "drink",
      name: "Agua",
      description: "",
      ingredients: [],
      price: 1.5,
    },
    {
      type: "dessert",
      name: "Sundae de helado",
      description: "Una opción clásica y siempre popular",
      ingredients: [],
      price: 5,
    },
    {
      type: "dessert",
      name: "Galletas y helado",
      description:
        "Una opción más ligera que el sundae, pero igualmente deliciosa.",
      ingredients: [],
      price: 5,
    },
    {
      type: "dessert",
      name: "Batido",
      description: "Una opción fresca y ligera para los días calurosos",
      ingredients: [],
      price: 5,
    },
    {
      type: "dessert",
      name: "Tiramisú",
      description:
        "Capas de bizcocho empapado en café, crema de mascarpone y cacao en polvo.",
      ingredients: [],
      price: 5,
    },
    {
      type: "sauce",
      name: "Ketchup",
      description:
        "¡No te pierdas nuestro ketchup casero con un toque de especias para acompañar tus patatas",
      ingredients: [],
      price: 1.2,
    },
    {
      type: "sauce",
      name: "Salsa barbacoa",
      description:
        "¡Lleva tus acompañantes al siguiente nivel con nuestra deliciosa salsa barbacoa casera!",
      ingredients: [],
      price: 1.5,
    },
    {
      type: "sauce",
      name: "Salsa de ajo y hierbas",
      description: "",
      ingredients: [],
      price: 1.5,
    },
  ]);

  useEffect(() => {
    // fetch
  }, []);

  return (
    <section className="menu">
      <div className="menu-nav">
        <div className="menu-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 48 48"
            onClick={() => {
              if (currentTab === 0) {
                setCurrentTab(menuTabs.length - 1);
              } else {
                setCurrentTab(currentTab - 1);
              }
            }}
          >
            <path d="M18.6 42.6 1.05 25.05q-.25-.25-.35-.5Q.6 24.3.6 24q0-.3.1-.55.1-.25.35-.5L18.6 5.4q.55-.55 1.4-.55.85 0 1.4.55.6.6.6 1.425 0 .825-.6 1.425L5.65 24 21.4 39.75q.6.6.575 1.425-.025.825-.575 1.375-.6.6-1.425.6-.825 0-1.375-.55Z" />
          </svg>
        </div>
        <ul className="menu-links">
          <MenuLink
            tabName="Postres"
            tabNumber={3}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <MenuLink
            tabName="Salsas"
            tabNumber={4}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <MenuLink
            tabName="Hamburguesas"
            tabNumber={0}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <MenuLink
            tabName="Acompañantes"
            tabNumber={1}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <MenuLink
            tabName="Bebidas"
            tabNumber={2}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </ul>
        <div className="menu-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 48 48"
            onClick={() => {
              if (currentTab === menuTabs.length - 1) {
                setCurrentTab(0);
              } else {
                setCurrentTab(currentTab + 1);
              }
            }}
          >
            <path d="M13.8 42.45q-.55-.6-.575-1.4-.025-.8.575-1.4L29.55 23.9 13.8 8.15q-.55-.55-.575-1.375-.025-.825.575-1.425.55-.6 1.375-.625Q16 4.7 16.6 5.3l17.55 17.55q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5L16.6 42.5q-.55.55-1.375.55t-1.425-.6Z" />
          </svg>
        </div>
      </div>
      <div className="menu-item-wrapper">
        {foodItems.length > 0 ? (
          foodItems.map((foodItem, i) => {
            if (foodItem.type === menuTabs[currentTab].type)
              return <MenuItem key={`item${i}`} foodItem={foodItem} />;
            else return null;
          })
        ) : (
          <p>Error 500</p>
        )}
      </div>
    </section>
  );
}
