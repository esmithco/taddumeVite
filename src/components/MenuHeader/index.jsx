import React, { useState } from "react";
import { menuList } from "../../assets/data/menuList";
import "./MenuHeader.css";

function MenuHeader() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const showSubMenu = (index) => {
    setActiveSubMenu(index);
  };
  const hideSubMenu = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav className="menu">
      <ul className="menu-ul">
        {menuList.map((menuItem, index) => (
          <li
            className="menu-ul--li"
            key={index}
            onMouseEnter={() => showSubMenu(index)}
            onMouseLeave={hideSubMenu}
          >
            <a className="menu-ul--li---a">{menuItem.name}</a>
            {activeSubMenu === index && (
              <nav className="subMenu-nav">
                <ul>
                  {menuItem.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.enlHref}>{link.enlName}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { MenuHeader };
