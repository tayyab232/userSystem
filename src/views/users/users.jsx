import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import { modalActions } from "../../redux/actions/modal.actions/modal.actions";
import CustomModal from "../../shared/components/Modal/Modal";
import DeleteModal from "../../shared/components/deleteModal/deleteModal";
import { UserActionType } from "../../system/constants/GlobalConstants";
import ModalUsers from "../modal/modalUsers/modalUsers";
import ReactTable from "../../shared/components/reactTable/reactTable";
import ModalDelete from "../modal/modalDelete/modalDelete";
import { userGroupActions } from "../../redux/actions/userGroup.actions/userGroup.actions";
import { userActions } from "../../redux/actions/user.actions/user.actions";
import { changeTableSortIcons } from "../../shared/utilities/utilities";
import { CSVLink } from "react-csv";
import { exportToExcel } from "../../shared/utilities/utilities";

import { getCurrentUserLocalStorage } from "../../shared/utilities/systemUtilities/storageUtilites/storageUtilities";

const Users = (props) => {
  const currentUser = getCurrentUserLocalStorage();

  const [exportHeader, setExportHeaders] = useState([]);

  const headers = [
    {
      id: "firstName",
      name: "First Name",
      selector: (row) => row.firstName,
      reorder: true,
      sortable: true,
    },
    { 
      id: "lastName",
      name: "Last Name",
      selector: (row) => row.lastName,
      reorder: true,
      sortable: true,
    },
    {
      id: "email",
      name: "Email",
      selector: (row) => row.email,
      reorder: true,
      sortable: true,
    },
    {
      id: "userGroupName",
      name: "User Group Name",
      selector: (row) => row.userGroupName,
      reorder: true,
      sortable: true,
    },
    {
      id: "phoneNumber",
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      reorder: true,
      sortable: true,
    },

    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender,
      reorder: true,
      sortable: true,
    },
    {
      id: "actions",
      name: "Actions",
      cell: (row) => (
        <div>
          <i
            class="fa-solid fa-eye pointer me-2 fs-12"
            onClick={() => {
              onSetShow();
              setactionType({
                rowData: {
                  row: row,
                  action: UserActionType.Details,
                  heading: "View User",
                  size: "lg",
                },
              });
            }}
          />{" "}
          <i
            className="fa-solid fa-trash pointer me-2 colorText  fs-12"
            onClick={() => {
              onSetShow();
              setactionType({
                rowData: {
                  row: row,
                  action: UserActionType.Delete,
                  heading: "Delete User",
                  size: "md",
                },
              });
            }}
          ></i>
          <i
            class="fa-solid fa-pen-to-square pointer fs-12"
            onClick={() => {
              onSetShow();
              setactionType({
                rowData: {
                  row: row,
                  action: UserActionType.Update,
                  heading: "Update User",
                  size: "lg",
                },
              });
            }}
          ></i>
        </div>
      ),
    },
  ];
  const [columns, setColumns] = useState(headers);
  const [userGroupList, setuserGroupList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [actionType, setactionType] = useState({
    rowData: {
      action: "",
      size: "",
      heading: "",
    },
  });

  const onSort = (sortedColumn) => {
    setColumns(changeTableSortIcons(columns, sortedColumn));
  };

  const onSetShow = () => {
    props.handleModal();
  };

  useEffect(() => {
    const updatedExportHeaders = headers.map((h) => ({
      key: h.id,
      label: h.name,
    }));
    setExportHeaders(updatedExportHeaders);
  }, []);

  useEffect(() => {
    setuserGroupList(props.userGroupNameList.userGroupList);
    setUserList(props.userList.userList);
  }, [props.userGroupNameList, props.userList]);

  useEffect(() => {
    if (!props.modalOpen) {
      props.getUserGroupNameList({ currentUserId: currentUser.data.id });
      props.getUserList({ currentUserId: currentUser.data.id });
    }
  }, [props.modalOpen]);

  return (
    <div>
      <div className="fs-3 fw-bold default-color-two mb-5">Users</div>
      <div className="d-flex justify-content-end mb-5">
        <div class="dropdown">
          <button
            class="creaete-Button btn btn-primary   dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Export
          </button>
          <ul class="dropdown-menu">
            <li>
              <p class="dropdown-item">
                <CSVLink
                  data={userList}
                  headers={exportHeader.slice(0, -1)}
                  className="csv-item"
                  filename={"userData.csv"}
                  target="_blank"
                >
                  Export CSV
                </CSVLink>{" "}
              </p>
            </li>
            <li
              onClick={() =>
                exportToExcel(userList, headers.slice(0, -1), "UsersExcelData")
              }
            >
              <p class="dropdown-item pointer">Export Excel</p>
            </li>
          </ul>
        </div>
        <Button
          onClick={() => {
            onSetShow();
            setactionType({
              rowData: {
                action: UserActionType.Create,
                heading: "Create User",
                size: "lg",
              },
            });
          }}
          className="creaete-Button btn btn-primary  "
          type="submit"
        >
          Create User
        </Button>
      </div>
      <ReactTable
        columns={columns}
        items={userList}
        onSort={onSort}
        progressPending={userList.length <= 0 ? false : false}
      />

      {(actionType.rowData.action === UserActionType.Create ||
        actionType.rowData.action === UserActionType.Update ||
        actionType.rowData.action === UserActionType.Details) && (
        <CustomModal
          size={actionType.rowData.size}
          centered={true}
          scrollable={true}
          setShow={onSetShow}
          show={props.modalOpen}
          heading={actionType.rowData.heading}
        >
          <ModalUsers
            row={actionType.rowData.row}
            action={actionType.rowData.action}
            onHide={onSetShow}
            userData={currentUser}
            userGroupList={userGroupList}
          />
        </CustomModal>
      )}

      {actionType.rowData.action === UserActionType.Delete && (
        <DeleteModal
          size={actionType.rowData.size}
          centered={true}
          scrollable={true}
          setShow={onSetShow}
          show={props.modalOpen}
          heading={actionType.rowData.heading}
        >
          <ModalDelete
            row={actionType.rowData.row}
            action={actionType.rowData.action}
            onHide={onSetShow}
            userData={currentUser}
          />
        </DeleteModal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalOpen: state.modalReducer.modalOpen,
  userGroupNameList: state.userGroupReducer,
  userList: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleModal: () => dispatch(modalActions.handleModal()),
  getUserGroupNameList: (data) =>
    dispatch(userGroupActions.getUsersGroup(data)),
  getUserList: (data) => dispatch(userActions.getUsers(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
