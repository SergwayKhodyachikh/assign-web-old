import React from 'react';
import { Form, Formik } from 'formik';
import { MdMailOutline } from 'react-icons/md';
import { InputLabeledText } from 'components/common/input-labeled-text/index';
import PasswordRecoveryFormButtonWrapper from './password-recovery-form-button-wrapper.style';
import Link from 'next/link';
import { PasswordRecoveryApproveButton } from './password-recovery-form-approve-button.style';
import { PasswordRecoveryCancelButton } from './password-recovery-form-cancel-button.style';
import { PasswordRecoveryFormValues } from './password-recovery-form-values.interface';
import { validationSchema } from './password-recovery-form-schema';

const PasswordRecoveryForm: React.FC = () => {
  return (
    <Formik<PasswordRecoveryFormValues>
      validationSchema={validationSchema}
      initialValues={{ email: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form autoComplete="off" noValidate>
            <InputLabeledText
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <PasswordRecoveryFormButtonWrapper>
              <Link href="/login" passHref>
                <PasswordRecoveryCancelButton variant="outlined" color="primary">
                  cancel
                </PasswordRecoveryCancelButton>
              </Link>

              <PasswordRecoveryApproveButton
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                send recovery code
              </PasswordRecoveryApproveButton>
            </PasswordRecoveryFormButtonWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PasswordRecoveryForm;