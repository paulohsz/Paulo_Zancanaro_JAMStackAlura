import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@components/foundation/layout/Box';
import Grid from '@components/foundation/layout/Grid';
import TextField from '@components/forms/TextField';
import TextArea from '@components/forms/TextArea';
import Text from '@components/foundation/Text';
import Button from '@components/commons/Button';
import BoxWrapper from './styles';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    // console.log({ ...userInfo, [fieldName]: event.target.value });
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.email.length === 0 || userInfo.name.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.email,
          name: userInfo.name,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >

      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={12}>
            <Text
              variant="title"
              tag="h1"
              color="secondary.main"
              margin="0"
              padding="0"
            >
              Get in touch
            </Text>
          </Grid.Col>

          <Grid.Col value={12}>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              marginBottom="32px"
              textAlign="justify"
            >
              {'I\'m seeking out opportunities to collaborate with companies / agencies / individuals,\
        not just work for them.I want to bring my collective design experience to the table\
        where we can work together to solve real business-problems in a way that optimizes all\
        of our respective experience and knowledge.'}
            </Text>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <div>
              <TextField
                placeholder="Name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </div>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <div>
              <TextField
                placeholder="E-mail"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
          </Grid.Col>

          <Grid.Col
            value={12}
          >
            <div>
              <TextArea
                placeholder="Message"
                name="message"
                onChange={handleChange}
                rows={4}
                value={userInfo.message}
              />
            </div>
          </Grid.Col>
          <Grid.Col value={12}>
            <Button
              variant="secondary.main"
              type="submit"
              disabled={isFormInvalid}
              fullWidth
            >
              Submit your message
            </Button>
          </Grid.Col>

        </Grid.Row>
      </Grid.Container>

      {isFormSubmited && submissionStatus === formStates.DONE && (
      <Box>
        DONE
      </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
      >
        ERROR
      </Box>
      )}
    </form>
  );
}

export default function FormContact({ propsDoModal }) {
  return (
    <BoxWrapper
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <FormContent />
    </BoxWrapper>
  );
}

FormContact.defaultProps = {
  propsDoModal: {},
};

FormContact.propTypes = {
  propsDoModal: PropTypes.oneOfType([PropTypes.object]),
};
