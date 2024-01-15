import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,  Button,getKeyValue} from "@nextui-org/react";

import {VerticalDotsIcon} from "../../../../public/assets/icons/VerticalDotsIcon";
import {columns, users} from "../../data/data";
import styles from './users.module.css'
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


function Users() {
  const classNames = React.useMemo(
    () => ({

      th: ["bg-transparent", "border-b","text-light", "border-divider", "p-3"],
      td: ["border-divider", "p-4"],
    }),
    [],
  );
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "id":
        return (
          <div className="flex flex-col">
       
          <p className="text-bold text-sm capitalize"> {`0 ${cellValue} `}</p>
  
        </div>
        );
      case "name":
        return (
          <User 
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.role}
            name={cellValue}
            
          >
        
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">

            <p className="text-bold text-sm capitalize text-default-400">{cellValue}</p>
          </div>
        );
      case "email":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm text-[var(--bg-purbel)] capitalize">{user.email}</p>
      
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
<div className="relative flex justify-center items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300 text-[var(--bg-light-gray)]" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>


                 );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className={styles.container}>
<div className={styles.header}> New Users</div>
  <Table  classNames={classNames}  shadow="none" fullWidth="true" >
      <TableHeader columns={columns} classNames="p-20 border-t-[3px] bg-[--bg-light">
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} classNames="p-20">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}

export default Users