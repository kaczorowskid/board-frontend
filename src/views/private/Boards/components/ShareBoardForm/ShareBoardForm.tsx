import { Button, Form, Input, Row, Tooltip } from 'antd';
import { useUserStore } from 'stores';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConfirmShareToken } from '../../hooks';
import { Container } from './ShareBoardForm.styled';
import { initialValues, overlayStyle } from './ShareBoardForm.schema';
import { ShareBoardFormInputs } from './ShareBoardForm.enum';
import { ShareBoardFormType } from './ShareBoardForm.types';

export const ShareBoardForm = (): JSX.Element => {
  const [form] = Form.useForm();
  const { id } = useUserStore();
  const { t } = useTranslation();

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { mutateAsync: confirm } = useConfirmShareToken();

  const handleSubmit = (values: ShareBoardFormType): void => {
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
                <Input placeholder={t('private.boards.add-token')} />
              </Form.Item>
              <Button
                onClick={() => setIsFormVisible(false)}
                type='primary'
                form='form'
                htmlType='submit'
                block
              >
                {t('common.submit')}
              </Button>
            </Row>
          </Form>
        </Container>
      }
      trigger='click'
      placement='bottomLeft'
    >
      <Button>{t('private.boards.share-board')}</Button>
    </Tooltip>
  );
};
