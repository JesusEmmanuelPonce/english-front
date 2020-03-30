import React, { useState } from 'react';
import './main.css';
import { Modal, Button, Tooltip  } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

const Main = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
      };

    const handleOk = e => {
        setVisible(false);
      };

    const handleCancel = e => {
        setVisible(false);
      };

    return(
        <div className="container-main-pb">
            <div className="container-help-pb">
                <Tooltip title="Ayuda">
                    <Button
                        onClick={showModal}
                        shape="circle"
                        type="dashed"
                    >
                        <QuestionOutlined/>
                    </Button>
                </Tooltip>
            </div>
            <div className="container-img-pb">
                <img className="img-main" src="https://english-pb.s3.amazonaws.com/bienvenido.png" alt="Welcome"/>
            </div>
            <Modal
                title="Ayuda"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <p>Escoge una opción</p>
            </Modal>
        </div>
    )
}

export default Main;