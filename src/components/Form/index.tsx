import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './styles';

const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleUserRegister() {

    if (name.trim() === "") {
      return Alert.alert("Informe o nome.");
    }

    if (email.trim() === "") {
      return Alert.alert("Informe o e-mail.");
    }

    if (!(VALID_EMAIL_EXPRESSION).test(email.toLowerCase())) {
      return Alert.alert("E-mail inválido.");
    }

    if (password.trim() === "") {
      return Alert.alert("Informe a senha.");
    }

    if (password.trim().length < 6) {
      return Alert.alert("O tamanho da senha é inválido.");
    }

    if (password.trim() !== passwordConfirm.trim()) {
      return Alert.alert("A senha de confirmação não confere.");
    }

    return Alert.alert("Cadastro realizado!");
  }

  return (
    <Container>
      <Input
        icon="user"
        placeholder="Nome"
        onChangeText={setName}
        value={name}
      />
      <Input
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        onChangeText={setEmail}
        value={email}
      />
      <Input
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Input
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
      />

      <Button
        title="Cadastrar"
        onPress={handleUserRegister}
      />
    </Container>
  )
}