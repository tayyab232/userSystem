import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import ReactTable from "../../shared/components/reactTable/reactTable";
import { CSVLink } from "react-csv";

import { modalActions } from "../../redux/actions/modal.actions/modal.actions";
import CustomModal from "../../shared/components/Modal/Modal";
import DeleteModal from "../../shared/components/deleteModal/deleteModal";
import { UserActionType } from "../../system/constants/GlobalConstants";
import { actionFor } from "../../system/constants/GlobalConstants";
import ModalUserGroup from "../modal/modalUserGroup/modalUserGroup";
import ModalDelete from "../modal/modalDelete/modalDelete";
import { userGroupActions } from "../../redux/actions/userGroup.actions/userGroup.actions";
import { changeTableSortIcons } from "../../shared/utilities/utilities";
import { exportToExcel } from "../../shared/utilities/utilities";
import { getCurrentUserLocalStorage } from "../../shared/utilities/systemUtilities/storageUtilites/storageUtilities";

const UserGroup = (props) => {
  const currentUser = getCurrentUserLocalStorage();

  const headers = [
    {
      id: "id",
      name: "Id",
      selector: (row) => row.id,
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
                  heading: "View User Group",
                  size: "md",
                },
              });
            }}
          ></i>
          <i
            className="fa-solid fa-trash pointer me-2 colorText fs-12"
            onClick={() => {
              onSetShow();
              setactionType({
                rowData: {
                  row: row,
                  action: UserActionType.Delete,
                  heading: "Delete User Group",
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
                  heading: "Update User Group",
                  size: "md",
                },
              });
            }}
          ></i>
        </div>
      ),
    },
  ];

  const [exportHeader, setExportHeaders] = useState([]);
  const [columns, setColumns] = useState(headers);
  const [userGroupList, setuserGroupList] = useState([]);
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
  }, [props.userGroupNameList]);

  useEffect(() => {
    if (!props.modalOpen) {
      props.getUserGroupNameList({ currentUserId: currentUser.data.id });
    }
  }, [props.modalOpen]);

  return (
    <div>
      <div className="fs-3 fw-bold default-color-two mb-5">User Group</div>
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
                  data={userGroupList}
                  headers={exportHeader.slice(0, -1)}
                  className="csv-item"
                  filename={"userGroupData.csv"}
                  target="_blank"
                >
                  Export CSV
                </CSVLink>
              </p>
            </li>
            <li
              onClick={() =>
                exportToExcel(
                  userGroupList,
                  headers.slice(0, -1),
                  "UserGroupExcelData"
                )
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
                heading: "Create User Group",
                size: "md",
              },
            });
          }}
          className="creaete-Button btn btn-primary  "
          type="submit"
        >
          Create User Group
        </Button>
      </div>
      <ReactTable
        columns={columns}
        items={userGroupList}
        onSort={onSort}
        progressPending={userGroupList.length <= 0 ? false : false}
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
          <ModalUserGroup
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
            dataFor={actionFor.USER_GROUP_PAGE}
          />
        </DeleteModal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalOpen: state.modalReducer.modalOpen,
  userGroupNameList: state.userGroupReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleModal: () => dispatch(modalActions.handleModal()),
  getUserGroupNameList: (data) =>
    dispatch(userGroupActions.getUsersGroup(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserGroup);
