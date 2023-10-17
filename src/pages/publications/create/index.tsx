import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { publicationValidationSchema } from 'validationSchema/publications';
import { UserInterface } from 'interfaces/user';
import { ResearchInterface } from 'interfaces/research';
import { PublicationInterface } from 'interfaces/publication';

function PublicationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: PublicationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.publication.create({ data: values as RoqTypes.publication });
      resetForm();
      router.push('/publications');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PublicationInterface>({
    initialValues: {
      title: '',
      abstract: '',
      publication_date: new Date(new Date().toDateString()),
      publisher: '',
      user_id: (router.query.user_id as string) ?? null,
      research_id: (router.query.research_id as string) ?? null,
    },
    validationSchema: publicationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Publications',
              link: '/publications',
            },
            {
              label: 'Create Publication',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Publication
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.title}
            label={'Title'}
            props={{
              name: 'title',
              placeholder: 'Title',
              value: formik.values?.title,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.abstract}
            label={'Abstract'}
            props={{
              name: 'abstract',
              placeholder: 'Abstract',
              value: formik.values?.abstract,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="publication_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Publication Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.publication_date ? new Date(formik.values?.publication_date) : null}
              onChange={(value: Date) => formik.setFieldValue('publication_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.publisher}
            label={'Publisher'}
            props={{
              name: 'publisher',
              placeholder: 'Publisher',
              value: formik.values?.publisher,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<ResearchInterface>
            formik={formik}
            name={'research_id'}
            label={'Select Research'}
            placeholder={'Select Research'}
            fetcher={() => roqClient.research.findManyWithCount({})}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/publications')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'publication',
    operation: AccessOperationEnum.CREATE,
  }),
)(PublicationCreatePage);
