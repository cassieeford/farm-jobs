import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.less";

const ModalDisplay = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const add = props.a;
  const bus = props.businesses;
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ background: "#5b784f", borderColor: "green" }}
      >
        See Full Job Description
      </Button>
      <Modal
        title={add.adtitle}
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1000}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        key={add.id}
      >
        <p>Job Details:</p>
        <p>Specialisation: {add.adfield}</p>

        <p>Location: {add.joblocation}</p>
        <p>$$$:{add.wage}</p>
        <p>Date Posted: {add.datelisted}</p>
        <p>Ad Closing Date: {add.adclosingdate}</p>
        <p>Contract Start Date:{add.contractstartdate}</p>
        <p>Contract Length:{add.contractlength}</p>
        <p>Job Details:{add.adinfo}</p>
        <p>Contact:</p>
        <p>{bus[0].name}</p>
        <p>{bus[0].companytext}</p>
        <p>{bus[0].contactname}</p>
        <p>{bus[0].contactnum}</p>
        <p>{bus[0].contactemail}</p>
      </Modal>
    </>
  );
};

export default ModalDisplay;
