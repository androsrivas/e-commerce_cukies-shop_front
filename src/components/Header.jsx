import React from "react";
import Logo from "../components/atoms/Logo";
import { Link } from "react-router-dom";
import UserActions from "../components/molecules/UserActions";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


function Header() {
  return (
    <header className="flex justify-between p-5">
        <Logo name="Cukies Shop" to="/"/>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Inicio</NavigationMenuLink>
              <NavigationMenuTrigger>Tienda</NavigationMenuTrigger>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Sobre Cukies</NavigationMenuLink>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Contacto</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <UserActions className="flex p-2 gap-2"/>
    </header>
  )
}

export default Header