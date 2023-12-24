import React from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <p
      >
        1st menu item 1st menu item 1st menu item 1st menu item
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <p
      >
        1st menu item 1st menu item 1st menu item 1st menu item
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p
      >
        1st menu item 1st menu item 1st menu item 1st menu item
      </p>
    )
  }
];

function SongList() {
  return (
    <div className="bg-white rounded-lg w-full px-2 py-1 flex items-center">
      <div className="grow flex items-center gap-3">
        <Dropdown
          placement="bottomLeft"
          menu={{
            items,
            style: { marginTop: "5px" },
            onClick:(l)=>console.log(l)
          }}
          trigger={["click"]}
        >
          <CiMenuBurger size={21} className="hover:cursor-pointer" />
        </Dropdown>
        <p>Song title</p>
      </div>

      <div className="self-end">
        <RiShareBoxLine size={23} className="hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default SongList;
