import cs from "./PhoneMenu.module.scss";
import { ReactNode, useEffect, useMemo, useState, useContext } from "react";
import classNames from "classnames";
import { MenuItemsType } from "../../../components/MenuItems/types";
import { MenuContext } from "../context";
import { styled } from "styled-components";
// import { DropdownMenuItemsDetails } from "../../../components/DropdownMenu/types";

interface Props {
  links: MenuItemsType[];
}

interface LinkData {
  label: string | ReactNode;
  href: string;
}

export const StyledBottomNavItem = styled.button`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export default function PhoneMenu(props: Props) {
  const { linkComponent } = useContext(MenuContext);
  const [isOpen, setOpen] = useState(false);

  const list = useMemo(() => {
    const arr: LinkData[] = [];
    for (let i = 0; i < props.links.length; i++) {
      const item = props.links[i];
      if (!item.items || item.items.length === 0) {
        arr.push({ label: item.label, href: item.href });
      } else {
        for (let j = 0; j < item.items.length; j++) {
          const itemSon = item.items[j];
          arr.push({ label: itemSon.label, href: itemSon.href || "#" });
        }
      }
    }
    return arr;
  }, [props.links]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={cs.root}>
      <img
        className={cs.iconMenu}
        src={isOpen ? "/ztd/home/close.png" : "/ztd/home/menu.png"}
        onClick={() => setOpen(!isOpen)}
      />

      <div className={classNames(cs.mask, { [cs.show]: isOpen })}>
        <div className={cs.list}>
          {list.map((item: LinkData, index: number) => {
            return (
              <StyledBottomNavItem
                as={linkComponent}
                className={cs.linkItem}
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <img src="/ztd/home/new/chevron-right@2x.png" />
              </StyledBottomNavItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
