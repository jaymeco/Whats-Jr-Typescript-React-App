import React from 'react';
import {
    Container,
    FormContent,
    InputContainer,
    HelperText,
    Title,
    ButtonContainer,
    Button,
    RedirectText
} from './styles';
import Input from '../../../../components/Inputs';
import Textarea from '../../../../components/Textarea';
import Select from '../../../../components/Select';

interface props {
    handleToggleChangeComponent(): void;
}
const SignUp: React.FC<props> = ({ handleToggleChangeComponent }) => {
    return (
        <Container id="signup">
            <Title>Cadastre-se</Title>
            <FormContent>
                <InputContainer>
                    <Input type="text" name="username" placeholder="Usuário" />
                    <Input type="text" name="password" placeholder="Senha" />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="first_name" placeholder="Nome" />
                    <Input type="text" name="last_name" placeholder="Sobrenome" />
                </InputContainer>
                <InputContainer>
                    <Select
                        placeholder="Empresa Jr."
                        name="company"
                        optionsCompany={[
                            {id: '123', name: 'Praxis - Empresa Jr.', theme_color: '#ffcf00'}
                        ]}
                    />
                    <Select
                        placeholder="Cargo"
                        name="office"
                        options={[
                            'Diretor Presidente',
                            'Projetista',
                            'Gerente Executivo'
                        ]}
                    />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="core" placeholder="Núcleo" />
                    <Input type="text" name="ingress_year" placeholder="Ano de ingresso">
                        <HelperText>(Ano em que você entrou na EJ.)</HelperText>
                    </Input>
                </InputContainer>
                <Textarea
                    name="bio"
                    placeholder="Biografia..."
                ></Textarea>
                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <RedirectText onClick={handleToggleChangeComponent}>Já possui uma conta? Faça seu Login.</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignUp;