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
  const [currentTab, setCurrentTab] = useState(0); /* ITEM TYPE NAV */
  const [foodItems, setFoodItems] = useState("");

  // GET MENU ITEMS FROM SERVER
  useEffect(() => {
    fetch("/api/menu", {
      method: "GET",
      "Content-type": "application/json",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFoodItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
          <p>...</p>
        )}
      </div>
    </section>
  );
}
