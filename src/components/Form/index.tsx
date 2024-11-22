import React from 'react';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import 'yup-phone-lite';
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from 'react-native';

type FormData = {
  name: string;
  city: string;
  email: string;
  phone: string;
}

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  city: yup.string().required("Informe o nome da cidade onde você mora"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  phone: yup.string().phone('BR', 'Insira um número de celular válido').required('Informe seu número do celular.')
});

export function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    Alert.alert('Cadastro concluído com sucesso!');
  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInput
        name="city"
        control={control}
        icon="home"
        placeholder="Cidade onde mora"
        error={errors.city}
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        error={errors.email}
      />
      <ControlledInput
        name="phone"
        control={control}
        icon="phone"
        placeholder="DDD + Celular"
        keyboardType='phone-pad'
        error={errors.phone}
      />

      <Button
        title="Enviar dados"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}