import { Button, Form, Input, Row, Tooltip } from 'antd';
import { useUserStore } from 'stores';
import { useState } from 'react';
import { useConfirmShareToken } from '../../hooks';
import { Container } from './ShareBoardForm.styled';
import { initialValues, overlayStyle } from './ShareBoardForm.schema';
import { ShareBoardFormInputs } from './ShareBoardForm.enum';
import { ShareBoardFormType } from './ShareBoardForm.types';

export const ShareBoardForm = () => {
  const [form] = Form.useForm();
  const { id } = useUserStore();

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { mutateAsync: confirm } = useConfirmShareToken();

  const handleSubmit = (values: ShareBoardFormType) => {
    confirm({ ...values, user_id: id });
    form.resetFields();
  };

  return (
    <Tooltip
      open={isFormVisible}
      overlayInnerStyle={overlayStyle}
      onOpenChange={() => setIsFormVisible((prev) => !prev)}
      title={
        <Container>
          <Form
            id='form'
            layout='vertical'
            form={form}
            onFinish={handleSubmit}
            initialValues={initialValues}
          >
            <Row gutter={[0, 10]}>
              <Form.Item name={ShareBoardFormInputs.TOKEN}>
                <Input placeholder='Add token' />
              </Form.Item>
              <Button
                onClick={() => setIsFormVisible(false)}
                type='primary'
                form='form'
                htmlType='submit'
                block
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
      }
      trigger='click'
      placement='bottomLeft'
    >
      <Button>Share board</Button>
    </Tooltip>
  );
};
